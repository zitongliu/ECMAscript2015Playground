function createBookShop(inventory) {
  return {
    inventory, // whenever key and value has the exact same name, we can condense it down
    inventoryValue() { // when a function is the value of a key, we can omit both the colon and function keyword
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find( book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent JavaScript', price: 15 }
];

const bookShop = createBookShop(inventory);

const inventoryValue = bookShop.inventoryValue();
console.log(inventoryValue);

const harryPotterPrice = bookShop.priceForTitle('Harry Potter');
console.log(harryPotterPrice);


// another example
// use jquery to make http request to some remote endpoint

function saveFile(url, data) {
  // $.ajax({ method: 'POST', url: url, data: data });
  $.ajax({ url, data, method: 'POST'});
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);
