/*

  Write a function that compares the
  length of two strings. It should
  return -1 if the first string is
  shorter, 1 if the second string is
  shorter, and 0 if they're of equal
  length, as in the following example:

*/

const compareByLength = (lhs, rhs) => {
  if (lhs.length === rhs.length) return 0;
  return lhs.length > rhs.length ? 1 : -1;
};

console.log(
  compareByLength('patience', 'perseverance'), // -1
  compareByLength('strength', 'dignity'),      //  1
  compareByLength('humor', 'grace')            //  0  
);
