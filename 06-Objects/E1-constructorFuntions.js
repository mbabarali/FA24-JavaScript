/**
==================================
 Constructor Functions
==================================
 Object Creation
----------------------------------
TOPICS:
* Constructor Function
* [CONVENTION] The name of Constructor Function MUST start with capital letter
* ERRONEOUS creation/instantiation by calling constructor as a regular function (direct call)
* With ERRONEOUS creation/instantiation [Where actually created?], "cannot read properties of undefined" error
* RIGHTEOUS creation/instantiation with the help of "new" operator's call to constructor
* Handling ERRONEOUS creation/instantiation with new.target [ES6]
* Defining new property on ALL object, i.e., in Constructor Function
==================================
*/

console.log("==============================================");
// Constructor Function
function book(name, category) {
  this.name = name;
  this.category = category;
}

function house(sqFt, isAvailable) {
  this.area = sqFt;
  this.isEmpty = !isAvailable;
}

console.log("==============================================");
// [CONVENTION] The name of Constructor Function MUST start with capital letter
function GroceryItem(name, quantity, category) {
  this.name = name;
  this.quantity = quantity;
  this.category = category;
}

console.log("==============================================");
// ERRONEOUS creation/instantiation by calling constructor as a regular function (direct call)
// "this" pointing to Object Global in Terminal and Window object in Browser
function Citizen(name, dob, education) {
  this.name = name;
  this.dateOfBirth = dob;
  this.education = education;
}

let citizen1_notCreated = Citizen("Talha", "Finance Officer");
let citizen2_notCreated = Citizen("Saleem", "Branch Manager");

console.log("citizen1_notCreated = ", citizen1_notCreated); // undefined // [ERRONEOUS]: "this" pointing to Object Global in VSC/ Window object in Browser
console.log("citizen2_notCreated = ", citizen2_notCreated); // undefined // [ERRONEOUS]: "this" pointing to Object Global in VSC/ Window object in Browser

console.log("==============================================");
// With ERRONEOUS creation/instantiation [Where actually created?], "cannot read properties of undefined" error
function Transport(tType, vPower) {
  this.transportType = tType; // ERRONEOUS creation ON 1) Object Global in Terminal or 2) ERROR in Browser
  this.vehiclePowerClass = vPower;
  this.print = function () {
    console.log(
      " This is " + this.vehiclePowerClass + " " + this.transportType
    );
  };
}

console.log("-------------------------------------");
let t1_notCreated = Transport("Cargo", "Electric"); // ERRONEOUS creation
console.log("t1_notCreated = ", t1_notCreated); // undefined
// console.log("t1_notCreated = ", t1_notCreated.print); // [TypeError]: Cannot read properties of undefined (reading 'print')
// t1_notCreated.print(); // [TypeError]: Cannot read properties of undefined (reading 'print')
// console.log(t1_notCreated.constructor); // [TypeError]: Cannot read properties of undefined (reading 'constructor')

console.log("-------------------------------------");
// New object is not created.
// The 'this' is pointing to Object Global i.e., bound to Object Global.
// New Properties in the construcor (this.<property>) will be created on to Object Global in terminal.
// New Properties in the construcor (this.<property>) will not be created in Browser and produce error.

// Invoking on Object Global in Terminal (and ERROR in Browser)
print(); // Calling on Object Global

console.log("==============================================");
// RIGHTEOUS creation/instantiation with the help of "new" operator's call to constructor
// While each "function" has a property named 'constuctor' in the prototype , the 'constuctor' property of "constructor function"  points to itself.
// Role of "new" operator on a "constructor function" (Step-by-step)
//   --> Create memory and point 'this' to that memory
// Role of "constructor function" call after 'new'
//   ++> Creates properties (if any) refered by 'this' (this.<property>) on that memory pointed by 'this'.
//   ++> Return 'this' from constructor if there is no 'return' statement.
//   ++> Return object if object is returned. Return nothing if non-object value is returned from constructor.

function Employee(name, designation) {
  this.fullName = name;
  this.designation = designation;
}

console.log("Employee.prototype = ", Employee.prototype); //  Prototype in function object

let emp1 = new Employee("Talha", "Finance Officer");
let emp2 = new Employee("Kareem", "Branch Manager");

console.log("emp1 = ", emp1);
console.log("emp2 = ", emp2);

console.log(emp1.constructor); // See in Browser Console
console.log(emp2.constructor); // See in Browser Console

console.log(emp1.constructor.toString());
console.log(emp2.constructor.toString());

console.log("==============================================");
// Handling ERRONEOUS creation/instantiation with new.target [ES6]
function Bike(company, make, color, maxSpeed, count) {
  console.log(" [Bike] this: ", this);

  if (!new.target) {
    // here, new.target = undefined
    // here, 'this' pointing to Object Global

    // throw Error("New object is undefined. Use new keyword.");
    return new Bike(company, make, color, maxSpeed, count);
  }

  // here, new.target = constructor function
  // here, 'this' pointing to (newly created, empty) Bike Object

  this.company = company; // Property
  this.make = make; // Property
  this.color = color; // Property
  this.maxSpeed = maxSpeed; // Property
  this.count = count; // Property
  this.getAvailability = // Property/ Method
    function () {
      console.log(" [getAvailability] this: ", this);
      return {
        model: this.make,
        availabiliy: this.count,
      };
    };
}

console.log("-------------------------------------");
let bikeA_HandledTarget = Bike("Honda", 1999, "red", 120, 2); // ERRONEOUS but HANDLED creation
let bikeB_HandledTarget = Bike("Yamaha", 2023, "black", 120, 6); // ERRONEOUS but HANDLED creation
let bikeC_HandledTarget = Bike("Suzuki", 2017, "red", 120, 3); // ERRONEOUS but HANDLED creation

console.log("bikeA_HandledTarget = ", bikeA_HandledTarget);
console.log("bikeB_HandledTarget = ", bikeB_HandledTarget);
console.log("bikeC_HandledTarget = ", bikeC_HandledTarget);

console.log("==============================================");
// Defining new property on ALL object, i.e., in Constructor Function
console.log("-------------------------------------");
Bike.prototype.bikeHeightInch = 24;
// bikeA_HandledTarget.prototype.bikeHeightInch = 24;

let bikeD_HandledTarget = Bike("Yamaha", 2023, "black", 120, 6);

console.log("bikeD_HandledTarget = ", bikeD_HandledTarget);

console.log("bikeD_HandledTarget = ", bikeD_HandledTarget);
console.log(
  "bikeD_HandledTarget.bikeHeightInch = ",
  bikeD_HandledTarget.bikeHeightInch
);
// console.log(
//   "bikeD_HandledTarget.prototype.bikeHeightInch = ",
//   bikeD_HandledTarget.prototype.bikeHeightInch
// );

console.log("-------------------------------------");
console.log("bikeA_HandledTarget = ", bikeA_HandledTarget);
console.log(
  "bikeA_HandledTarget.bikeHeightInch = ",
  bikeA_HandledTarget.bikeHeightInch
);
// console.log(
//   "bikeA_HandledTarget.prototype.bikeHeightInch = ",
//   bikeA_HandledTarget.prototype.bikeHeightInch
// );

console.log("-------------------------------------");
console.log(
  "bikeA_HandledTarget = ",
  bikeA_HandledTarget.getAvailability.toString()
);
console.log(
  "bikeD_HandledTarget = ",
  bikeD_HandledTarget.getAvailability.toString()
);

console.log("-------------------------------------");
console.log("Bike.prototype = ", Bike.prototype);
Bike.prototype;
