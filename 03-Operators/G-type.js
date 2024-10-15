/**
==================================
 Operators
==================================
 Type Operators
----------------------------------
 typeof	        Returns the type of a variable
 delete         Property delete
 instanceof	    Returns true if an object is an instance of an object type
==================================
*/

console.log("==============================================");
a = false;
console.log(a, " ---> ", typeof a);

a = 1;
console.log(a, " ---> ", typeof a);

a = "1";
console.log(a, " ---> ", typeof a);

a = undefined;
console.log(a, " ---> ", typeof a);

a = null;
console.log(a, " ---> ", typeof a);

a = [1];
console.log(a, " ---> ", typeof a);

a = { p: 1 };
console.log(a, " ---> ", typeof a);

console.log("==============================================");
var varUninitialized;
console.log(varUninitialized, " ---> ", typeof varUninitialized);

// console.log(varUndeclared, " ---> ", typeof varUndeclared); // [ReferenceError: varUndeclared is not defined]
console.log("varUndeclared", " ---> ", typeof varUndeclared);

console.log("-------------------------------------");
let letUninitialized;
console.log(letUninitialized, " ---> ", typeof letUninitialized);

// console.log(letUndeclaredBeforeUse, " ---> ", typeof letUndeclaredBeforeUse); // [ReferenceError: Cannot access 'letUndeclaredBeforeUse' before initialization]
// console.log("letUndeclaredBeforeUse", " ---> ", typeof letUndeclaredBeforeUse); // [ReferenceError: Cannot access 'letUndeclaredBeforeUse' before initialization]
let letUndeclaredBeforeUse;

console.log("-------------------------------------");

console.log("==============================================");
a = Boolean(false);
console.log(a, " ---> ", typeof a);

a = Number(1);
console.log(a, " ---> ", typeof a);

a = String("1");
console.log(a, " ---> ", typeof a);

console.log("==============================================");
a = new Boolean(false);
console.log(a, " ---> ", typeof a);

a = new Number(1);
console.log(a, " ---> ", typeof a);

a = new String("1");
console.log(a, " ---> ", typeof a);

console.log("==============================================");
a = {
  firstName: "Ali",
  age: 20,
};

console.log(a, " ---> ", typeof a); // Before deletion

delete a.firstName;
console.log(a, " ---> ", typeof a); // After deletion

console.log("==============================================");
a = 20;
console.log(a + " --> Type: " + typeof a);

console.log(a instanceof Number);
console.log(a instanceof String);
console.log(a instanceof BigInt);
console.log(a instanceof Boolean);
console.log(a instanceof Object);
console.log(a instanceof Symbol);
// console.log(a instanceof undefined); // [ERROR] Undefined is type however you can not declare/match the type undefined

console.log("-------------------------------------");
a = {
  firstName: "Ali",
  age: 20,
};

console.log(a + " --> Type: " + typeof a);

console.log(a instanceof Number);
console.log(a instanceof String);
console.log(a instanceof BigInt);
console.log(a instanceof Boolean);
console.log(a instanceof Object);
console.log(a instanceof Symbol);
// console.log(a instanceof undefined); // [ERROR] Undefined is type however you can not declare/match the type undefined
