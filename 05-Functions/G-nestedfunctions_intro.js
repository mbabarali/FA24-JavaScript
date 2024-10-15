/**
==================================
 Nested Functions
================================== 
- Nesting a function
- Outer function
- Inner function
- Outer scope
- Inner scope
---------------------------------- 
* Inner functions forms a closure. 
  --> They can access arguments of the outer function.
  --> They can access variable declared in the outer function.
  --> They can access variable visible in the outer function.
* The scope of the 'function' is the block of its parent function. It can be called from within function block of its parent.
* The scope of the 'variable in a function' is the block of that function (including the functions defined/nested in that block) 
==================================
*/

console.log("==============================================");

function showMessage(msg) {
  console.log(msg);
  return true;
}

showMessage("Good Morning.");

console.log("==============================================");
function printMessage() {
  // Outer Scope
  msg = "Good Morning.";

  function doPrint() {
    // Inner Scope
    console.log(msg);
    return true;
  }

  doPrint();
}

printMessage();

console.log("==============================================");
function printCustomMessage(msg) {
  // Outer Scope

  function doPrint() {
    // Inner Scope
    console.log(msg);
    return true;
  }

  doPrint();
}

printCustomMessage("Good Evening.");
