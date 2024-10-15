/**
==================================
 Nested Functions
================================== 
 Object Abstraction (Hiding Details)
----------------------------------
- Function scope
- Closure
- Abstraction (Private and Public Identifiers)
---------------------------------- 
* Closure can be used to create private variables for inner functions. 
  --> Only inner functions can access lexical environment. 
  --> Identifiers declared in lexical scope are not directly accessible outside the lexical scope. 
  --> Identifiers declared in lexical scope are indirectly accessible outside the lexical scope using reference to inner functions. These inner functions eventually have access to identifiers declared in lexical scope.
  
==================================
*/

console.log("==============================================");
function OuterFn_example1(x) {
  // Outer Scope
  let y = "y";

  function innerFn(a) {
    // Inner Scope
    let b = "b";

    console.log("[FN-INNER]", a, b); // {LOCAL} a and b are PRIVATE to Inner Scope
    console.log("[FN-INNER]", x, y); // {LEXICAL} Identifier visible from lexical scope of Inner-deep function [innerFn]
  }

  innerFn("a");
  console.log("[FN-OUTER]", x, y); // {LOCAL} x and y are PRIVATE to Outer Scope
  // console.log("[FN-OUTER]", a, b); // [ERROR:OUT-OF-SCOPE] ReferenceError: a and b are not defined
}

OuterFn_example1("x");

// console.log("[GLOBAL]", x, y); // [ERROR:OUT-OF-SCOPE] ReferenceError: x and y are not defined
// console.log("[GLOBAL]", a, b); // [ERROR:OUT-OF-SCOPE] ReferenceError: a and b are not defined

console.log("==============================================");
function OuterFn_example2(x) {
  // Outer Scope
  let y = "y";

  function innerFn(a) {
    // Inner Scope
    let b = "b";

    function innerDeepFn(alpha) {
      // Inner-deep Scope
      let beta = "beta";

      console.log("[FN-INNER-DEEP]", alpha, beta); // {LOCAL} alpha and beta are PRIVATE to Inner-deep Scope
      console.log("[FN-INNER-DEEP]", a, b); // {LEXICAL} Identifier visible from lexical scope of Inner-deep function [innerDeepFn]
      console.log("[FN-INNER-DEEP]", x, y); // {LEXICAL} Identifier visible from lexical scope of Inner-deep function [innerDeepFn]
    }

    innerDeepFn("alpha");

    console.log("[FN-INNER]", a, b); // {LOCAL} a and b are PRIVATE to Inner Scope
    console.log("[FN-INNER]", x, y); // {LEXICAL} Identifier visible from lexical scope of Inner function [innerFn]
    // console.log("[FN-INNER]", alpha, beta); // [ERROR:OUT-OF-SCOPE] ReferenceError: alpha and beta are not defined
  }

  innerFn("a");

  console.log("[FN-OUTER]", x, y); // {LOCAL} x and y are PRIVATE to Outer Scope
  // console.log("[FN-OUTER]", a, b); // [ERROR:OUT-OF-SCOPE] ReferenceError: a and b are not defined
  // console.log("[FN-OUTER]", alpha, beta); // [ERROR:OUT-OF-SCOPE] ReferenceError: alpha and beta are not defined
}

OuterFn_example2("x");

// console.log("[GLOBAL]", x, y); // [ERROR:OUT-OF-SCOPE] ReferenceError: x and y are not defined
// console.log("[GLOBAL]", a, b); // [ERROR:OUT-OF-SCOPE] ReferenceError: a and b are not defined
// console.log("[GLOBAL]", alpha, beta); // [ERROR:OUT-OF-SCOPE] ReferenceError: alpha and beta are not defined

console.log("==============================================");
let globalVariable = "globalVariable";

function OuterFn_example3(x) {
  // Outer Scope
  let y = "y";

  function innerFn(a) {
    // Inner Scope
    let b = "b";

    function innerDeepFn(alpha) {
      // Inner-deep Scope
      let beta = "beta";

      console.log("[FN-INNER-DEEP]", alpha, beta); // {LOCAL}
      console.log("[FN-INNER-DEEP]", a, b); // {LEXICAL}
      console.log("[FN-INNER-DEEP]", x, y); // {LEXICAL}
      console.log("[FN-INNER-DEEP]", globalVariable); // {GLOBAL}
    }

    innerDeepFn("alpha");

    console.log("[FN-INNER]", a, b); // {LOCAL}
    console.log("[FN-INNER]", x, y); // {LEXICAL}
    console.log("[FN-INNER]", globalVariable); // {GLOBAL}
  }

  innerFn("a");

  console.log("[FN-OUTER]", x, y); // {LOCAL}
  console.log("[FN-OUTER]", globalVariable); // {GLOBAL}
}

OuterFn_example3("x");
console.log("[TOP-LEVEL]", globalVariable); // {GLOBAL}

console.log("==============================================");
let variableGlobal = "variableGlobal";

function OuterFn_example4(x) {
  // Outer Scope
  let y = "y";

  function innerFn(a) {
    // Inner Scope
    let b = "b";

    function innerDeepFn(alpha) {
      // Inner-deep Scope
      let beta = "beta";

      function innerDeeperFn() {
        // Inner-deeper Scope

        console.log("[FN-INNER-DEEPER]", alpha, beta); // {LEXICAL}
        console.log("[FN-INNER-DEEPER]", a, b); // {LEXICAL}
        console.log("[FN-INNER-DEEPER]", x, y); // {LEXICAL}
        console.log("[FN-INNER-DEEPER]", variableGlobal); // {GLOBAL}
      }

      innerDeeperFn();

      console.log("[FN-INNER-DEEP]", innerDeeperFn); // {LOCAL}
      console.log("[FN-INNER-DEEP]", alpha, beta); // {LOCAL}
      console.log("[FN-INNER-DEEP]", a, b); // {LEXICAL}
      console.log("[FN-INNER-DEEP]", x, y); // {LEXICAL}
      console.log("[FN-INNER-DEEP]", variableGlobal); // {GLOBAL}

      return innerDeeperFn;
    }

    innerDeepFn("alpha");

    console.log("[FN-INNER]", innerDeepFn); // {LOCAL}
    console.log("[FN-INNER]", a, b); // {LOCAL}
    console.log("[FN-INNER]", x, y); // {LEXICAL}
    console.log("[FN-INNER]", variableGlobal); // {GLOBAL}

    return innerDeepFn;
  }

  innerFn("a");

  console.log("[FN-OUTER]", innerFn); // {LOCAL}
  console.log("[FN-OUTER]", x, y); // {LOCAL}
  console.log("[FN-OUTER]", variableGlobal); // {GLOBAL}

  return innerFn;
}

OuterFn_example4("x");
console.log("[TOP-LEVEL]", OuterFn_example4); // {GLOBAL}
console.log("[TOP-LEVEL]", variableGlobal); // {GLOBAL}
