/**
==================================
 Declaration of Variable
==================================
 var
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

var on = 1,
  one = "babar",
  line = true;

//Recommended
var on = 1;
var one = "babar";
var line = true;

var alpha = 123;
console.log(alpha);
console.log(typeof alpha);

var beta = "ali";
console.log(beta);
console.log(typeof beta);

console.log("-------------------------------------");
var gamma; // Only declaration, no initialization
console.log(gamma); // value = undefined
console.log(typeof gamma); // type = undefined

gamma = true;
console.log(gamma);
console.log(typeof gamma);
var gamma; // Re-DECLARATION of "var" with "var" [No error and no change in value]

console.log("-------------------------------------");
theta = 360; // First use before "var DECLARATION" --- [theta = 360, REASON: "var DECLARATIONs" are hoisted to top]
console.log(theta); // First use of auto declared variable
console.log(typeof theta);

var theta; // First DECLARATION after first use: Permitted with "var declaration" [No error and no change in value, REASON: "var DECLARATIONs" hoisted to top]
console.log(theta);
console.log(typeof theta);

console.log("-------------------------------------");
console.log("zeta = ", zeta); // If First use [zeta = undefined, REASON: "var/auto INITIALIZATIONs" are NOT hoisted to top]
zeta = 2.2; // First INITIALIZATION of auto variable [zeta = 2.2, REASON: "auto INITIALIZATIONs" are NOT hoisted to top]
var zeta = 2.2; // First INITIALIZATION of var variable [zeta = 2.2, REASON: "var INITIALIZATIONs" are NOT hoisted to top]
console.log("zeta = ", zeta);
console.log(typeof zeta);
var zeta = 3.0; // Reassignment after first use: Permitted with "var INITIALIZATION" [No error and no change in value, REASON: "var INITIALIZATIONs" are NOT hoisted to top]
console.log("zeta = ", zeta);
console.log(typeof zeta);

console.log("-------------------------------------");
alpha = "new-string"; // Reassignment possible for "var DECLARATIONs" [No error, new value,  dynamic types]
beta = undefined; // Reassignment possible for "var DECLARATIONs" [No error, new value,  dynamic types]
gamma = 123; // Reassignment possible for "var DECLARATIONs" [No error, new value,  dynamic types]
theta = true; // Reassignment possible for "var DECLARATIONs" [No error, new value,  dynamic types]
console.log(alpha + " " + beta + " " + gamma + " " + theta);
console.log(
  typeof alpha + " " + typeof beta + " " + typeof gamma + " " + typeof theta
);

console.log("==============================================");
console.log("========== var and objects ===================");
var student = {
  name: "Ali",
  regNo: "BCE-123",
  semeter: 6,
};

console.log(student);
console.log(typeof student);

console.log("-------------------------------------");
student["name"] = "Babar"; // Reassignment to properties/methods PERMITTED with var declared object
console.log(student);
console.log(typeof student);

console.log("-------------------------------------");
student = {
  name: "Babar",
  regNo: "BCE-123",
  semeter: 6,
}; // Reassignment of Object reference permitted with var declared object
console.log(student);
console.log(typeof student);
