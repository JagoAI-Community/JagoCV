const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace input backgrounds
html = html.replace(/bg-slate-50\/50 dark:bg-\[#0B1221\]\/50/g, 'bg-slate-100 dark:bg-[#0B1221]/50');

// Replace borders to be more visible
html = html.replace(/border border-slate-300\/80 dark:border-slate-700\/80/g, 'border border-slate-300 dark:border-slate-700/80');

// Replace specifically in the "Select ATS Layout"
html = html.replace(/bg-slate-50\/50 dark:bg-\[#0B1221\]\/50 cursor-pointer/g, 'bg-slate-100 dark:bg-[#0B1221]/50 cursor-pointer');

// Fix inner sections in CV manual dummy block
html = html.replace(/bg-slate-50\/30 dark:bg-\[#0B1221\]\/30/g, 'bg-slate-100 dark:bg-[#0B1221]/30');

fs.writeFileSync('index.html', html);
console.log('Replacements completed.');
