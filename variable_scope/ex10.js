// What will the following code log to the console and why?

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);


// {firstName: 'Jane', lastName: 'Doe}