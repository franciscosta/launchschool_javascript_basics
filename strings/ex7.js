// Write a function that checks whether a string is empty or not. For example:

const isBlank = string => string.length === 0 ? true : false;

console.log(
  isBlank('mars'), // false
  isBlank('  '),   // false
  isBlank('')      // true
);


