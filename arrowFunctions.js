const add = function(a, b) {
  return a + b;
}
console.log(add(1, 2));

// remove function keyword
const subtract = (a, b) => {
  return a - b;
}
console.log(subtract(2,1));

// when we have a signle javascript expression, we can remove the curly braces and return keyword. Implicit return
const multiply = (a, b) => a * b;
console.log(multiply(2,2));

// we can remove parentheses if we have a single argument
const double = number => 2 * number;
console.log(double(4));


const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(number => 2 * number);
console.log(doubledNumbers);

// object that represent a team of people.
// without using arrow functions, teamSummary would return an error because inside the map function, the context of this in this.teamName is lost (we are defining an anonymous function and passing it off to somewhere else in the codebase  ). we can solve using .bind(this) or self = this
// arrow functions also solve this problem - lexical this.
// arrow functions bind the value of 'this' to the surrounding conext
const team = {
  members: ['Steve', 'Bill', 'Jane'],
  teamName: 'Suicide Squad',
  teamSummary: function() {
    // this === team
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
