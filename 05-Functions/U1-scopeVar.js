/**
==================================
 Scope of the variable
================================== 
 Scope of 'var' declared variables
----------------------------------
- Lexical scoping
----------------------------------
* When an identifier (argument or variable) conflicts, the identifier (argument or variable) from the innermost scope is considered. 
* With the statement var, only following scopes are availble:
  ==> function scopes
  ==> the global scope
==================================
*/

console.log("==============================================");
function outerVarBoth() {
  console.log("----- In outerVarBoth");

  var alpha = 222;
  console.log(alpha);

  doPrint();
  console.log(alpha);

  function doPrint() {
    console.log("--------- In doPrint");

    console.log(alpha);
    var alpha = 333;
    console.log(alpha);

    console.log("--------- Exiting doPrint");
    return true;
  }
}

// alpha = 111;
// console.log(alpha);
// outerVarBoth();
// console.log("--- In Global");
// console.log(alpha);

console.log("==============================================");
function outerVarIn() {
  console.log("----- In outerVarIn");

  alpha = 222;
  console.log(alpha);

  doPrint();
  console.log(alpha);

  function doPrint() {
    console.log("--------- In doPrint");

    console.log(alpha); // Local 'alpha'
    var alpha = 333; // Initialied, not hoisted
    console.log(alpha); // Local 'alpha'

    console.log("--------- Exiting doPrint");
    return true;
  }
}

// alpha = 111;
// console.log(alpha);
// outerVarIn();
// console.log("--- In Global");
// console.log(alpha);

console.log("==============================================");
function outerVarOut() {
  console.log("----- In outerVarOut");

  var alpha = 222;
  console.log(alpha);

  doPrint();
  console.log(alpha);

  function doPrint() {
    console.log("--------- In doPrint");

    console.log(alpha);
    alpha = 333;
    console.log(alpha);

    console.log("--------- Exiting doPrint");
    return true;
  }
}

// alpha = 111;
// console.log(alpha);
// outerVarOut();
// console.log("--- In Global");
// console.log(alpha);

console.log("==============================================");
function outerVarNone() {
  console.log("----- In outerVarNone");

  alpha = 222;
  console.log(alpha);

  doPrint();
  console.log(alpha);

  function doPrint() {
    console.log("--------- In doPrint");

    console.log(alpha);
    alpha = 333;
    console.log(alpha);

    console.log("--------- Exiting doPrint");
    return true;
  }
}

// alpha = 111;
// console.log(alpha);
// outerVarNone();
// console.log("--- In Global");
// console.log(alpha);
