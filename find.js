const users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

let user;

// old method
for (let i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break; // once we find a particular user, we dont need to continue lookng in the loop
  }
}


// ES6 method
// Find helper walk through every element, for each element pass it through an iterator function. The iterator will return either true or false. When true is returned, it will stop

user = users.find(function(user) {
  return user.name === 'Alex';
});

// the find help will however only find the first element that returns true. If we have 2 elements that return true, only the first will be returned


function Car(model) {
  this.model = model;
}

const cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

const focus = cars.find(function(car){
  return car.model === 'Focus';
})

console.log(focus);
