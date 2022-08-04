/*

  Take your code from the previous Check
  the Weather exercise and rewrite it as
  a switch statement. Feel free to add
  more cases besides 'sunny' and 'rainy'.

*/

let randomNumber = Math.round(Math.random() * 2);

let weatherPatterns = ['sunny', 'rainy', 'else'];
let weather = weatherPatterns[randomNumber];

switch (weather) {
  case weatherPatterns[0]:
    console.log("It's a beautiful day!");
    break;
  case weatherPatterns[1]:
    console.log("Grab your umbrella.");
    break;
  default:
    console.log("Let's stay inside.");
}
  
