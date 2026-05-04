const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('src/App.tsx', 'utf8');

// The strategy is to parse the JSX. But since HTML parsing is hard with regex, we can use a simpler approach.
// Instead of trying to reinvent the parser, let's write an script that splits by comments and ids.
// This is somewhat brittle if not done carefully.
