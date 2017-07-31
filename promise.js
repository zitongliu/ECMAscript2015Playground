let promise = new Promise((resolve, reject) => {
  // status 'pending' means its unresolved
  // calling resolve(); or reject(); will cause the promoise to be resolved or rejected
  setTimeout(()=>{
    resolve();
  }, 3000);

});

promise
  .then(()=>{console.log('finally finished')})
  .then(()=>{console.log('i was also ran')})
  .catch(()=>{console.log('uh oh')});


// another example
// fetch helper, new feature implemented inside the browser
url = "https://jsonplaceholder.typicode.com/posts/";

// fetch returns a promise
// the response does not contain the json data, we need to run a method first
fetch(url).then(response => response.json()).then(data => console.log(data));
// SHORT COMING OF FETCH!
// whenever we make a request and the server return anything with status code more than 300 eg 404, the catch case is not entered.
// only case when you hit catch is when the network request failed all together - ie cannot connect to endpoint
