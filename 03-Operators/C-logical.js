/**
==================================
 Operators
==================================
 Logical Operators
----------------------------------
 * truthy vs. falsy 
 * falsies ==> false, 0, -0, 0n, empty strings "", null, undefined, and NaN
 * falsies ==> document.all [The only built-in falsy object in JavaScript]
 * true vs. false
 * Type coercion or Type conversion
 * Boolean()
 -------------------
 ** Returning decisive operand 
 -------------------
 &&	    logical AND     --> Returns last value if all are truthy otherwise returns at first falsy
 ||	    logical OR      --> Returns truthy if all are true
 !	    logical NOT     --> Returns truthy if all are true
==================================
*/

a = 5;
b = true;
c = undefined;

console.log("a = " + a + "                  ----> " + Boolean(a));
console.log("b = " + b + "                  ----> " + Boolean(b));
console.log("c = " + c + "                  ----> " + Boolean(c));

console.log("a = " + a + "; a > 0           ----> " + Boolean(a > 0));
console.log("b = " + b + "; b === false     ----> " + Boolean(b === false));
console.log("c = " + c + "; c == 1          ----> " + Boolean(c == 1));

console.log("0                              ----> " + Boolean(0));
console.log("undefined                      ----> " + Boolean(undefined));
console.log("3                              ----> " + Boolean(3));
console.log("-3                             ----> " + Boolean(-3));

// console.log(Boolean(a));
// console.log(Boolean(b));
// console.log(Boolean(c));

// console.log(Boolean(a > 0));
// console.log(Boolean(b === false));
// console.log(Boolean(c == 1));

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(3));
// console.log(Boolean(-3));

console.log("==============================================");
a = 5;
b = 6;
c = undefined;

console.log(0 && b); // falsy_OP && SecondOperand ==> (0 && b) ==> return falsy_OP i.e. FirstOperand
console.log(a > 10 && b); // falsy_EXP && SecondOperand ==> (false && b) ==> return false i.e. FirstOperand
console.log(a && b); // truthy_OP && SecondOperand ==> (a && b) ==> return SecondOperand
console.log(a < 6 && b); // truthy_EXP && SecondOperand ==> (true && b) ==> return SecondOperand

console.log("-------------------------------------");
console.log(a && b && 0 && "false" && { id: "1" }); // (truthy && truthy && falsy && truthy && truthy) ==> NOT all truthy, return first falsy operand
console.log(a && b && 0 > 3 && "false" && { id: "1" }); // (truthy && truthy && falsy && truthy && truthy) ==> NOT all truthy, return first falsy operand
console.log(a && b && "tiger" && "false" && { id: "1" }); // (truthy && truthy && truthy && truthy && truthy) ==> All truthy, return last operand

console.log("-------------------------------------");
var resultFromAND = a && b && 1 && "tiger" && { id: "1" }; // {Preferred values last in a chain}
console.log(resultFromAND);

let count = 0;
// var timerStatus = a && b && timer.value && { id: "1" }; // [ERROR] {Hazardous value: timer variable is not defined}
var timerStatus = a && b && count >= 3 && timer.value && { id: "1" }; // {Used to apply check(s) before Hazardous value(s)}
console.log(timerStatus);

console.log(Boolean(a && b && "tiger" && "false" && { id: "1" }));

console.log("==============================================");
a = 5;
b = 6;
c = undefined;

console.log(a || b); // truthy_OP || SecondOperand ==>  (a || b) ==> return truthy_OP
console.log(a < 6 || b); // truthy_EXP || SecondOperand ==> (true || b) ==> return true
console.log(0 || b); // falsy_OP || SecondOperand ==> (0 || b) ==> return falsy_OP i.e. SecondOperand
console.log(a > 10 || b); // falsy_EXP || SecondOperand ==> (false || b) ==> return SecondOperand

console.log("-------------------------------------");
console.log(a > 10 || b === 0 || "color" || c || b < 1); // (falsy || falsy || falsy || falsy || falsy) ==> Move on falsies, return first truthy operand
console.log(a || b || 0 || "false" || { id: "1" }); // (truthy || truthy || falsy || truthy || truthy) ==> NOT all falsy, return first truthy operand
console.log(0 || b || 0 || "false" || { id: "1" }); // (truthy || truthy || falsy || truthy || truthy) ==> NOT all falsy, return first truthy operand
console.log(0 > 3 || "0 > 3" || a || "false" || { id: "1" }); // (truthy || truthy || falsy || truthy || truthy) ==> NOT all falsy, return first truthy operand
console.log(a > 10 || b === 0 || "" || c || b < 1); // (falsy || falsy || falsy || falsy || falsy) ==> All falsy, return last operand
console.log(a || b || "tiger" || "false" || { id: "1" }); // (truthy || truthy || truthy || truthy || truthy) ==> All truthy, return first truthy operand

console.log("-------------------------------------");
// var resultFromOR = a == 0 || variableNoDeclared || b < 1; // [ERROR] {Hazardous value: Variable is not defined}
var resultFromOR = a == 0 || b != 0 || variableNoDeclared || b < 1; // {Used to apply check(s) before Hazardous value(s)}
console.log(resultFromOR);

var resultFromOR = a == 0 || b == 0 || c || "color: red"; // {Used to apply check(s) before Required value(s)}
console.log(resultFromOR);

var resultFromOR = 0 > 3 || "0 > 3" || a || "false" || { id: "1" }; // String is truthy
console.log(resultFromOR);

var resultFromOR = { id: "1" } || a || b || "tiger" || "false"; // {Preferred values early in a chain}
console.log(resultFromOR);

console.log("-------------------------------------");
console.log(Boolean(a > 10 || b === 0 || "" || c || b < 1));
