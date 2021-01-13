'use strict';

// linter test - if not used this should have red marks underneath it

// get user name and offer greeting
var userName = prompt('Hello, what\'s your name?');
alert('Hello ' + userName + ', nice to meet you!');

// write 5 questions. They must accept yes or no or y or n in any case
// examples: YES, yes, YEs, yeS, yEs, Y, y

var questionOne = prompt('Do I live in Seattle?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y') {
  // console.log('you are correct');
  alert('you are correct');
}
else if(questionOne === 'no' || questionOne === 'n' ){
  alert('you are WRONG');
}
