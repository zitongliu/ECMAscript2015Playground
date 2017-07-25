const computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
];


// old method
let allComputersCanRunProgram = true;
let onlySomeCumputersCanRunProgram = false;


for (let i = 0; i < computers.length; i++) {
  let computer = computers[i];

  if (computer.ram < 20) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeCumputersCanRunProgram = true;
  }
}

console.log("---");
console.log('all computers can run program:', allComputersCanRunProgram);
console.log('only some computers can run program', onlySomeCumputersCanRunProgram);

// every helper
// for every element in the array, take the element and pass it through the iterator function. The iterator function returns a boolean value for each element. We then perform an 'AND' operation on the all the results and returns true or false.

allComputersCanRunProgram = computers.every(function(computer){
  return computer.ram >= 20;
});

console.log("---");
console.log('all computers can run program:', allComputersCanRunProgram);


// another example

const names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

let allNamesGreaterThanFour = names.every(function(name) {
  return name.length > 4;
});

console.log('every name greater than four', allNamesGreaterThanFour);



// form input validation example - we want to make sure user has entered some information

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  // this is saying a field is valid if the length is greater than zero
  return this.value.length > 0;
}

const username = new Field('2cool');
let password = new Field("my_password");
const birthdate = new Field("1/1/1901");

const fields = [username, password, birthdate];


let fieldsValid = fields.every(function(field) {
  return field.validate();
})

if (fieldsValid) {
  console.log('valid inputs');
} else {
  console.log('invalid inputs');
}
