const products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'potatoes', type: 'vegetable', quantity: 89, price: 4 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

// if we want to see all the fruits

// using the old method we do
var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i])
  }
}

console.log('old method filtered fruits:');
console.log(filteredProducts);

// using es6

let filteredProductsNew = products.filter(function(product){
  return product.type === 'fruit';
});

console.log('new method filtered fruits:');
console.log(filteredProductsNew);

filteredProductsNew = products.filter(function(product){
  return product.type === 'vegetable';
});

// filterd that only keep vegetable with quantity greater than 0 and less than 10

filteredProducts = products.filter(function(product){
  return (
    product.type === 'vegetable' &&
    product.quantity > 0 &&
    product.price <= 10
  );
});

console.log('vegetables in stock that is 10 dollars or less');
console.log(filteredProducts)


// find comments for a particular post

const post = {id: 4, title: 'New Post'};
const comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 3, content: 'it was ok'},
  {postId: 4, content: 'neat'}
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment){
    return comment.postId === post.id;
  })
}

let commentsForAPost = commentsForPost(post, comments);
console.log(commentsForAPost);

// filter users with admin access

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
    return user.admin;
});

console.log(filteredUsers);
