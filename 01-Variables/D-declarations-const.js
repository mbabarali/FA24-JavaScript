/**
==================================
 Declaration of Variable
==================================
 let (ES2015 -- ES6)
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

// const url; // [ERROR] "const" variable declaration must provide assignment [ERROR without initialization]
const url = "//google.com"; // "const" variable declaration WITH assignment (i.e., variable initialiaztion) [No error with initialization]
console.log(url);
console.log(typeof url);

console.log("-------------------------------------");
const fruit = "orange";
console.log(fruit);
console.log(typeof fruit);
// fruit = 12; // [ERROR] Reassignment NOT possible with "const" declaration [ERROR]
// console.log(fruit);
// console.log(typeof fruit);

console.log("-------------------------------------");
houseNo = 25; // First use
console.log(houseNo);
console.log(typeof houseNo);
// var houseNo; // First Declaration after first use: Permitted with "var" [No error and no change in value, REASON: "var declarations" Hoisted to top]
// let houseNo; // [ERROR] First Declaration after first use: RESTRICTED with "let" [ReferenceError ERROR: Must declare variable first before use, REASON: "let declarations" are Hoisted to top of the BLOCK but you can not use "let variable" before initialization]
// const houseNo; // [ERROR] First Declaration after first use: RESTRICTED with "const" [Syntax ERROR: Must declare with assignemnt (initialize) first before use, REASON: "const declarations" NOT Hoisted]
console.log(houseNo);
console.log(typeof houseNo);

console.log("==============================================");
console.log("======== const and objects ===================");
const student = {
  name: "Ali",
  regNo: "BCE-123",
  semeter: 6,
};

console.log(student);
console.log(typeof student);

console.log("-------------------------------------");
student["name"] = "Khan"; // Reassignment to properties/mehtods PERMITTED with const declared object
console.log(student);
console.log(typeof student);

console.log("-------------------------------------");
// student = {
//   name: "Khan",
//   regNo: "BCE-123",
//   semeter: 6,
// }; // [ERROR] Reassignment of Object reference not permitted with const declared object
