/*

Write code that does the reverse, starting from
a nested array of pairs and building an object.

*/

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

const obj = {};

nestedArray.forEach( element => {
  obj[element[0]] = element[1]
});

console.log(obj);