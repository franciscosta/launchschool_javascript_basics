// Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let finalScore = scores.reduce( (accomulator, element) => {
  if (element >= 100) accomulator += element;
  return accomulator;
}, 0);

console.log(finalScore);