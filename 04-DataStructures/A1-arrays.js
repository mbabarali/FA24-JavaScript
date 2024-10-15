/**
==================================
 Arrays -- Indexed Collection
==================================
Zero Indexed
Container of mixed datatypes
Resizable 
Array copy is a shallow copy
==================================
*/

console.log("==============================================");
console.log([1, 2, 3]); // Array literal
console.log([1, 2, 3][0]);
console.log([1, 2, 3][1]);

console.log("-------------------------------------");
console.log([[1, "Ali", true]][2]);

console.log("-------------------------------------");
console.log([[1, "Ali", true]]["1"]);
console.log([1, 2, 3]["0"]);

console.log("==============================================");
var arr1 = [];
console.log(arr1);

var arr1 = new Array();
console.log(arr1);

var arr1 = Array();
console.log(arr1);

console.log("==============================================");
var arr1 = [6];
console.log(arr1); // [6]

var arr1 = Array.of(6);
console.log(arr1); // [6]

console.log("==============================================");
var arr1 = [];
console.log(arr1);
console.log(arr1[0]); // Index out of bound access
console.log(arr1[3]); // Index out of bound access
console.log(arr1[4]); // Index out of bound access

console.log("-------------------------------------");
var arr1 = [1, 2, 3];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[3]); // Index out of bound access
console.log(arr1[4]); // Index out of bound access
console.log([1, 2, 3][4]); // Index out of bound access

console.log("==============================================");
var arr1 = [];
arr1.length = 5; // Results in sparse array
console.log(arr1); // [ <5 empty items> ]

var arr1 = new Array(5); // Results in sparse array
console.log(arr1); // [ <5 empty items> ]

var arr1 = Array(5); // Results in sparse array
console.log(arr1); // [ <5 empty items> ]

console.log("==============================================");
var arr1 = [1, 2, , , 5]; // Results in sparse array
console.log(arr1);

var arr1 = [1, 2, 3];
console.log(arr1);

arr1[3] = 4; // Assignment at out of bound index - Sparse array
console.log(arr1);

arr1[5] = 6; // Assignment at out of bound index - Sparse array
console.log(arr1);

console.log("-------------------------------------");
console.log(typeof arr1); // Type: Object

console.log("-------------------------------------");
console.log(arr1 + " --> Type: " + typeof arr1); // 1,2,3,4,,6 --> Type: object
console.log(arr1, " --> Type: ", typeof arr1); // [ 1, 2, 3, 4, <1 empty item>, 6 ]  --> Type:  object

console.log("-------------------------------------");
var arr1 = [1, 2, 3];
console.log(arr1);

arr1[3] = "chair"; // Assignment at out of bound index
console.log(arr1);

arr1[4] = true; // Assignment at out of bound index

console.log("-------------------------------------");
console.log(arr1 + " --> Type: " + typeof arr1); // 1,2,3,chair,true --> Type: object
console.log(arr1, " --> Type: ", typeof arr1); // [ 1, 2, 3, 'chair', true ]  --> Type:  object

console.log("==============================================");
arr1 = [1, 2, 3, "chair", true];

console.log("-------------------------------------");
console.log(arr1[0]); // [NO Error]: Index based access of the array elemnts
// console.log(arr1.0); // [ERROR]: Arrays are object but . operator not defined in this way on arays

console.log("-------------------------------------");
arr1[5] = { name: "xyz", id: 50 };
console.log(arr1); // [ 1, 2, 3, 'chair', true, { name: 'xyz', id: 50 } ]

console.log("-------------------------------------");
console.log(arr1[5].name); // "[]" access on array and "." access on object
console.log(arr1[5].id);

console.log("-------------------------------------");
console.log(arr1[5], " --> Type: ", typeof arr1[5]); // { name: 'xyz', id: 50 }  --> Type:  object
console.log(arr1 + " --> Type: " + typeof arr1); // 1,2,3,chair,true,[object Object] --> Type: object
console.log(arr1, " --> Type: ", typeof arr1); // [ 1, 2, 3, 'chair', true, { name: 'xyz', id: 50 } ]  --> Type:  object  --> Type:  object

console.log("==============================================");
arr1 = [1, 2, 3, , true];
console.log(arr1.length);
console.log(arr1);

arr1.length = 4;
console.log(arr1);

arr1.length = 2;
console.log(arr1);

arr1.length = 0;
console.log(arr1);

// var Arrays
console.log("==============================================");
var arr1 = [1, 2, 3];
console.log(arr1);

arr1 = [1, 2, 3]; // [No Error]: "var declarations"
arr1 = [5, 6, 7]; // [No Error]: "var declarations"
arr1 = [5, "Ali", true]; // [No Error]: "var declarations"
console.log(arr1);

// const Arrays
console.log("==============================================");
const arrConst = [1, 2, 3];
console.log(arrConst);

arrConst[3] = "chair";
console.log(arrConst);

arrConst[4] = true;
console.log(arrConst);

arrConst = [1, 2, 3];

// [Syntax ERROR]: "const declarations"
arrConst = [5, 6, 7]; // [Syntax ERROR]: "const declarations"

// arrConst = [5, "Ali", true]; // [Syntax ERROR]: "const declarations"
