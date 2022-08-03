/*

  The MDN page for Date lists two methods to get the year of a date.
  What is the difference between the two methods and which one should you use?

*/

let today = new Date();

console.log(
  today.getYear(),    // > A number representing the year of the given date, according to local time, minus 1900.
  today.getFullYear() // > The actual year
);



