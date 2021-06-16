//NodeJS modules
/* 1. inbuilt modules 
   2.external modules
   3.usermade custom modules
*/

const fs = require('fs');
let text = fs.readFileSync('aman.txt', 'utf-8');
text = text.replace('aman', 'anshu');
console.log(text);
console.log('creating a new file');
fs.writeFileSync('anshu.txt', text);
