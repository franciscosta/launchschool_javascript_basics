/*

  Initialize a variable weather with a
  string value being "sunny", "rainy", or anything else.

  Write an if statement that logs:

  "It's a beautiful day!" if weather is assigned to the string "sunny",
  "Grab your umbrella." if weather is assigned to the string "rainy", and
  "Let's stay inside." otherwise.
  
  Test your code with different values for weather.

*/

let randomNumber = Math.round(Math.random() * 2);

let weatherPatterns = ['sunny', 'rainy', 'else'];
let weather = weatherPatterns[randomNumber];

if (weather === weatherPatterns[1]) console.log("It's a beautiful day!");
else if (weather === weatherPatterns[2]) console.log("Grab your umbrella.");
else console.log("Let's stay inside.");