/**
==================================
 Nested Functions
================================== 
- Lexical scoping
- Lexical environment
- Nested functions
- Inner function and outer function 
- Function scope
- Closure
- Scope chaining
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
function OuterFnEx0() {
  // Outer Scope

  function innerFn() {
    // Inner Scope
    console.log("Hello"); // Literal Value
    return true;
  }

  innerFn();
}

OuterFnEx0();

console.log("==============================================");
function OuterFnEx1(msg) {
  // Outer Scope

  function innerFn() {
    // Inner Scope
    console.log(msg); // 'msg' variable from lexical-environment/outer-scope
    return true;
  }

  innerFn(); // RECENT message 'msg' captured by this execution/function-call
}

OuterFnEx1("Hello");
OuterFnEx1("Assalam o alaikum");

console.log("==============================================");
function OuterFnEx2(msg) {
  // Outer Scope

  function innerFn() {
    // Inner Scope
    console.log(msg); // 'msg' variable from lexical-environment/outer-scope
    return true;
  }

  innerFn(); // RECENT message 'msg' captured by this execution/function-call

  msg = "Massage modified."; // Message 'msg' updated for some reason
  innerFn(); // RECENT message 'msg' captured by this execution/function-call

  msg = "Massage modified again."; // Message 'msg' updated for some reason
  innerFn(); // RECENT message 'msg' captured by this execution/function-call
}

OuterFnEx2("Hello");
console.log("--------------------");
OuterFnEx2("Assalam o alaikum");

console.log("==============================================");
function OuterFnEx3(msg) {
  // Outer Scope

  function innerFn() {
    // Inner Scope
    console.log(msg); // 'msg' variable from lexical-environment/outer-scope
    return true;
  }

  msg = msg + "."; // Message 'msg' updated for some reason

  return innerFn; // return inner function
}

greetingsMorning = OuterFnEx3("Good Morning");
greetingsDay = OuterFnEx3("Good Afternoon");
greetingsEvening = OuterFnEx3("Good Evening");

greetingsMorning();
greetingsDay();
greetingsEvening();

console.log("==============================================");
function OuterFnEx4(msg) {
  // Outer Scope

  function innerFn() {
    // Inner Scope
    console.log(msg, "dear."); // 'msg' variable from lexical-environment/outer-scope, "dear." literal
    return true;
  }

  msg = msg + ",";

  return innerFn;
}

greetingsMorning = OuterFnEx4("Good Morning");
greetingsDay = OuterFnEx4("Good Afternoon");
greetingsEvening = OuterFnEx4("Good Evening");

greetingsMorning();
greetingsDay();
greetingsEvening();

console.log("==============================================");
function OuterFnEx5(msg) {
  // Outer Scope

  function innerFn(m) {
    // Inner Scope
    console.log(msg, m); // 'msg' variable from lexical-environment/outer-scope, 'm' variable is local to innerFn
    return true;
  }

  return innerFn;
}

greetingsMorning = OuterFnEx5("Good Morning.");
greetingsDay = OuterFnEx5("Good Afternoon.");
greetingsEvening = OuterFnEx5("Good Evening.");

greetingsMorning("How are you, dear?");
greetingsDay("Ready for lunch?");
greetingsEvening("See you tomorrow.");

console.log("==============================================");
function OuterMostFn(omArg) {
  function OuterFn(oArg) {
    function innerFn(iArg) {
      console.log(omArg, oArg, iArg);
      return true;
    }

    innerFn("Dear!");
    // return innerFn;
  }

  OuterFn("How are you?");
  // return OuterFn;
}

OuterMostFn("Good Morning.");
