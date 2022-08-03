/*

  Is there a method to capitalize a string,
  for example turning 'mountain' into 'Mountain'?

*/

// There isn't a built-in method

function camelCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}



console.log(
  camelCase('mountain')
);