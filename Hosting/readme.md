# JavaScript Hoisting

**What is Hoisting?**

Hoisting is a JavaScript mechanism where variable and function declarations are moved (or "hoisted") to the top of their containing scope (either global or function scope) during the compile phase. However, only the declarations are hoisted, not the initializations. This means that you can use variables and functions before declaring them in your code, but you should be aware of how this behavior affects your scripts.

**How Does Hoisting Work?**

1. Variable Hoisting:

- JavaScript only hoists variable declarations, not initializations. This means if you declare a variable using var, JavaScript moves the declaration to the top of the scope but not the assignment.

```
console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5

```

In the above example, var myVar is hoisted to the top of its scope, but myVar = 5 remains where it is. Thus, myVar is undefined when first logged.

2. Function Hoisting:

- Function declarations are fully hoisted, meaning you can call the function before it is declared in your code.

```
greet(); // Output: "Hello, World!"

function greet() {
    console.log("Hello, World!");
}
```

In this case, the function `greet` is fully hoisted, allowing it to be called before its declaration in the code.

3. Function Expressions and Hoisting:

- Unlike function declarations, function expressions are not hoisted. This is because only the variable declaration is hoisted, not the assignment.

```
greet(); // Error: greet is not a function

var greet = function() {
    console.log("Hello, World!");
};
```

Here, the variable greet is hoisted, but its value (the function expression) is not. As a result, trying to call greet before the assignment results in an error.

4. Let and Const Variables:

- Variables declared with let and const are also hoisted but have a different behavior due to the Temporal Dead Zone (TDZ). They are not initialized until their declaration is evaluated, meaning you cannot access them before the declaration.

```
    console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
    let myLet = 10;
```

```
    console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
    const myConst = 20;
```

This example demonstrates the temporal dead zone, where let and const variables are in a "dead zone" from the start of the block until the line of declaration is executed.

5. Practical Implications of Hoisting:

- Hoisting can lead to unexpected behavior and bugs, especially in larger codebases. It is generally a good practice to declare all variables and functions at the top of their scope to avoid confusion.

**Conclusion:**

Hoisting is a fundamental concept in JavaScript that affects how code is interpreted and executed. Understanding how variables and functions are hoisted will help you avoid common pitfalls and write cleaner, more predictable JavaScript code. Always remember that while JavaScript moves declarations to the top of their scope, initializations stay in place. Knowing the nuances of hoisting can save you from unexpected errors and improve the quality of your code.
