// make code more readable

function getMessage() {
  const year = new Date().getFullYear();

  return `The year is ${year + 2 - 2}`;
}

console.log(getMessage());

const device_id = 4;
const guid = 20;
const username = "hello";

const data = `"device_id": ${device_id}, "guid": ${guid}, "username": ${username}`
console.log(data);
