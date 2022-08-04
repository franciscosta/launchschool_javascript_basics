/*

  Write a function that returns the first element of an input array. For example:

*/

const first = arr => arr[0] ? arr[0] : 'The array is empty';

console.log(
  first(['Earth', 'Moon', 'Mars']), // 'Earth'
  first([])
);

