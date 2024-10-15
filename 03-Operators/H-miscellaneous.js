/**
==================================
 Operators
==================================
 Miscellaneous Operators
----------------------------------
 ()	    Expression Grouping
 ()	    Function Call
 ??     Nullish Coalescing (null or undefined)
 .	    Member Of
 []	    Member Of
 ?.	    Optional Chaining (ES2020) --> [COMARISON]
 new	New with Arguments
 new	New without Arguments
 void   Evaluate void
 ----------------------------------
 ??=    Nullish coalescing assignment (null or undefined)
 ----------------------------------
 =>	    Arrow
 ...	Spread
 ,	    Comma
==================================
*/

//  ??     Nullish Coalescing
console.log("==============================================");
a = {
  firstName: "Ali",
  age: 20,
};

// console.log(a.surName); // Accessing non-exising property
// console.log(a.address); // Accessing non-exising property

console.log("-------------------------------------");
// console.log(a.address.houseNo); // Accessing property on non-exising property [TypeError: Cannot read properties of undefined (reading 'houseNo')]

console.log("-------------------------------------");
a.address = ""; // Falsy
console.log(a.address || "NA");

console.log("-------------------------------------");
a.address = null; // Falsy
console.log(a.address || "NA");

console.log("-------------------------------------");
a.address = undefined; // Falsy
console.log(a.address || "NA");

console.log("-------------------------------------");
a.address = ""; // Falsy
console.log(a.address ?? "NA"); // Make some falsy values as usable such as "", here

// ?.	    Optional Chaining (ES2020) --> [COMPARISON]
console.log("==============================================");
a = {
  firstName: "Ali",
  age: 20,
};

console.log(a.surName); // Accessing non-exising property
console.log(a.address); // Accessing non-exising property

console.log("-------------------------------------");
// console.log(a.address.houseNo); // Accessing property on non-exising property [TypeError: Cannot read properties of undefined (reading 'houseNo')]

console.log("-------------------------------------");
console.log(a.address?.houseNo);

console.log("-------------------------------------");
console.log(a.address?.());

// new	New with Arguments
// new	New without Arguments
console.log("==============================================");

console.log("-------------------------------------");

// void   Evaluate void
console.log("==============================================");

function abc() {
  return "abc"; //returns "abc"
}

console.log(abc()); // logs abc
console.log(void abc()); // logs undefined

// ??=    Nullish coalescing assignment (null or undefined)
console.log("==============================================");
a = {
  firstName: "Ali",
  age: 20,
};

console.log(a.surName); // Accessing non-exising property

console.log("-------------------------------------");
a.firstName ??= "Babar"; // Assignment NOT performed.
a.surName ??= "Babar"; // Assignment performed.

console.log(" First Name: " + a.firstName); // Ali
console.log(" Last Name: " + a.surName); // Babar

console.log("-------------------------------------");
