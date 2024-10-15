/**
==================================
 Types Wrappers
==================================
 01- String object  
 02- Number object  
 03- Boolean object 
 04- Bigint object
 05- Symbol object  
-------------------------------
* JavaScript is dynamic and weak-typed language.
* Wrapper objects are mutable.
* Auto-boxing
* Type coercion
==================================
*/

console.log("==============================================");
console.log("================== STRINGS ===================");
let one = "mississippi"; // String literal
let two = "        Welcome to Pakistan            "; // String literal
let three = "Pakistan"; // String literal
let four = "Story telling is an art"; // String literal

console.log(one + " --> Type: " + typeof one);
console.log(one + " --> Type: " + typeof one);
console.log(one + " --> Type: " + typeof one);
console.log(one + " --> Type: " + typeof one);

console.log(one.charAt(0));
console.log(one.charCodeAt(0));
console.log(one.indexOf("e"));
console.log(one.indexOf("ppi"));
console.log(one.indexOf("i")); // Retruns index of first occurance
console.log(one.lastIndexOf("i")); // Retruns index of last occurance -- searches from last
console.log(one.indexOf("i", 5)); // (searchkey, startIndex)
console.log(one.length);
console.log(one.replace("pp", "m"));
console.log(one.slice(0, 4)); // (startIndex, endIndex]
console.log(one.slice(4)); // startIndex
console.log(one.slice(-1)); // startIndex from last
console.log(one.slice(-4)); // startIndex from last
console.log(one.slice(-4, -1)); // (startIndexfromLast, endIndex]

console.log(two.trim()); // remove spaces from sides of the string
console.log(two.trimStart()); // remove spaces before the string
console.log(two.trimEnd()); // remove spaces after the string

console.log(three.padStart(10)); // (Total length after padding with space)
console.log(three.padEnd(10)); // (Total length after padding with space)
console.log(three.padEnd(10, "-")); // (Total length, "-")
console.log(three.padEnd(17, " Zindabad")); // (desiredTotalLength, stringToPad)
console.log(three.padEnd(30, " Zindabad")); // (desiredTotalLength, stringToPad)

console.log(four.split(" ")); // (delimiter)
console.log(four.split("")); // (delimiter)
console.log(four.split(" ", 2)); // (delimiter, No. of substrings from start)

// -----------------------------
// Implicitly auto-box 'string' primitive to 'String' object and call method String.prototype.charAt() on that object
console.log(one.charAt(0));

// Implicitly auto-box 'string' primitive to 'String' object and call property on that object
console.log(one.length);

// -----------------------------
let str1 = String(1); // Returns string primitive
console.log(str1 + " --> Type: " + typeof str1);

let str2 = String("1"); // Returns string primitive
console.log(str2 + " --> Type: " + typeof str2);

let str3 = String(true); // Returns string primitive
console.log(str3 + " --> Type: " + typeof str3);

let str4 = String("Work hard!"); // Returns string primitive
console.log(str4 + " --> Type: " + typeof str4);

// -----------------------------
str1 = new String(1); // Returns String object
console.log(str1 + " --> Type: " + typeof str1);

str2 = new String("1"); // Returns String object
console.log(str2 + " --> Type: " + typeof str2);

str3 = new String(true); // Returns String object
console.log(str3 + " --> Type: " + typeof str3);

str4 = new String("Work hard!"); // Returns String object
console.log(str4 + " --> Type: " + typeof str4);

console.log(String.valueOf(str4) + " --> Type: " + typeof String.valueOf(str4)); // Returns string primitive from String object using method valueOf()
console.log(String.valueOf(str3) + " --> Type: " + typeof String.valueOf(str3)); // Returns string primitive from String object using method valueOf()
console.log(String.valueOf(str1) + " --> Type: " + typeof String.valueOf(str1)); // Returns string primitive from String object using method valueOf()
console.log(String.valueOf(str2) + " --> Type: " + typeof String.valueOf(str2)); // Returns string primitive from String object using method valueOf()
