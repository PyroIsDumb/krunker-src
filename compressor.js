const compress = require('remove-indentation');
const fs = require('fs');

const file = fs.readFileSync('game.js', 'utf8');
const result = compress.default(file, 0).replaceAll('\n', '');
fs.writeFileSync('game.min.js', result);