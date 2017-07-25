const computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
];


let onlySomeCumputersCanRunProgram = computers.some(function(computer){
  return computer.ram >= 20;
})

console.log("---");
console.log('only some computers can run program', onlySomeCumputersCanRunProgram);


// another example

const names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

let someNamesGreaterThanFour = names.some(function(name) {
  return name.length > 4;
});

console.log('some names greater than four', someNamesGreaterThanFour);
