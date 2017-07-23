// const is a keyword to delcare variables which we expect the value to never change. const creates an immutable binding, for example primitive values (numbers, strings, booleans etc) are immutable. however arrays and objects are mutable

const array = [1, 2, 3, 4];
array.pop();
console.log(array);

const object = {};
object.name = 'Steve';
console.log(object.name);

// let is a keyword to declare variables which we expect the value to change over time.

// var name = 'Jane';
// var title = 'Software Engineer';
// var hourlyWage = 40;

// ES6

const name = 'Jane'; // we expect to never change the name of the employee
let title = 'Software Engineer'; // we expect the title to change when she gets promoted
let hourlyWage = 40;

// sometime later
title = 'Senior Software Engineer';
hourlyWage = 60;

// Example. By using const and let, we can see immediately make our code more readable. The variable characters will never change (note we can still push and pop elements from the array); The varable number will change.

function countVowels(targetString) {
  const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;

  for (let i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }

  return number;
}

let totalVowels = countVowels('helloworld');
console.log(totalVowels);
