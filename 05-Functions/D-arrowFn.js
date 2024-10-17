/**
==================================
 Arrow Functions
==================================
- Anonymous functions
- Block body syntax
- Expression body syntax
----------------------------------
* ECMAScript 2015 - ES6 feature
==================================
*/

// Syntax
// () => {};
// () => (); //In case of returnig objects in one line

console.log("==============================================");

() => {
  a = 1;
  b = 2;
  c = a + b;
};

console.log("==============================================");
// Return Statements

arrFunc = () => {
  a = 1;
  b = 2;
  c = a + b;
  // no return statement means implicit return --> return undefined;
};

retVal = arrFunc();
console.log(retVal);

console.log("-------------------------------------");
arrFunc = () => {
  a = 1;
  b = 2;
  return (c = a + b); // Block body syntax --> Explicit return statement required
};

retVal = arrFunc();
console.log(retVal);

console.log("-------------------------------------");
// arrFunc = () => {
//   return (a = 1);
// };

arrFunc = () => (a = 5); // Expression body syntax --> single statement is implicity a return statement
retVal = arrFunc();
console.log(retVal);

console.log("==============================================");
() => 5; // Implicit return with value
console.log((() => 5)());

() => (a = 1); // Implicit return with value

() => {
  a = 1;
  // Implicit return 'undefined'
};

() => {
  a = 1;
  b = 2;
  c = a + b;
  // Implicit return 'undefined'
};

console.log("==============================================");
() => {
  return (a = 1); // Explicit return with value
};

() => {
  a = 1;
  b = 2;
  return (c = a + b); // Explicit return with value
};
