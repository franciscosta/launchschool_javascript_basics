/*

Write code that capitalizes the words
in the string 'launch school tech & talk',
so that you get the string 'Launch School Tech & Talk'.

*/

const singleCamelCaser = str => str[0].toUpperCase() + str.slice(1);

const camelCaser = str => {
  return str.split(' ').map( word => singleCamelCaser(word)).join(' ');
}

console.log(
  camelCaser('launch school tech & talk')
);