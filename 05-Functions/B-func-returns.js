/**
==================================
 Functions
==================================
- Returning values from function
- Implicit Retrun
- Explicit Return
==================================
*/

console.log("==============================================");
function add() {
  a = 1;
  b = 2;
  c = a + b;
  // implicit "return undefined;" statement at the end of block/body of the function
}

ans = add(); // No Error even if add() does not have explicit return statement

console.log(ans); // undefined
// console.log(add()); //undefined

console.log("==============================================");
function addAB() {
  a = 1;
  b = 2;
  return (c = a - b); // Explicit return statement --> returning Number
}

ans = addAB();

console.log(ans); // 3
// console.log(addAB()); // 3

console.log("==============================================");
function sub() {
  a = 1;
  b = 2;
  c = a - b;
  return c; // Explicit return statement --> returning Number
}

ans = sub();

console.log(ans); // -1
// console.log(sub()); // -1

console.log("==============================================");
function mul() {
  a = 1;
  b = 2;
  c = a * b;
  return { a: a, b: b, c: c }; // Explicit return statement --> returning Object
}

ans = mul();

console.log(ans); // { a: 1, b: 2, c: 2 }
// console.log(mul()); // { a: 1, b: 2, c: 2 }
