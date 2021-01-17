'use strict';

// linter test - if not used this should have red marks underneath it


// keep score
var score = 0;

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
  // console.log('you are correct');
  alert('You are correct');
  score ++; // keeping score
} else if (questionOne === 'no' || questionOne === 'n') {
  alert('You are WRONG, why would you think that?');
}

// question two
var questionTwo = prompt('Is Texas the largest state?').toLowerCase();
if (questionTwo === 'yes' || questionTwo === 'y') {
  // console.log('you are correct');
  alert('No, it is not.');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  alert('You are CORRECT. The largest state is Alaska.');
  score ++; // keeping score
}

// question three
var questionThree = prompt('Is Houston the state capitol of Texas?').toLowerCase();
if (questionThree === 'yes' || questionThree === 'y') {
  // console.log('you are correct');
  alert('No, it is not.');
} else if (questionThree === 'no' || questionThree === 'n') {
  alert('You are CORRECT. The capitol of Texas is Austin.');
  score++; // keeping score
}

// question four
var questionFour = prompt('Is the mockingbird the state bird of Texas?').toLowerCase();
if (questionFour === 'yes' || questionFour === 'y') {
  // console.log('you are correct');
  alert('That is CORRECT!');
  score++; // keeping score
} else if (questionFour === 'no' || questionFour === 'n') {
  alert('You are WRONG. The mockingbird is the state bird of Texas.');
}

//question five
var questionFive = prompt('Is the Texas state motto, Bigger in Texas?').toLowerCase();
if (questionFive === 'yes' || questionFive === 'y') {
  // console.log('you are correct');
  alert('No, it is not. The state mottto is Friendship.');
} else if (questionFive === 'no' || questionFive === 'n') {
  alert('You are CORRECT.');
  score++; // keeping score
}

//question six
for (var i = 0; i < 4; i++) {
  var guessmyAge = +prompt('How old do you think I am?');
  // console.log(typeof(guessmyAge));
  var age = 48;
  if (guessmyAge === age) {
    alert('Correct! Well done!');
    score++; // keeping score
    break;
  } else if (i < 3 && guessmyAge < age) {
    alert('No, that is too low');
  } else if (i < 3 && guessmyAge > age) {
    alert('No, that is too high');
  } else if (i === 3) {
    alert('Sorry, you are out of tries. I\'m 48 years old.');
    break;
  }
}

//question seven
var favoriteMovie = ['Platoon', 'Stripes', 'Empire Strikes Back', 'Something'];
var answerCorrect = false;
var count = 6;
for (i = 0; i < count; i++) {
  var movie = prompt('Can you guess my favorite movie to watch?');
  for (var j = 0; j < favoriteMovie.length; j++) {
    if (movie === favoriteMovie[j]) {
      alert(`You are correct! ${favoriteMovie[j]} is one of my favorite movies`);
      answerCorrect = true;
      score++; // keeping score
    }
  }
  if (answerCorrect) {
    break;
  } else if (answerCorrect === false) {
    alert('No, that\'s a good one, but not one of mine');
  }

  if (i === count || answerCorrect) {
    alert(`My favorite movies are ${favoriteMovie}`);
  }
}

alert('You got ' + score + ' questions correct. Good job!');

//  alto
alert('Goodbye, ' + userName + '. Have a good one!');

// template literal or string literal
alert(`See Ya, ${userName}. I hope you enjoyed my website!`);
alert(`It's closing time, ${userName}. One last call for alcohol!`);
