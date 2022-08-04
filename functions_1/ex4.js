/*

  Write a function that accepts a single
  argument, a number, and returns the
  result of multiplying its argument by
  an exponent of 2 (also known as squaring the number).

*/

const squaredNumber = a => a * a;

console.log(squaredNumber(3)); // 9

// More interestingly:

const recursiveSquare = (a, b = a) => {
  if (b === 1) return b;
  else return a * recursiveSquare(a, b - 1);
}

console.log(recursiveSquare(3)); // 9