/**
==================================
 Functions parameters and arguments
==================================
 Passing argument to function
 ---------------------------------
 Mismatched Params and Args
 Duplicate Names in Arguments
 Default Args
 Rest Parameters
==================================
*/

console.log("======== Mismatched Params and Args ==========");
console.log("==============================================");
// Passing different numbers of arguments to function vs. function parameters in declaration

//parameter list --> a, b
function add(a, b) {
  console.log("arguments [add] -->", arguments);
  console.log("No. of arguments [add] -->", arguments.length);
  // console.log("arguments[0] =", arguments["0"], "--> Type:", typeof arguments["0"]);
  return a + b;
}

// Function are first-class objects
console.log("Function Name -->", add.name);
console.log("No. of parameters -->", add.length);

console.log("-------------------------------------");
ans = add(1, 2); // matched length of argument list and parameter list
console.log(ans);

ans = add("1", 2); // matched length of argument list and parameter list
console.log(ans);

ans = add(1, "2"); // matched length of argument list and parameter list
console.log(ans);

ans = add("1", "2"); // matched length of argument list and parameter list
console.log(ans);

console.log("-------------------------------------");
// Missing argument's pre-configured default value is "undefined"

ans = add(); // miss-matched length of argument list and parameter list
console.log(ans);

ans = add(1); // miss-matched length of argument list and parameter list
console.log(ans);

// Missing argument's default value
ans = add("1"); // miss-matched length of argument list and parameter list
console.log(ans);

console.log("-------------------------------------");
// Additional arguments will be ignored

ans = add(5, 6, 100); // miss-matched length of argument list and parameter list
console.log(ans);

console.log("====== Duplicate Names in Arguments ==========");
console.log("==============================================");

function duplicateArguments(a, b, c, c, d, c, a) {
  console.log(a, b, c, d);
  console.log(arguments);
}

duplicateArguments(1, 2, 3, 4); // undefined 2 undefined undefined
duplicateArguments(1, 2, 3, 4, 5, 6, 7, 8); // 7 2 6 5

console.log("=============== Default Args =================");
console.log("==============================================");
// Custom default value for missing arguments
//  -- Parameters with custom default value MUST come at last
//     in a parameter list of a function

//parameter list --> a, b
function addition(a, b = 5) {
  console.log("[addition]", a, b);
  return a + b;
}

console.log("No. of parameters -->", addition.length); // function's length untill the first default parameter

ans = addition(); // miss-matched length of argument list and parameter list
console.log(ans);

ans = addition(15); // miss-matched length of argument list and parameter list
console.log(ans);

// Missing argument's default value
ans = addition("15"); // miss-matched length of argument list and parameter list
console.log(ans);

console.log("==============================================");
// Scope of custom default parameters
// -- The default parameters have their own scope
// -- The default parameters' scope is parent of the scope created for the function body

function scopeDefault(a, b, c = a + b) {
  // Earlier parameters are available to later default parameters
  console.log("No. of arguments [scopeDefault] -->", arguments.length);
  return c;
}

ans = scopeDefault(5, 10);
console.log(ans);

console.log("-------------------------------------");
function scopeDefaultEx2(a, b, c = a + b) {
  var innerVar = c + 500; // Internal vriables from function body accessing default parameters
  return innerVar;
}

ans = scopeDefaultEx2(5, 10);
console.log(ans);

console.log("-------------------------------------");
function scopeDefaultEx3(a, b, c = a + innerVar) {
  // [ReferenceERROR] c = a + innerVar --> Default parameter accessing variable from function body

  var innerVar = c + 500; // Internal vriables accessing default parameters
  return innerVar;
}

// ans = scopeDefaultEx3(5, 10); // [ReferenceERROR]
// console.log(ans); // [ReferenceERROR]

console.log("==============================================");
// The default argument is evaluated at call time.
// A new dafault object is created each time the function is called.

function insertLast(value, array = [1, 2]) {
  array.push(value);
  return array;
}

item = insertLast(3);
console.log(item);

item = insertLast(4);
console.log(item);

console.log("=============== Rest Parameters ==============");
console.log("==============================================");
// Passing rest parameter

function accumulate(...nums) {
  console.log("Rest Parameters --> ", nums.length, " --> ", nums);
  console.log("No. of arguments [accumulate] -->", arguments.length); // Rest parameters and all parametrs after first default parameters are not counted
  return nums[0] + nums[1] + nums[2];
}

ans = accumulate(5, 5, 5);
console.log("No. of parameters -->", accumulate.length);
console.log(ans);

console.log("-------------------------------------");
function accumulateTwo(...nums) {
  console.log("Rest Parameters --> ", nums.length, " --> ", nums);
  console.log("No. of arguments [accumulateTwo] -->", arguments.length);
  acc = 0;
  for (const num of nums) acc += num; // Using iterations
  return acc;
}

ans = accumulateTwo(6, 6, 6);
console.log("No. of parameters -->", accumulateTwo.length); // Rest parameters and all parametrs after first default parameters are not counted
console.log(ans);

console.log("-------------------------------------");
function accumulateThree(x, y, ...nums) {
  console.log("Rest Parameters --> ", nums.length, " --> ", nums);
  console.log("No. of arguments [accumulateThree] -->", arguments.length);
  acc = 0;
  for (const num of nums) acc += num;
  return x + y + acc;
}

ans = accumulateThree(6, 6, 6, 6, 6, 6);
console.log("No. of parameters -->", accumulateThree.length); // Rest parameters and all parametrs after first default parameters are not counted
console.log(ans);

console.log("-------------------------------------");
// function accumulateFour(x, y = 5, ...nums) {
function accumulateFour(x = 5, y, ...nums) {
  console.log("Rest Parameters --> ", nums.length, " --> ", nums);
  console.log("No. of arguments [accumulateFour] -->", arguments.length);
  acc = 0;
  for (const num of nums) acc += num;
  return x + y + acc;
}

ans = accumulateFour(6, 6, 6, 6, 6, 6);
console.log("No. of parameters -->", accumulateFour.length); // Rest parameters and all parametrs after first default parameters are not counted
console.log(ans);
