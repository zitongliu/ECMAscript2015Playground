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
