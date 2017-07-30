const expense = {
  type: 'Business',
  amount: '$45 USD'
}

// const type = expense.type;
// const amount = expense.amount;
// console.log(type);
// console.log(amount);
//
// // ES6 - destructuring
// // want to declare a new variable called type and set it equals to expense.type
// const { type } = expense;
// const { amount } = expense;
//
// console.log(type);
// console.log(amount);

// we can go further by:
const { type, amount } = expense;
console.log(type);
console.log(amount);

// name of the variable must be identical to the property name from the object


const savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary({name, extension, size}) {
  return `The file ${name}.${extension} is of size ${size}`;
}

const summary = fileSummary(savedFile);
console.log(summary);


// we are not limited to pull properties off objects.

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, name2, name3, name4 ] = companies;
console.log(name);
console.log(name2);
console.log(name3);
console.log(name4);

// const firstCompany = companies[0];
const [ firstCompany ] = companies;
console.log(firstCompany);

const [ company1, ...rest] = companies;
console.log(company1);
console.log(rest);
