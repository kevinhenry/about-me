'use strict';

// linter test - if not used this should have red marks underneath it


// keep score
var score = 0;

function entryName() {
  // get user name and offer greeting
  var userName = prompt('What should I call you?');
  alert('Hello ' + userName + ', nice to meet you!');
  console.log('the user\'s name is: ' + userName);
}
entryName();
// write 5 questions. They must accept yes or no or y or n in any case
// examples: YES, yes, YEs, yeS, yEs, Y, y
// is this an appropriate name?

function questionOne() {
  // question one
  var questionOne = prompt('Do I live in Seattle?').toLowerCase();
  if (questionOne === 'yes' || questionOne === 'y') {
    // console.log('you are correct');
    alert('You are correct');
    score++; // keeping score
  } else if (questionOne === 'no' || questionOne === 'n') {
    alert('You are WRONG, why would you think that?');
  }
}
questionOne();

function questionTwo() {
  // question two
  var questionTwo = prompt('Is Texas the largest state?').toLowerCase();
  if (questionTwo === 'yes' || questionTwo === 'y') {
    // console.log('you are correct');
    alert('No, it is not.');
  } else if (questionTwo === 'no' || questionTwo === 'n') {
    alert('You are CORRECT. The largest state is Alaska.');
    score++; // keeping score
  }
}
questionTwo();

function questionThree() {
  // question three
  var questionThree = prompt('Is Houston the state capitol of Texas?').toLowerCase();
  if (questionThree === 'yes' || questionThree === 'y') {
    // console.log('you are correct');
    alert('No, it is not.');
  } else if (questionThree === 'no' || questionThree === 'n') {
    alert('You are CORRECT. The capitol of Texas is Austin.');
    score++; // keeping score
  }
}
questionThree();

function questionFour() {
  // question four
  var questionFour = prompt('Is the mockingbird the state bird of Texas?').toLowerCase();
  if (questionFour === 'yes' || questionFour === 'y') {
    // console.log('you are correct');
    alert('That is CORRECT!');
    score++; // keeping score
  } else if (questionFour === 'no' || questionFour === 'n') {
    alert('You are WRONG. The mockingbird is the state bird of Texas.');
  }
}
questionFour();

function questionFive() {
  //question five
  var questionFive = prompt('Is the Texas state motto, Bigger in Texas?').toLowerCase();
  if (questionFive === 'yes' || questionFive === 'y') {
    // console.log('you are correct');
    alert('No, it is not. The state mottto is Friendship.');
  } else if (questionFive === 'no' || questionFive === 'n') {
    alert('You are CORRECT.');
    score++; // keeping score
  }
}
questionFive();

function questionSix() {
  //question six
  for (var i = 0; i < 4; i++) {
    // var guessMyAge = parseInt(b)('How old do you think I am?');
    var guessMyAge = +prompt('How old do you think I am?');
    // console.log(typeof(guessMyAge));
    var age = 48;
    if (guessMyAge === age) {
      alert('Correct! Well done!');
      score++; // keeping score
      break;
    } else if (i < 3 && guessMyAge < age) {
      alert('No, that is too low');
    } else if (i < 3 && guessMyAge > age) {
      alert('No, that is too high');
    } else if (i === 3) {
      alert('Sorry, you are out of tries. I\'m 48 years old.');
      break;
    }
  }
}
questionSix();


// while (numberOfGuess && !answerCorrect) {
//  var guessMyFavorites = prompt(`What are my fave? You get ${nuberOfGuess} guesses!`).toLowerCase();
//  for (var k = 0;  < myFavortieAnimals.length; k++) {
//    if (guessMyFavorites === myFavoriateAnimals[k]) {
//     alert('Correct');
//     answerCorrect = true;
//     score++;
//     break;
//    }
//  }

//question seven
// var favoriteMovie = ['Platoon', 'Stripes', 'Empire Strikes Back', 'Heathers'];
// var answerCorrect = false;
// var count = 6;
// for (i = 0; i < count; i++) {
//   var movie = prompt('Can you guess my favorite movie to watch?').toLowerCase();
//   for (var j = 0; j < favoriteMovie.length; j++) {
//     if (movie === favoriteMovie[j]) {
//       alert(`You are correct! ${favoriteMovie[j]} is one of my favorite movies`);
//       answerCorrect = true;
//       score++; // keeping score
//     }
//   }
//   if (answerCorrect) {
//     break;
//   } else if (answerCorrect === false) {
//     alert('No, that\'s a good one, but not one of mine');
//   }
//   if (i === count || answerCorrect) {
//     alert(`My favorite movies are ${favoriteMovie}`);
//   }
// }

// alert('You got ' + score + ' questions correct. Good job!');

// //  alto
// alert('Goodbye, ' + userName + '. Have a good one!');

// // template literal or string literal
// alert(`See Ya, ${userName}. I hope you enjoyed my website!`);
// alert(`It's closing time, ${userName}. One last call for alcohol!`);
