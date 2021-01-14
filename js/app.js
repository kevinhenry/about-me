'use strict';

// linter test - if not used this should have red marks underneath it

// get user name and offer greeting
var userName = prompt('What should I call you?');
alert('Hello ' + userName + ', nice to meet you!');
console.log('the user\'s name is: ' + userName);

// write 5 questions. They must accept yes or no or y or n in any case
// examples: YES, yes, YEs, yeS, yEs, Y, y
// is this an appropriate name?

// question one
var questionOne = prompt('Do I live in Seattle?').toLowerCase();
if (questionOne === 'yes' || questionOne === 'y') {
  alert('You are correct');
} else if (questionOne === 'no' || questionOne === 'n') {
  alert('You are WRONG, why would you think that?');
}

var questionTwo = prompt('Is Texas the largest state?').toLowerCase();
if (questionTwo === 'yes' || questionTwo === 'y') {
  alert('No, it is not.');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  alert('You are CORRECT. The largest state is Alaska.');
}

var questionThree = prompt('Is Houston the state capitol of Texas?').toLowerCase();
if (questionThree === 'yes' || questionThree === 'y') {
  alert('No, it is not.');
} else if (questionThree === 'no' || questionThree === 'n') {
  alert('You are CORRECT. The capitol of Texas is Austin.');
}

var questionFour = prompt('Is the mockingbird the state bird of Texas?').toLowerCase();
if (questionFour === 'yes' || questionFour === 'y') {
  alert('That is CORRECT!');
} else if (questionFour === 'no' || questionFour === 'n') {
  alert('You are WRONG. The mockingbird is the state bird of Texas.');
}

var questionFive = prompt('Is the Texas state motto, Bigger in Texas?').toLowerCase();
if (questionFive === 'yes' || questionFive === 'y') {
  alert('No, it is not. The state mottto is Friendship.');

} else if (questionFive === 'no' || questionFive === 'n') {
  alert('You are CORRECT.');
}
