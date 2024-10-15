/**
==================================
 Operators
==================================
 Relational Operators
----------------------------------
 instanceof	    Returns true if an object is an instance of an object type
 in	            Returns whether property exists in object
==================================
*/

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

console.log("==============================================");
a = {
  firstName: "Ali",
  age: 20,
};

console.log("firstName" in a);
console.log("age" in a);
console.log("lastName" in a);

console.log("-------------------------------------");
if ("firstName" in a) {
  console.log(a.firstName);
}

console.log("-------------------------------------");
// console.log(firstName in a); // [ReferenceError: firstName is not defined]

console.log("-------------------------------------");
console.log(a.surName); // Accessing non-exising property
console.log(a.address); // Accessing non-exising property

console.log("-------------------------------------");
// console.log(a.address.houseNo); // Accessing property on non-exising property [TypeError: Cannot read properties of undefined (reading 'houseNo')]

console.log("-------------------------------------");
console.log(a.address && a.address.houseNo); // Accessing property on non-exising property [TypeError: Cannot read properties of undefined (reading 'houseNo')]

console.log("-------------------------------------");
// a.address(); // Accessing non-exising method // TypeError: a.address is not a function

console.log("-------------------------------------");
a.address = function () {
  return "Your address!";
};
console.log(a.address && a.address()); // Accessing property on non-exising property [TypeError: Cannot read properties of undefined (reading 'houseNo')]

console.log("-------------------------------------");
a.address = null;
console.log(a.address && a.address.houseNo); // Accessing property on non-exising property [TypeError: Cannot read properties of undefined (reading 'houseNo')]
