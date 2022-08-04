/*

  Write a function that takes an ISO 639-1
  language code and returns a greeting in
  that language. You can take the examples
  below or add whatever languages you like.

*/

const greet = (isoCode) => {
  const options = {
    en: 'Hi!',
    fr: 'Salut!',
    pt: 'Olá!',
    de: 'Hallo!',
    sv: 'Hej',
    af: 'Haai!'};

  return options[isoCode] ? options[isoCode] : 'Code not available';
};

console.log(
  greet('en'), // 'Hi!'
  greet('fr'), // 'Salut!'
  greet('pt'), // 'Olá!'
  greet('de'), // 'Hallo!'
  greet('sv'), // 'Hej!'
  greet('af'), // 'Haai!'
  greet('djdh') // 'Haai!'
);
