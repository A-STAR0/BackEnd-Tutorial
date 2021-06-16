// const { average, sqrt } = require('./mod.js');
// console.log(average([3, 4]));
// console.log(sqrt([1, 2, 3, 3]));
const mod = require('./mod');
console.log('object imported: ', mod);
console.log(mod.avg([1, 2, 3]));
console.log(mod.name);
console.log(mod.sqrt([1, 2, 3, 3]));
console.log('This is index.js');
