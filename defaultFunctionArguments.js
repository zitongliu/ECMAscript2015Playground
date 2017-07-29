function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET';
  }

  // logic to make the request
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');


// default function argument,
function makeAjaxRequest(url, method = 'GET') {

  return method;
  // logic to make the request
}

makeAjaxRequest('google.com', null); // if we want to pass in undefined, null or nill value
makeAjaxRequest('google.com', 'POST');


function user(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user = new user(generateId())) {
  user.admin = true;
  return user;
}

const someUser = new user(generateId());
const userPromoted = createAdminUser(someUser);

// createAdminUser(new User(generateId()));
const adminUser = createAdminUser()

console.log(someUser);
console.log(userPromoted);
console.log(adminUser);
