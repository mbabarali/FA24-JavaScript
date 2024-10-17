/**
==================================
 Data Types
==================================
 01- String     ---> Primitive
 02- Number     ---> Primitive
 03- Boolean    ---> Primitive
 04- Bigint     ---> Primitive (since ES2020) 
 05- undefined  ---> Primitive  
 06- Null       ---> Primitive
 07- Symbol     ---> Primitive
 08- Object
----------------------------------
* JavaScript is a dynamic language.
* JavaScript has dynamic data types.
* JavaScript is a weakly typed language.
* Variables in JavaScript are not directly associated with any particular value type.
* Any variable can be assigned (and re-assigned) values of all types.
* Primitive value is represented directly at the lowest level of the language implementation.
* Primitive value are immutable.
==================================
*/

console.log("==============================================");
console.log("================== STRINGS ===================");
console.log("Hello World! 123."); // String literal
console.log(typeof "Hello World! 123.");

// -----------------------------
let str = "Hello"; // String literal
console.log(str);
console.log(typeof str);

// str = "The word \"class\" is a keyword in JS"; // String literal, You can use double quotes with \ escape character
// str = 'The word \'class\' is a keyword in JS'; // String literal, You can use single quotes with \ escape character
str = 'The word "class" is a keyword in JS'; // String literal, You can mix single quotes and double quotes
str = "The word 'class' is a keyword in JS"; // String literal, You can use single quotes and double quotes

console.log(str, "--> Type:", typeof str);

// -----------------------------
str = "This is line one. \nThis is line two. \nThis is line three."; // String literal
console.log(str + " --> Type: " + typeof str);

str = "This is line one. \n" + "This is line two. \n" + "This is line three."; // String literal
console.log(str + " --> Type: " + typeof str);

// -----------------------------
let one = "mississippi"; // String literal
console.log(one + " --> Type: " + typeof one);

console.log(one[0]); // [] operator FOR READING PURPOSE ONLY

// -----------------------------
console.log("Hello"[0]); // [] operator FOR READING PURPOSE ONLY

// -----------------------------
console.log(one.charAt(0));
console.log(one.charCodeAt(0));

// -----------------------------
console.log(one.indexOf("e"));
console.log(one.indexOf("ppi"));
console.log(one.indexOf("i")); // Retruns index of first occurance
console.log(one.lastIndexOf("i")); // Retruns index of last occurance -- searches from last

console.log(one.indexOf("i", 5)); // (searchkey, searchStartIndexInclusive)

// -----------------------------
console.log(one.length);

// -----------------------------
console.log(one.replace("pp", "m"));

// -----------------------------
console.log(one.slice(0, 4)); // (startIndex, endIndex]
console.log(one.slice(4)); // startIndex

console.log(one.slice(-1)); // startIndex from last {-1 is last index}
console.log(one.slice(-4)); // startIndex from last
console.log(one.slice(-4, -1)); // (startIndexfromLast, endIndex]

// -----------------------------
console.log(two.trim()); // remove spaces from sides of the string
console.log(two.trimStart()); // remove spaces before the string
console.log(two.trimEnd()); // remove spaces after the string

// -----------------------------
let three = "Pakistan"; // String literal
console.log(three.padStart(10)); // (Total length after padding with space)
console.log(three.padEnd(10)); // (Total length after padding with space)
console.log(three.padEnd(10, "-")); // (Total length, "-")
console.log(three.padEnd(17, " Zindabad")); // (desiredTotalLength, stringToPad)
console.log(three.padEnd(30, " Zindabad")); // (desiredTotalLength, stringToPad)

// -----------------------------
let four = "Story telling is an art"; // String literal
console.log(four.split(" ")); // (delimiter)
console.log(four.split("")); // (delimiter)
console.log(four.split(" ", 2)); // (delimiter, No. of substrings from start)

console.log("==============================================");
console.log("================ number ======================");
let num = 50;
// console.log("num = ", num); console.log(typeof num);
// console.log(num, "--> Type:", typeof num);
console.log(num + " --> Type: " + typeof num);

console.log("-------------------------------------");
console.log(num / 12);
console.log(num / "12"); // Type coercion
console.log(num / 0);
console.log(num / -0);
console.log(num / "0"); // Type coercion

console.log("-------------------------------------");
console.log(num / "A"); // NaN = Not a Number

console.log("-------------------------------------");
num = 0888; //Decimal Number
console.log(num / 8);
console.log(num);

num = 0777; //Octal Number
console.log(num / 7);
console.log(num);

console.log("==============================================");
console.log("================== OBJECTS ===================");

let anObj = {};
console.log("anObj = ", anObj);
console.log(typeof anObj);

console.log("-------------------------------------");
let newObj = {
  firstName: "Babar",
  lastName: "Ali",
  id: 123,
};
console.log("newObj = ", newObj);
console.log(typeof anObj);

// -----------------------------
console.log(newObj.firstName);
console.log(newObj.lastName);

console.log(newObj["firstName"]);
console.log(newObj["lastName"]);

objPropery = "firstName";
objPropery = "id";
console.log(newObj[objPropery]);

// -----------------------------
let employee = newObj; // Assignment of an object will not create copy. Both are reference to same object.
employee.firstName = "Muhammad";
console.log(newObj);
console.log(employee);

console.log("==============================================");
// Nested objects
let person = {
  firstName: "Babar",
  lastName: "Ali",
  id: 123,
  address: {
    houseNo: "1-A",
    streetNo: "101",
    postCode: 12345,
    city: "LHR",
    country: "PK",
  },
};

console.log(person.address.houseNo);
console.log(person["address"]["houseNo"]);

console.log("==============================================");
//** ** ** **
// NOTE: Objects in JavaScripts can contain function as properties,
//       usually refered to as Methods.
// For the following discussion, basic knowledge of function in JavaScript is necessary
//** ** ** **

let objHavingMethod = {
  firstName: "Babar",
  lastName: "Ali",
  id: 123,
  info: function () {
    console.log(this.id);
    console.log(this.firstName);
    console.log(this.lastName);
  },

  info_Way2() {
    console.log(this.id);
    console.log(this.firstName);
    console.log(this.lastName);
  },
};

objHavingMethod.info();

console.log("-------------------------------------");
let objFn = objHavingMethod.info;
console.log(objFn); // See in Browser Console

objFn(); // [WRONG-OUTPUT]: undefined --> Binding problem with 'this'

console.log("==============================================");
console.log("=============== undefined ====================");
let u; // Only occupied by undefined value
console.log("u = ", u); // undefined ==>  absence of value, usually implicit
console.log(typeof u);

// let uu;      --> value undefined, type undefined
// let uu ="";  --> string <empty>, type string

console.log("==============================================");
console.log("================== null ======================");
let n = null; // Only occupied by null value
console.log("n = ", n); // null ==>  absence of object, usually explicitly stated
console.log(typeof n); // Object
