// Run in Babel @ babeljs.io/

var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

colors.forEach(function(color){
	console.log(color);
});


// Create an array of numbers
var numbers = [1,2,3,4,5];

// Create a variable to hold the sum
var sum = 0;
var sum2 = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(function(number){
  sum += number;
});

function adder(number) {
  sum2 += number;
}

numbers.forEach(adder);

// print the sum variable => equal
console.log(sum);
console.log(sum2);



// Exercise
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var areas = [];


var calculateArea = function(input){
  var area = input.height * input.width;
  return area;
};

images.forEach(function(image){
    areas.push(calculateArea(image));
});

console.log(areas);

var areas2 = [];

images.forEach(function(image) {
  areas2.push(image.height * image.width);
});

console.log(areas2);
