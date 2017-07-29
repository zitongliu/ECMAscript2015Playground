// function addNumbers(numbers) {
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0);
// }
//
// const addedNumbers = addNumbers([1,2,3,4,5]);
// console.log(addedNumbers);


// what if we want to sum all the numbers that is not in an array?
// addNumbers(1,2,3,4,5);

// Rest operator ...
// it says we have an unknown number of arguments, we want to capture all the numbers and put it inside an array 'numbers'

function addNumbers(...numbers) {
  return numbers.reduce((sum, number)=>{
    return sum + number;
  }, 0);
}

const addedNumbers2 = addNumbers(1,2,3,4,5,6,7,8,9,10);
console.log(addedNumbers2);


// Spread operator - used to flatten or spread out variables.
const defaultColors = ['red', 'green'];
const userFavouriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

// if we want to join the colors we can use:
const joinedColors = defaultColors.concat(userFavouriteColors);
console.log(joinedColors);

// or we can use spread operator
const joinedColorsSpread = ['blue', ...defaultColors, ...userFavouriteColors, ...fallColors];
console.log(joinedColorsSpread);

// we first created a new array, then inside of it we reference an existing array and put ... infront of it.
// we want to take all of the elements in the inner arrays and put them into the new array.


// rest and spread
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }

  return items;
}

const shoppingList = validateShoppingList('oranges', 'bread', 'eggs');
console.log(shoppingList);


// another example
function unshift(array, ...numbers) {
  return [...array, ...numbers];
}

const array = unshift([1,2,3],4,5,6);
console.log(array);
