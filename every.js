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
