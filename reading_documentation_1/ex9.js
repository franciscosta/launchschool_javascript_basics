
// Given the following tweet:

let tweet = 'Starting to get the hang of it... #javascript #launchschool';

// What will the following statements evaluate to?

tweet.split(' ');                           // > ['Starting', 'to', 'get', ...]
tweet.split(' ').reverse();                 // > ['#launchschool', '#javascript' ... ]
tweet.split(' ').reverse().join(' ');       // > '#launchschool #javascript it... of hand the get to Starting'

