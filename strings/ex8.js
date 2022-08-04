/*

Change your isBlank function from the
previous exercise to return true if the
string is empty or only contains whitespace.

*/

const isBlank = string => string.trim().length === 0 ? true : false;



console.log(
  isBlank('mars'), // false
  isBlank('  '),   // true
  isBlank('')      // true
);
