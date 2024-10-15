/**
==================================
 Classes
==================================
  Approaches to define a class
----------------------------------
* Class is another way to create objects
* Class is sort of a special function
==================================
*/

console.log("==============================================");
// Class declaration
class testClassA {
  // ....
}

console.log("-------------------------------------");
// Class Expression with anonymous class
const testClassB = class {
  // ....
};

console.log("-------------------------------------");
// Class Expression with named class
const testClassC = class Institute {
  // ....
};

console.log("==============================================");
// Class declaration
class vehicle {
  // ....
}

let v1 = new vehicle();
console.log(v1, " --> Type: ", typeof v1, " --> Type: ", typeof vehicle);

console.log("==============================================");
// [STRONG Convention] Capital letter start (and PascalCase notation) in class name
class Employee {
  // ....
}

let e1 = new Employee();
console.log(e1, " --> Type: ", typeof e1, " --> Type: ", typeof Employee);
