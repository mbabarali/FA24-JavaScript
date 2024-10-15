/**
==================================
 Operators
================================== 
 Comparison Operators
----------------------------------
 * truthy vs. falsy 
 * falsies ==> false, 0, -0, 0n, "", null, undefined, and NaN
 * true vs. false
 * Type coercion or Type conversion
 -------------------
 ==	    equal to
 ===	equal value and equal type (strict equal)
 !=     not equal
 !==	not equal value or not equal type (strict not equal)
 >	    greater than
 <	    less than
 >=	    greater than or equal to
 <=	    less than or equal to
 ?	    Conditional ternary operator (? along with :)
==================================
*/

a = 5;
b = 6;
console.log(a == 5); // [Numeric comparison] Both operands are 'Number'
console.log(a == b); // [Numeric comparison] Both operands are 'Number'

console.log("==============================================");
a = "ali";
b = "khan";
console.log(a == "ali"); // [String comparison] Both operands are 'String'
console.log(a == b); // [String comparison] Both operands are 'String'

a = "2";
b = "31";
console.log(a == "1"); // [String comparison] Both operands are 'String'
console.log(a == b); // [String comparison] Both operands are 'String'

console.log("==============================================");
a = 5;
b = "5"; // Numeric 'String'
c = "3"; // Numeric 'String'
console.log(a == 5); // [Numeric comparison] Both operands are 'Number'
console.log(a == "5"); // [Numeric comparison] When comparing 'String' and 'Number', a Numeric 'String' operand is converted to 'Number'
console.log(a == b); // [Numeric comparison] When comparing 'String' and 'Number', a Numeric 'String' operand is converted to 'Number'
console.log(a == c); // [Numeric comparison] When comparing 'String' and 'Number', a Numeric 'String' operand is converted to 'Number'

console.log("==============================================");
a = 5;
b = "gamma"; // NON-Numeric 'String'

console.log(a == "beta"); // [Boolean comparison] Number with NON-Numeric 'String': NON-Numeric 'String' is always converted to 'false' when compared with 'Number'
console.log(a == b); // [Boolean comparison] Number with NON-Numeric 'String': NON-Numeric 'String' is always converted to 'false' when compared with 'Number'

console.log("==============================================");
a = 5;
b = "5"; // Numeric 'String'
c = "3"; // Numeric 'String'
console.log(a === 5); // [Strict comparison] Operands' type and value must match
console.log(a === "5"); // [Strict comparison]  Operands' type and value must match
console.log(a === b); // [Strict comparison]  Operands' type and value must match
console.log(a === c); // [Strict comparison]  Operands' type and value must match

console.log("==============================================");
a = 5;
c = "5";
console.log(a == c ? "MACTH" : "Mismatch");

let message = a === c ? "strict MACTH" : "Type or Value Mismatch";
console.log(message);
