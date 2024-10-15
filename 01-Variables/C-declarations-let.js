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

let w = 123;
// console.log(w);
// console.log(typeof w);

let x = "ali";
console.log(x);
console.log(typeof x);

console.log("-------------------------------------");
let y;
console.log(y);
console.log(typeof y); // type and value = undefined

console.log("-------------------------------------");
// n = true; // [ReferenceERROR] First use of let declared variable (later in the code) [REASON: "let DECLARATIONSs" are hoisted to top but you can not use let variable before declaration]
// console.log(n); // [ReferenceERROR]
// console.log(typeof n); // [ReferenceERROR]
let n; // Declaring with "let" after first use is RESTRICTED: declaring before first use is PERMITTED
console.log("n = ", n); // No error on use after declaration for the let variable
console.log(typeof n); // No error on use after declaration for the let variable

console.log("-------------------------------------");
let m; // First declaration
console.log(m);
console.log(typeof m);
// let m; // [ERROR] Second declaration -- Redeclaration of let variable with "let", "var" or "const" is RESTRICTED

console.log("-------------------------------------");
z = 360;
console.log("z = ", z);
console.log(typeof z);
// let z; // [generates REFERENCE ERROR on earlier use of "z" variable] First Declaration after first use: RESTRICTED with "let" [ERROR: Must declare variable first before use, REASON: "let declarations" are Hoisted to top of the BLOCK however you can not use "let variable" before declaration]
var z; // First Declaration after first use: Permitted with "var" [No error and no change in value, REASON: "var declarations" are Hoisted to top and you can use "var variable" before declaration]
console.log(z);
console.log(typeof z);

console.log("-------------------------------------");
x = "new-string"; // Reassignment possible with "let" declaration [No error, new value,  dynamic types]
y = undefined; // Reassignment possible with "let" declaration [No error, new value,  dynamic types]
z = 123; // Reassignment possible with "let" declaration [No error, new value,  dynamic types]
console.log(x + " " + y + " " + z);
console.log(typeof x + " " + typeof y + " " + typeof z);

console.log("==============================================");
console.log("========== let and objects ===================");
let student = {
  name: "Ali",
  regNo: "BCE-123",
  semeter: 6,
};

console.log(student);
console.log(typeof student);

console.log("-------------------------------------");
student["name"] = "Babar"; // Reassignment to properties/mehtods PERMITTED with let declared object
console.log(student);
console.log(typeof student);

console.log("-------------------------------------");
student = {
  name: "Babar",
  regNo: "BCE-123",
  semeter: 6,
}; // Reassignment of Object reference permitted with let declared object
console.log(student);
console.log(typeof student);
