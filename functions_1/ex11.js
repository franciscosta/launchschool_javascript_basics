/*

Building on your solutions from the
previous exercises, write a function
localGreet that takes a locale as input,
and returns a greeting. The locale
allows us to greet people from different
countries differently also when they
share the language, for example:

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

Distinguish greetings for English speaking
countries like the US, UK, Canada, or
Australia in your implementation, and feel
free to fall back on the language-specific
greetings in all other cases, for example:

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

When implementing localGreet, make sure to
re-use your extractLanguage, extractRegion
and greet functions from the previous exercises.

*/

function localGreet(code) {

  const greet = (lang, region) => {
    const greetings = {
      en: {
        US: 'Hey!',
        GB: 'Hello!',
        AU: 'Howdie!'
      },
      fr: {
        FR: 'Salut!',
        CA: 'Salut!',
        MA: 'Salut!'
      }};
  
    return greetings[lang][region] ? greetings[lang][region] : 'Hi there!';
  };

  const extractLanguage = code => code.slice(0, 2);
  
  const extractRegion = code => code.slice(3, 5);
  
  return greet(extractLanguage(code), extractRegion(code));

}

console.log(
  localGreet('en_US.UTF-8'), // 'Hey!'
  localGreet('en_GB.UTF-8'), // 'Hello!'
  localGreet('en_AU.UTF-8'), // 'Howdy!'
  localGreet('fr_FR.UTF-8'), // 'Salut!'
  localGreet('fr_CA.UTF-8'), // 'Salut!'
  localGreet('fr_MA.UTF-8')  // 'Salut!'
);