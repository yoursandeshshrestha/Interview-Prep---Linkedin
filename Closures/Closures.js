// =================== Code ONE =================== //
function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Logs: "I am outside!"

// =================== Code TWO =================== //
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // Logs: 1
console.log(counter()); // Logs: 2
console.log(counter()); // Logs: 3

// =================== Code Three =================== //
function greeting(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetJohn = greeting("John");
greetJohn(); // Logs: "Hello, John!"
const greetJane = greeting("Jane");
greetJane(); // Logs: "Hello, Jane!"
