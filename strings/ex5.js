/*

Given strings like the following,
how can you check whether they're
equal irrespective of whether the
characters they contain are upper or lower case?

*/

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Polar bear';

string1 === string2
string2 === string3
string3 === string1

let array = [string1, string2, string3];

const areAllEcqual = arr => {

  let equality = true;
  let index = 1;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].toLowerCase() !== arr[index].toLowerCase()) equality = false;
    if (index === arr.length) index = 0;
  }
  return equality;
};

console.log(
  areAllEcqual(array)
);