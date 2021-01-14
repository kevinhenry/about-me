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
alert('you are correct');
console.log('you are correct');
} else if ( questionOne === 'no' || questionOne === 'n' ) {
alert('you are WRONG, why would you think that?');
console.log('user is incorrect');

var questionTwo = prompt('Is Texas the largest state?').toLowerCase();
if (questionTwo === 'yes' || questionTwo === 'y') {
alert('no, it is not.');
console.log('user is incorrect');
} else if ( questionTwo === 'no' || questionTwo === 'n' ) {
alert('you are CORRECT. The largest state is Alaska.');
console.log('user is correct');

var questionThree = prompt('Is Houston the state capitol of Texas?').toLowerCase();
if (questionThree === 'yes' || questionThree === 'y') {
alert('no, it is not.');
console.log('user is incorrect');
} else if ( questionThree === 'no' || questionThree === 'n' ) {
alert('you are CORRECT. The capitol of Texas is Austin.');
console.log('user is correct');

var questionFour = prompt('Is the mockingbird the state bird of Texas?').toLowerCase();
if (questionFour === 'yes' || questionFour === 'y') {
alert('That is CORRECT!');
console.log('user is correct');
} else if ( questionFour === 'no' || questionFour === 'n' ) {
alert('you are WRONG. The mockingbird is the state bird of Texas.');
console.log('user is wrong');

var questionFive = prompt('Is the Texas state motto, Bigger in Texas?').toLowerCase();
if (questionFive === 'yes' || questionFive === 'y') {
alert('no, it is not. The state mottto is Friendship.');
console.log('user is incorrect');
} else if ( questionFive === 'no' || questionFive === 'n' ) {
alert('you are CORRECT.');
console.log('user is correct');

}

// this is not required, but have fun!
// if(questionOne === 'yes'  || questionOne === 'y') {
//  // console.log('you are correct');
// alert('you are correct');
// } else if ( questionOne === 'no' || questionOne === 'n' ) {
// alert('you are WRONG, why would you think that');
// } else {
// alert('you are WRONG!');
// }
