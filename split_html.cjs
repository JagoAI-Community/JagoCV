const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexHtmlPath, 'utf8');

const views = [
  'view-landing',
  'view-login',
  'view-register',
  'view-dashboard',
  'view-profile',
  'view-create-cv',
  'view-design-resume',
  'view-build-portfolio',
  'view-cv-result',
  'view-resume-result',
  'view-portfolio-result',
  'view-pricing',
  'view-preview-gallery'
];

const viewsDir = path.join(__dirname, 'src', 'views');
if (!fs.existsSync(viewsDir)) {
  fs.mkdirSync(viewsDir, { recursive: true });
}

let remainingHtml = content;

// Use regex to extract each view
views.forEach(viewId => {
  // Regex to find <div id="viewId" ...> ... </div>
  // This is tricky with nested divs. Let's use a simple parsing approach.
  const idStr = `id="${viewId}"`;
  const startIndex = content.indexOf(idStr);
  if (startIndex === -1) {
    console.log(`View ${viewId} not found!`);
    return;
  }
  
  // Find the opening <div
  let tagStart = content.lastIndexOf('<div', startIndex);
  
  // Count divs to find the matching closing tag
  let divCount = 0;
  let endIndex = -1;
  let i = tagStart;
  
  while (i < content.length) {
    if (content.substr(i, 4) === '<div') {
      divCount++;
      i += 4;
    } else if (content.substr(i, 6) === '</div>') {
      divCount--;
      if (divCount === 0) {
        endIndex = i + 6;
        break;
      }
      i += 6;
    } else {
      i++;
    }
  }
  
  if (endIndex !== -1) {
    const viewHtml = content.substring(tagStart, endIndex);
    fs.writeFileSync(path.join(viewsDir, `${viewId}.html`), viewHtml);
    console.log(`Extracted ${viewId}.html (${viewHtml.length} bytes)`);
    
    // Replace with a placeholder
    remainingHtml = remainingHtml.replace(viewHtml, `<!-- INJECT_VIEW_${viewId} -->`);
  }
});

fs.writeFileSync(path.join(__dirname, 'index.html.slim'), remainingHtml);
console.log('Created index.html.slim');
