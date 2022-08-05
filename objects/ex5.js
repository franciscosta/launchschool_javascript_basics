/*

Before running any code, determine what difference
there will be in the output of the two code snippets below (if any).

*/

// Snippet 1:

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // > {prefix: 'Pacific'}


// Snippet 2:

let ocean1 = {};
let prefix1 = 'Indian';

ocean1[prefix1] = 'Pacific';

console.log(ocean1); // > {Indian: 'Pacific'}