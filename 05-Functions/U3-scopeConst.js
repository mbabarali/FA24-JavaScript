/**
==================================
 Scope of the variable
================================== 
 Scope of 'const' declared variables
----------------------------------
- Lexical scoping
----------------------------------
* When an identifier (argument or variable) conflicts, the identifier (argument or variable) from the innermost scope is considered. 
* With the statement const, block scopes are availble.
==================================
*/

console.log("==============================================");
function outerVarBoth() {
  console.log("----- In outerVarBoth");

  // alpha = 222;
  const alpha = 222;
  console.log(alpha);

  doPrint();
  console.log(alpha);

  function doPrint() {
    console.log("--------- In doPrint");

    // console.log(alpha);
    const alpha = 333;
    console.log(alpha);

    console.log("--------- Exiting doPrint");
    return true;
  }
}

// alpha = 111;
// // const alpha = 111;
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
    const alpha = 333;
    console.log(alpha);

    console.log("--------- Exiting doPrint");
    return true;
  }
}

// alpha = 111;
// // const alpha = 111;
// console.log(alpha);
// outerVarIn();
// console.log("--- In Global");
// console.log(alpha);

console.log("==============================================");
function outerVarOut() {
  console.log("----- In outerVarOut");

  const alpha = 222;
  console.log(alpha);

  doPrint();
  console.log(alpha);

  function doPrint() {
    console.log("--------- In doPrint");

    console.log(alpha);
    // alpha = 333; //[Syntax ERROR]: const declared variable can not be reassigned
    // console.log(alpha);

    console.log("--------- Exiting doPrint");
    return true;
  }
}

// alpha = 111;
// // const alpha = 111;
// console.log(alpha);
// outerVarOut();
// console.log("--- In Global");
// console.log(alpha);

console.log("==============================================");
function outerAuto() {
  console.log("----- In outerAuto");

  // alpha = 222; //[Syntax ERROR]: const declared variable can not be reassigned
  // console.log(alpha);

  doPrint();
  console.log(alpha);

  function doPrint() {
    console.log("--------- In doPrint");

    console.log(alpha);
    // alpha = 333; //[Syntax ERROR]: const declared variable can not be reassigned
    // console.log(alpha);

    console.log("--------- Exiting doPrint");
    return true;
  }
}

// alpha = 111;
const alpha = 111;
console.log(alpha);
outerAuto();
console.log("--- In Global");
console.log(alpha);
