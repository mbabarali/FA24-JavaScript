/**
==================================
 IIFE (Functions)
==================================
 IIFE Syntaxes
----------------------------------
- AKA Self-Executing Anonymous Function
----------------------------------
Anonymous function expression, IIFE, syntax (<function>)()
 * First part   ==> Grouping operator ()          ==> Lexical scoping within the grouping operator ().
 * Second part  ==> Interpret/ Invoke operator () ==> Create the IIFE () to directly interpret the function.
----------------------------------
Anonymous function expression, Immediately Invoked Function Expression (IIFE)
  Syntax A:  (<function>)()
      Syntax 1:  (function () {})()
      Syntax 2:  ( ()  =>    {})()

  Syntax B:  !<function>() [deprecated or ambiguous syntaxes]
      Syntax 3:  !function () {}()
      Syntax 4:  !()  =>    {}()
==================================
*/

console.log("==============================================");

// Normal function ----> Re-useable function i.e., Re-useable code
const loggerFE = function () {
  console.log("Hi! I am function -- Invoked now.");
};

loggerFE();

console.log("-------------------------------------");
// IIFE -- Syntax 1 (A) -- function keyword
(function () {
  console.log(
    "Hi! I am IIFE -- Syntax 1. I am created and invoked immediately [once only]."
  );
})();

console.log("-------------------------------------");
// IIFE -- Syntax 2 (A) -- arrow function
(() => {
  console.log(
    "Hi! I am IIFE -- Syntax 2. I am created and invoked immediately [once only]."
  );
})();

/*
console.log("==============================================");
// ---------------------------------
// Deprecated or ambiguous Syntaxes
// ---------------------------------
// IIFE -- Syntax 3 (B)
!(function () {
  console.log(
    "Hi! I am IIFE -- Syntax 3. I am created and invoked immediately [once only]."
  );
})();

// IIFE -- Syntax 4 (B)
!(() => {
  console.log(
    "Hi! I am IIFE -- Syntax 4. I am created and invoked immediately [once only]."
  );
})();
*/
