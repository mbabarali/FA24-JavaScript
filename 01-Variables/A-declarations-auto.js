/**
==================================
 Declaration of Variable
==================================
 (automatic)
----------------------------------
typeof Operator
----------------------------------
* Variable Name:
  --> A letter (A-Z or a-z)
  --> A dollar sign ($)
  --> Or an underscore (_)    
* Case Senstive  
* Camel Case (convention)
==================================
*/

count = 123;
console.log("count = ", count);
console.log("typeof count = ", typeof count);

firstName = "ali";
console.log("firstName = ", firstName);
console.log("typeof firstName = ", typeof firstName);

// happy;                     // [SYNTAX ERROR] Such a declaration is not allowed
// console.log(happy);        // [Reference ERROR]
// console.log(typeof happy); // [Reference ERROR]

happy = true;
console.log("happy = ", happy);
console.log("typeof happy = ", typeof happy);

// Reassignment of an Automatic Variable
console.log("-------------------------------------");
console.log("Reassignment of an AUtomatic Variable");

count = "new-string"; // DynamicTyped -- Value Overridden ==> Reassignment possible with AUTOMATIC declaration
console.log("count = ", count);
console.log("typeof count = ", typeof count);

firstName = undefined; // DynamicTyped -- Value Overridden ==> Reassignment possible with AUTOMATIC declaration
console.log("firstName = ", firstName);
console.log("typeof firstName = ", typeof firstName);

happy = 123; // DynamicTyped -- Value Overridden ==> Reassignment possible with AUTOMATIC declaration
console.log("happy = ", happy);
console.log("typeof happy = ", typeof happy);
