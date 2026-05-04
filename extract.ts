import * as fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');
const classRegex = /\b(?:bg|text|border|ring|shadow|from|to|fill|stroke)-[a-zA-Z0-9_\[\]#\/-]+\b/g;
const classes = html.match(classRegex) || [];
const uniqueClasses = Array.from(new Set(classes)).sort();

console.log(uniqueClasses.join('\n'));
