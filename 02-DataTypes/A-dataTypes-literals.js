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
==================================
*/

console.log("==============================================");
console.log("================== STRINGS ===================");
console.log("Hello World! 123."); // String literal
console.log(typeof "Hello World! 123.");

// console.log("The word \"class\" is a keyword in JS"); // String literal, You can use double quotes with \ escape character
// console.log('The word \'class\' is a keyword in JS'); // String literal, You can use single quotes with \ escape character
// console.log('The word "class" is a keyword in JS'); // String literal, You can mix single quotes and double quotes
// console.log("The word 'class' is a keyword in JS"); // String literal, You can use single quotes and double quotes

console.log(
  'The word "class" is a keyword in JS',
  "--> Type:",
  typeof 'The word "class" is a keyword in JS'
);

// -----------------------------
console.log("This is line one. \nThis is line two. \nThis is line three."); // Multiline string literal

// -----------------------------
console.log(
  "This is line one. \n" + "This is line two. \n" + "This is line three." // Strind concatination with + operator
); // Multiline string literal

// -----------------------------
console.log("mississippi"[0]); // [] operator FOR READING PURPOSE ONLY

// -----------------------------
console.log("Hello"[0]); // [] operator FOR READING PURPOSE ONLY

console.log("Hello"[6]); // Index boundary

// -----------------------------
console.log("Learning JavaScript strings".charAt(0));
console.log("Learning JavaScript strings".charCodeAt(0));

// -----------------------------
console.log("Learning JavaScript strings".indexOf("e"));
console.log("Learning JavaScript strings".indexOf("Script"));
console.log("Learning JavaScript strings".indexOf("i")); // Retruns index of first occurance
console.log("Learning JavaScript strings".lastIndexOf("i")); // Retruns index of last occurance -- searches from last

console.log("Learning JavaScript strings".indexOf("i", 5)); // (searchkey, searchStartIndexInclusive)

// -----------------------------
console.log("Learning JavaScript strings".length);

// -----------------------------
console.log("Learning JavaScript strings".replace("JavaScript", "JS"));

// -----------------------------
console.log("Learning JavaScript strings".slice(0, 4)); // (startIndex, endIndex]
console.log("Learning JavaScript strings".slice(4)); // startIndex

console.log("Learning JavaScript strings".slice(-1)); // startIndex from last {-1 is last index}
console.log("Learning JavaScript strings".slice(-4)); // startIndex from last
console.log("Learning JavaScript strings".slice(-4, -1)); // (startIndexfromLast, endIndex]

// -----------------------------
console.log("        Welcome to Pakistan            ".trim()); // remove spaces from sides of the string
console.log("        Welcome to Pakistan            ".trimStart()); // remove spaces before the string
console.log("        Welcome to Pakistan            ".trimEnd()); // remove spaces after the string

// -----------------------------
console.log("Pakistan".padStart(10)); // (Total length after padding with space)
console.log("Pakistan".padEnd(10)); // (Total length after padding with space)
console.log("Pakistan".padEnd(10, "-")); // (Total length, "-")
console.log("Pakistan".padEnd(17, " Zindabad")); // (desiredTotalLength, stringToPad)
console.log("Pakistan".padEnd(30, " Zindabad")); // (desiredTotalLength, stringToPad)

// -----------------------------
console.log("Story telling is an art".split(" ")); // (delimiter)
console.log("Story telling is an art".split("")); // (delimiter)
console.log("Story telling is an art".split(" ", 2)); // (delimiter, No. of substrings from start)

console.log("==============================================");
console.log("================ number ======================");
console.log(50, "--> Type:", typeof 50);
console.log(50 + " --> Type: " + 50);

console.log("-------------------------------------");
console.log(50 / 12);
console.log(50 / "12"); // Type coercion
console.log(50 / 0);
console.log(50 / -0);
console.log(50 / "0"); // Type coercion

console.log("-------------------------------------");
console.log(50 / "A"); // NaN = Not a Number

console.log("-------------------------------------");
console.log(0888 / 8); //Decimal literal
console.log(0888); //Decimal literal

console.log(0777 / 7); //Octal literal
console.log(0777); //Octal literal

console.log("==============================================");
console.log("================== OBJECTS ===================");

// const obj = {
//   property1: value1, // property name may be an identifier
//   2: value2, // or a number
//   "property n": value3, // or a string
// };

let anObj = {};
console.log("anObj = ", anObj);
console.log(typeof anObj);

// -----------------------------
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

console.log("-------------------------------------");
let employee = newObj; // Assignemnt of an object will not create copy. Both are reference to same object.
employee.firstName = "Muhammad";
console.log(newObj);
console.log(employee);

console.log("-------------------------------------");
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

console.log("-------------------------------------");
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

objFn(); // [WRONG-OUTPUT]: undefined --> Binding problem with "this"

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
