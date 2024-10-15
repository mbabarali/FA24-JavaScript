/**
==================================
 Functions
==================================
- Function Expression 
- Function Hoisting
-------------------------------------------
* In JS, functions are first-class objects which means that they can be:
  ==> passed to other functions
  ==> returned from functions
  ==> assigned to variables and properties
-------------------------------------------
* The 'function expression' does not hoist the function, hence function value is only visible after the definition.
* The scope of the 'function expression' is same as 'function declaration' except that function value is only visible after the expression statement.
-------------------------------------------
* Function Expression 
  --> Named
  --> Unnamed
* The 'function expression' can create anonymous function, while 'function declaration' can't.
* Anonymous functions means omitting name of the functions.
==================================
*/

console.log("==============================================");
// Anonymous FUNCTION EXPRESSION, assigned to variable
const sayHelloFE = function () {
  console.log("Hello!");
};

console.log("-------------------------------------");
sayHelloFE(); // Function call after FUNCTION EXPRESSION

console.log("-------------------------------------");
console.log(sayHelloFE); // Function reference after FUNCTION EXPRESSION
console.log(typeof sayHelloFE); // Function reference after FUNCTION EXPRESSION
console.log("Function Name ---> ", sayHelloFE.name); // "name" property of Function

console.log("==============================================");
// console.log(getRandomNumber); // [ERROR] Function reference before FUNCTION EXPRESSION
// console.log(typeof getRandomNumber); // [ERROR] Not hoisted [REASON: FUNCTION EXPRESSIONs are not hoisted].
// console.log(getRandomNumber); // [ERROR] Not hoisted [REASON: FUNCTION EXPRESSIONs are not hoisted].

// console.log("-------------------------------------");
// getRandomNumber(); // [ERROR] FUNCTION EXPRESSIONs are not hoisted

console.log("-------------------------------------");
// Named FUNCTION EXPRESSION, assigned to variable
const getRandomNumber = function randomGenerator() {
  console.log("getting random number...");
  Math.random();
};

console.log("-------------------------------------");
console.log(getRandomNumber);
console.log(typeof getRandomNumber);
console.log("Function Name ---> ", getRandomNumber.name); // "name" property of Function

// console.log("-------------------------------------");
// console.log(randomGenerator); // [ERROR] Name of the named function expression is local only to the function body (scope) of that named function
// console.log(typeof randomGenerator); // [ERROR]
// console.log("Function Name ---> ", randomGenerator.name);  // [ERROR]
