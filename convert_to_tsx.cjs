const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Extract the body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
  console.error("No body found");
  process.exit(1);
}

let bodyHtml = bodyMatch[1];

// Extract the <script> blocks inside the body, since we need to keep them or move them
const scripts = [];
bodyHtml = bodyHtml.replace(/<script(?![^>]*src=\")[^>]*>([\s\S]*?)<\/script>/g, (match, code) => {
  scripts.push(code);
  return '';
});

// Remove module scripts
bodyHtml = bodyHtml.replace(/<script[^>]*src="[^"]*"[^>]*><\/script>/g, '');

// Now we need to convert HTML to JSX
let jsx = bodyHtml;

// 1. Comments
jsx = jsx.replace(/<!--([\s\S]*?)-->/g, (match, group) => `{/*${group}*/}`);

// 2. class -> className, for -> htmlFor
jsx = jsx.replace(/\bclass="/g, 'className="');
jsx = jsx.replace(/\bfor="/g, 'htmlFor="');

// 3. self-closing tags
jsx = jsx.replace(/<(input|img|br|hr|meta|link)([^>]*?)(?<!\/)>/g, '<$1$2 />');

// 4. SVG attributes kebab-case -> camelCase
const svgAttrs = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'color-interpolation-filters', 'stroke-miterlimit'];
svgAttrs.forEach(attr => {
  const camel = attr.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  jsx = jsx.replace(new RegExp(`\\b${attr}="`, 'g'), `${camel}="`);
});

// 5. onclick="" -> onClick={() => (window as any)...}
// Since handler inside onclick="doSomething(1, 'a')" needs to be executed
jsx = jsx.replace(/\bonclick="([^"]+)"/g, (match, handler) => {
  return `onClick={() => { (window as any).${handler.replace(/this/g, 'null')} }}`;
});

// Remove any style strings using string concat or we can convert them, but hopefully none are too complex
jsx = jsx.replace(/style="([^"]+)"/g, (match, styleStr) => {
  if(styleStr.includes('width:')) {
    const w = styleStr.replace('width:', '').replace(';', '').trim();
    if(w.includes('%')) {
        return `style={{ width: '${w}' }}`;
    }
  }
  if(styleStr.includes('display:')) {
     const d = styleStr.replace('display:', '').replace(';', '').trim();
     return `style={{ display: '${d}' }}`;
  }
  return match;
});

// Wrap in App component
let tsxCode = `import React, { useEffect } from 'react';
import './index.css';

export default function App() {
  useEffect(() => {
    // Import main logic dynamically so it runs after render
    import('./main');
  }, []);

  return (
    <>
      ${jsx}
    </>
  );
}
`;

fs.writeFileSync('src/App.tsx', tsxCode);

// Write the script logics into main.ts and export functions to window
const mainTsCode = fs.readFileSync('src/main.ts', 'utf8');

// Find all function declarations in the scripts
let exportsToWindow = "";
scripts.forEach(script => {
    // Very simple matching of function names
    const funcs = script.match(/function\s+([a-zA-Z0-9_]+)/g);
    if (funcs) {
        funcs.forEach(f => {
            const fName = f.split(/\s+/)[1];
            exportsToWindow += `(window as any).${fName} = ${fName};\n`;
        });
    }
});

let addedLogic = scripts.join('\n') + '\n' + exportsToWindow;
fs.writeFileSync('src/main.ts', mainTsCode + '\n' + addedLogic);

console.log("Converted to App.tsx");
