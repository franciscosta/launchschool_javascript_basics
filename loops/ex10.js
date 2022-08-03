/*

  What is the difference between the following
  two code snippets? Check the MDN documentation
  on while and do...while.

*/


// Executes only if condition is true
// In this case it does not execute at all
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// Executes the condition at least once
let counter1 = 0;

do {
  console.log('Woooot!');
  counter1 -= 1;
} while (counter1 > 0);