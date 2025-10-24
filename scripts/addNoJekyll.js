const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname, '../out/.nojekyll'), '');
console.log('.nojekyll created in out folder');
