const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Meno Park' },
  { name: 'Uber', location: 'San Francisco' }
];

// var location = companies[0].location;
// find location of the first object 'Google'
const [{ location }] = companies;
console.log(location);


const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [firstLocation] }= Google;
console.log(firstLocation);



// signup example
function signup({password, username, dateOfBirth, city, email}) {
  // create new user
};

const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1901',
  city: 'New York'
};

signup(user);


// array destructuring example
// we got the follow from api
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

// but we need it in the form:
// [
//   {x: 4, y: 5},
//   {x: 10, y: 1},
//   {x: 0, y: 40}
// ]

const results = points.map(([x, y]) => {
  // const [x, y] = pair; - same as above
  // return {x: x, y: y};
  return {x, y};
});

console.log(results);
