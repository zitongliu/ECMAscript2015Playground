const numbers = [10, 20, 30];
let sum = 0;

// old method
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log('total is: ' + sum);

// reduce helper
// we pass in an initial value as second argument.
let total = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log('total is: ' + total);


// another example
// we want to collect the value of color for each object - array of colors

const primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'}
];

// previous - this is the previos value in the iteration
let arrayOfColors = primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, [])

console.log(arrayOfColors);

//  example of reduce
// given a string that contains a certain number of parentheses, are the parentheses balanced?,


function balancedParens(string) {
   // turn string into array
   // everytime we see open, we increase counter by one, every time we see closing, we decrease counter by one
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0 ) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char ===")") {
      return --previous;
    }
    return previous;
  }, 0);
}

let isBalanced = balancedParens("(())");
console.log(isBalanced);

isBalanced = balancedParens("((((()");
console.log(isBalanced);

isBalanced = balancedParens(")()");
console.log(isBalanced);


// another example
const desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

const deskTypes = desks.reduce(function(previous, desk) {
    if (desk.type === 'sitting') {
      previous.sitting += 1;
      return previous;

    }
    if (desk.type === 'standing') {
      previous.standing += 1;
      return previous;
    }
}, { sitting: 0, standing: 0 });

console.log(deskTypes);


//Write a function called 'unique' that will remove all the duplicate values from an array.

// For example, given the following array:
// var numbers = [1, 1, 2, 3, 4, 4];
// Your function should return
// [1, 2, 3, 4]

function removeDuplicate(array) {
  return array.reduce(function(acc, number){
    let duplicate = acc.find(num => num === number);
    if (!duplicate) {
      acc.push(number);
    }
    return acc;
  }, []);
}

const numbers = [1, 1, 2, 3, 4, 4, 6, 6];

const duplicateFreeNumbers = removeDuplicate(numbers);
console.log(duplicateFreeNumbers);
