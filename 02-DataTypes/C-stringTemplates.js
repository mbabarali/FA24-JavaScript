/**
==================================
 Data Types [Dig deep]
==================================
 01- String
    ---> String Literals (Before ES6)
    ---> Template Strings (After ES6 i.e. ECMAScript 2015)
        ** A.K.A String Templates or String Templates Literals or Back-Tics Syntax
    ---> String Interpolation (After ES6 i.e. ECMAScript 2015)
    ---> Tagged Templates 
        ** Tag Functions
==================================
*/

console.log("==============================================");
console.log("=============== STRING TEMPLATES =============");
str = "This is a line"; // String literal
str = "This is line one. \n" + "This is line two. \n" + "This is line three."; // String literal
console.log(str);
console.log(typeof str);

// Multi-line strings
str = `This is line one. 
This is line two.
This is line three.`; // String template literals (Since ES6)
console.log(str);
console.log(typeof str);

console.log("==============================================");
console.log("============= STRING INTERPOLATION ===========");
// Replacing variables/expressions with their values with ${} (Since ES6)

greeting = "Welcome dear"; // String literal

str = `${greeting}`; // String Template and String Interpolation (Since ES6)
console.log(str);
console.log(typeof str);

console.log("-------------------------------------");
str = greeting + " Mr Khan"; // Concatenation BRFORE ES6 uses + operator // String literal
console.log(str);
console.log(typeof str);

str = `${greeting} Mr Khan`; // Concatenation since ES6 using string template and string interpolation // String template
console.log(str);
console.log(typeof str);

console.log("==============================================");
console.log("=============== TAGGED TEMPLATES =============");
// ** Tags allow you to parse template literals with a function.
// ** The first argument of a TAG FUNCTION contains an array of string values. The remaining arguments are related to the expressions.

function multiply(stringArr, firstExpr, secondExpr) {
  console.log(stringArr);
  console.log(typeof stringArr);
  return firstExpr * secondExpr;
}

// Syntax --> TagFunction`String Template with/without Expression(s)`
let result = multiply`multiply ${5} and ${10} and give result`;
console.log(result);

console.log("-------------------------------------");
function multiplyOtherway(stringArr, firstExpr, secondExpr) {
  console.log(stringArr);
  console.log(typeof stringArr);
  return `Result is ${firstExpr * secondExpr}`;
}

// Syntax --> TagFunction`String Template with/without Expression(s)`

result = multiplyOtherway`multiply ${5} and ${10} and give result`;

console.log(result);
