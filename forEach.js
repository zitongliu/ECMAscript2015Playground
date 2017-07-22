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
