// What will the following code log to the console and why?

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
// Reference Error
// Thinks its accessing a before initialization