console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5

greet(); // Output: "Hello, World!"
function greet() {
  console.log("Hello, World!");
}

greet(); // Error: greet is not a function
var greet = function () {
  console.log("Hello, World!");
};

console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 20;
