// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require('fs');
fs.readFile('aman.txt', 'utf-8', (err, data) => {
  if (!err) console.log(data);
  else console.log('error:', err);
});//asynchronus call
console.log('This is a message');
