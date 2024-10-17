/**
==================================
 Functions
==================================
- Function Declaration (AKA , Function Definition or Function Statement)
- Function Hoisting
----------------------------------
* In JS, functions are first-class objects which means that they can be:
  ==> passed to other functions
  ==> returned from functions
  ==> assigned to variables and properties
----------------------------------
* The 'function declaration' creates functions that are hoisted and visible in its scope.
* The 'function declaration' is hoisted to top of its scope can be called anywhere in its scope.
* If 'function declaration' is nested in parent function, then parent function block is scope of the nested function.
* If 'function declaration' is at top-level of the program, then complete program is scope of the function.
==================================
*/

console.log("==============================================");
// Named always
function print() {
  console.log("[print] Functions are fundamental to JS.");
}

console.log("-------------------------------------");
print(); // Function call after FUNCTION DECLARATION

console.log("-------------------------------------");
console.log(print); // Function reference after FUNCTION DECLARATION
console.log(typeof print); // Function reference after FUNCTION DECLARATION
console.log("Function Name ---> ", print.name); // "name" property of Function

console.log("==============================================");
// Hoisting the FUNCTION DECLARATIONs

greetings(); // Function call before FUNCTION DECLARATION

console.log(greetings); // Function reference before FUNCTION DECLARATION
console.log(typeof greetings); // Function reference before FUNCTION DECLARATION
console.log("Function Name ---> ", greetings.name); // "name" property of Function

console.log("-------------------------------------");
function greetings() {
  console.log("[greetings] Hello! there.");
}

console.log("==============================================");
function show() {
  console.log("[show] Work hard.");
}

// console.log(logger); // [ERROR] Function reference before variable with FUNCTION DECLARATION
// console.log(typeof logger); // [ERROR] Not hoisted [REASON: let/var INITIALIZATIONs are not hoisted].
// console.log(logger); // [ERROR] Not hoisted [REASON: let/var INITIALIZATIONs are not hoisted].

// console.log("-------------------------------------");
// logger(); // [ERROR] Not hoisted [REASON: let/var INITIALIZATIONs are not hoisted].

console.log("-------------------------------------");
let logger = show; // Function declaration assigned to another variable

console.log("-------------------------------------");
console.log(logger); // See in Browser Console
console.log(typeof logger); // Function reference after variable with FUNCTION DECLARATION
console.log("Function Name ---> ", logger.name); // "name" property of variable with FUNCTION DECLARATION

console.log("-------------------------------------");
logger; // Do nothing
logger(); // Function call
