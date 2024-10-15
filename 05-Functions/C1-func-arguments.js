/**
==================================
 Functions parameters and arguments
==================================
 Passing argument to function
 ---------------------------------
 Pass by Value
 Pass by Reference
----------------------------------
* Parameters are essentially passed to functions by value Except Objects
* Funcitons by itself, are first-class objects
==================================
*/

console.log("==============================================");
function printMsg(/* no parameters */) {
  console.log("Message from printMsg function");
}

printMsg(); // Function Invocation
printMsg({ abc: "abc" }); // Extra argument(s) ignored

console.log("=============== Pass by Value ================");
console.log("==============================================");
// Argument passing by value ==> Non-object variables or literals

function printArgMsg(msg) {
  console.log(msg);
}

let info = "Spare time for yourself";
let displayInfo = printArgMsg; // Function assignment

printArgMsg(); // undefined
printArgMsg("Message from the argument");
printArgMsg(info);
printArgMsg(info, "abc"); // Extra argument(s) ignored
printArgMsg("abc", info); // Extra argument(s) ignored

displayInfo(); // undefined
displayInfo(info + " By displayInfo");

console.log("==============================================");
function printMsgmultiple(msg, name) {
  console.log(msg, "for ", name);
}

printMsgmultiple("Greetings", "Ali");

console.log("============= Pass by Reference ==============");
console.log("==============================================");
// Argument passing by sharing/reference ==> object variables

let personalDetail = {
  firstName: "Ali",
};

console.log("-------------------------------------");
function showObj(obj) {
  console.log(obj);
}

showObj();
showObj(personalDetail);

console.log("-------------------------------------");
function showProperty(obj) {
  console.log(obj.firstName);
}

// showProperty(); // [TypeError] Cannot read properties of undefined (reading 'firstName')
showProperty(personalDetail);

console.log("-------------------------------------");
function showPropertySafely(obj) {
  console.log(obj?.firstName); // Optional-chaining operator
}

showPropertySafely(); // undefined
showPropertySafely(personalDetail);
