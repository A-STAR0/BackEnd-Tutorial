console.log('This is module');
function average(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum / arr.length;
}
function sqrt(arr) {
  let sqrt = 0;
  arr.forEach((element) => {
    sqrt += element;
  });
  return Math.sqrt(sqrt);
}

// module.exports = { average, sqrt };

module.exports = {
  avg: average,
  sqrt: sqrt,
  name: 'aman mishra',
  Repo: 'Backend-Tutorial',
};//exporting as an object
