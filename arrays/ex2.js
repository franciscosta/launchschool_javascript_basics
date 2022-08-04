// Write a function that returns the last element of an input array. For example:

const last = arr => arr[arr.length - 1] ? arr[arr.length - 1] : 'The array is empty';

console.log(
  last(['Earth', 'Moon', 'Mars']), // 'Mars'
  last([])
);

