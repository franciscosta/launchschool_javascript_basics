/*

Implement a function catAge that takes a number of
human years as input and converts them into cat years.
Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.

*/

const catAge = years => {
  let result = 0;
  for (let i = 1; i <= years; i += 1)  {
    switch (i) {
      case 1: 
        result += 15;
        break;
      case 2:
        result += 9;
        break;
      default:
        result += 4;
    }
  }
  return result;
};


console.log(
  catAge(0), // 0
  catAge(1), // 15
  catAge(2), // 24
  catAge(3), // 28
  catAge(4) // 32
);
