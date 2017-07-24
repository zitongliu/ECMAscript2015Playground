const products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' }
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
