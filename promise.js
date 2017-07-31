let promise = new Promise((resolve, reject) => {
  // status 'pending' means its unresolved
  // calling resolve(); or reject(); will cause the promoise to be resolved or rejected
  resolve();
});

promise
  .then(()=>{console.log('finally finished')})
  .then(()=>{console.log('i was also ran')})
  .catch(()=>{console.log('uh oh')});
