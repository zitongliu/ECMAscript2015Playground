var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
	doubledNumbers.push(numbers[i]*2);
}

var doubled = numbers.map(function(number){
	return number * 2;
})

console.log(doubledNumbers);
console.log(doubled);


var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'EXPENSIVE' }
];

var prices = cars.map(function(car) {
  return car.price;
});

console.log(prices);


// using map, create a new array that contains the 'height' property of each object. Assign this new array to the variable 'heights'. Don't forget to use the 'return' keyword in the function!

var images = [
  {height:'34px',width:'39px'},
  {height:'54px',width:'19px'},
  {height:'83px',width:'75px'}
];

var heights = images.map(function(image){
  return image.height;
});

console.log(heights);


// using map, create a new array that contains the distance / time value from each trip. In other words, the new array should contain the (distance/time) value. Assign the result to the variable 'speeds'.

var trips = [
  {distance: 35, time: 10},
  {distance: 90, time: 50},
  {distance: 59, time: 25}
];


var speeds = trips.map(function(trip) {
  return trip.distance / trip.time;
})

console.log(speeds);

// Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object.
//
// Example:
//
// var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
// pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
//
// Hint:
//
// Remember that you can access a property on an object by using square bracket notation. For example...
//
// var person = { name: 'Bill' };
// person['name'] // returns 'Bill'

var pluck = function(inputArray, searchProperty) {
  var results = inputArray.map(function(element){
    return element[searchProperty];
  });
  return results;
}

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
var colors = pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
console.log(colors);
