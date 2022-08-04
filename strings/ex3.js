/*

  Implement a function repeat that repeats an
  input string a given number of times, as
  shown in the example below; without using
  the pre-defined string method String.prototype.repeat().

*/

const repeat = (times, str) => {
  let string = '';
  for (let i = 0; i < times; i += 1) {
    string += str;
  }
  return string;
};

console.log(
  repeat(3, 'ha') // 'hahaha'
);
