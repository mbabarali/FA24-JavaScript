/**
==================================
 Scope of the variable
================================== 
 Scope of 'let' declared variables
----------------------------------
- Lexical scoping
----------------------------------
* When an identifier (argument or variable) conflicts, the identifier (argument or variable) from the innermost scope is considered. 
* With the statement let, block scopes are availble.
================================== 
*/

console.log("==============================================");
function outerVarBoth() {
  console.log("----- In outerVarBoth");

  // alpha = 222;
  let alpha = 222;
  console.log(alpha);

  doPrint();
  console.log(alpha);

  function doPrint() {
    console.log("--------- In doPrint");

    // console.log(alpha);
    let alpha = 333;
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

    // console.log(alpha);
    let alpha = 333;
    console.log(alpha);

    console.log("--------- Exiting doPrint");
    return true;
  }
}

// alpha = 111;
// // let alpha = 111;
// console.log(alpha);
// outerVarIn();
// console.log("--- In Global");
// console.log(alpha);

console.log("==============================================");
function outerVarOut() {
  console.log("----- In outerVarOut");

  let alpha = 222;
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
// // let alpha = 111;
// console.log(alpha);
// outerVarOut();
// console.log("--- In Global");
// console.log(alpha);

console.log("==============================================");
function outerAuto() {
  console.log("----- In outerAuto");

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
// // let alpha = 111;
// console.log(alpha);
// outerAuto();
// console.log("--- In Global");
// console.log(alpha);
