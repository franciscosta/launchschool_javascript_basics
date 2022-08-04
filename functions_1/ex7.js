/*

  Use JavaScript's string methods on
  the string 'Captain Ruby' to produce
  the string 'Captain JavaScript'.

*/

const replace = (string, wordToReplace, newWord) => {
  return string.replace(wordToReplace, newWord);
}

console.log(replace('Captain Ruby Hello', 'Ruby', 'Javascript'));