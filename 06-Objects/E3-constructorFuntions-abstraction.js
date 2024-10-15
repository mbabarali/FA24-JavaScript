/**
==================================
 Constructor Functions
==================================
 Object Abstraction 
----------------------------------
 - Hiding Details
 - Closure
----------------------------------
* Constructor function with public properties --- No Abstraction
* Constructor function with private properties --- Abstraction
      1) Constructor function with public and private properties --- Abstraction
      2) Constructor function with public and private properties --- Abstraction
==================================
*/

console.log("==============================================");
// Constructor function with public properties --- No Abstraction
function Bike(company, make, color, maxSpeed, count) {
  console.log(" [Bike - Constructor] this: ", this);

  this.company = company; // Property
  this.make = make; // Property
  this.color = color; // Property
  this.maxSpeed = maxSpeed; // Property
  this.count = count; // Property
  this.getAvailability = // Property/ Method
    function () {
      console.log(" [Availability] this: ", this);
      return {
        model: this.make,
        availabiliy: this.count,
      };
    };
}

console.log("-------------------------------------");
let myBike = new Bike("Honda", 2023, "red", 120, 1);
console.log(myBike);

console.log("-------------------------------------");
console.log(myBike.company); // [Property] Publically accessible -- Public
console.log(myBike.make); // [Property] Publically accessible -- Public
console.log(myBike.color); // [Property] Publically accessible -- Public
console.log(myBike.maxSpeed); // [Property] Publically accessible -- Public
console.log(myBike.count); // [Property] Publically accessible -- Public
console.log(myBike.getAvailability); // [Property] Publically accessible -- Public
myBike.getAvailability(); // [Method/ Property] Publically accessible -- Public

console.log("-------------------------------------");
let info = myBike.company; // [Property] Publically accessible -- Public
console.log(info);

myBike.company = "BMW"; // [Property] Publically accessible -- Public
console.log(myBike);

console.log("==============================================");
// Constructor function with private properties --- Abstraction
function SecureBike(company, make, color, maxSpeed, count) {
  console.log("[SecureBike - Constructor] this: ", this);

  let _company = company; // [NOT a property] Local variable, local scope
  let _make = make; // [NOT a property] Local variable, local scope
  let _color = color; // [NOT a property] Local variable, local scope
  let _maxSpeed = maxSpeed; // [NOT a property] Local variable, local scope
  let _count = count; // [NOT a property] Local variable, local scope

  let _doSomeCalculation = function () {
    // Here you can perform some logic on the argument/local variables
    return 0;
  };

  let getAvailability = // [NOT a property/ Method] Local variable, local scope
    function () {
      console.log(" [Availability] this: ", this);
      return {
        model: _make,
        availabiliy: _doSomeCalculation() + _count,
      };
    };
}

console.log("-------------------------------------");
let mySecBike = new SecureBike("Honda", 2023, "red", 120, 1);
console.log(mySecBike); // Empty Object [No property defined]

console.log("-------------------------------------");
console.log(mySecBike._company); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySecBike._make); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySecBike._color); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySecBike._maxSpeed); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySecBike._count); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySecBike._doSomeCalculation); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySecBike.getAvailability); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
// mySecBike.getAvailability(); // [TypeERROR]: Neither a Property, nor accessible // undefined function call // Local variable in function // Think as if it is private

console.log("-------------------------------------");
let comp = mySecBike.company; // Getting property - Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(comp);

mySecBike.company = "BMW"; // Setting property [CREATED PROPERTY] - Neither a Property, nor accessible -- Local variable -- Private
console.log(mySecBike);

console.log("==============================================");
// 1) Constructor function with public and private properties --- Abstraction
function SafeBike(company, make, color, maxSpeed, count) {
  console.log(" [SafeBike - Constructor] this: ", this);

  let _make = make; // [NOT a property] Local variable, local scope
  let _color = color; // [NOT a property] Local variable, local scope
  let _maxSpeed = maxSpeed; // [NOT a property] Local variable, local scope
  let _count = count; // [NOT a property] Local variable, local scope

  let _doSomeCalculation = function () {
    // Here you can perform some logic on the argument/local variables
    return 0;
  };

  let getAvailability = function () {
    console.log(" [Availability] this: ", this);
    return {
      model: _make,
      availabiliy: _doSomeCalculation() + _count,
    };
  };

  //---
  this.company = company; // Property
  this.showDetail = getAvailability; // Property/ Method
}

console.log("-------------------------------------");
let mySafeBike = new SafeBike("Honda", 2023, "red", 120, 1);
console.log(mySafeBike);

console.log("-------------------------------------");
console.log(mySafeBike._make); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySafeBike._color); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySafeBike._maxSpeed); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySafeBike._count); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySafeBike._doSomeCalculation); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySafeBike.getAvailability); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
// mySafeBike.getAvailability(); // [TypeERROR]: Neither a Property, nor accessible // undefined function call // Local variable in function // Think as if it is private

console.log("-------------------------------------");
console.log(mySafeBike.company); // [Property] Publically accessible -- Public
console.log(mySafeBike.showDetail); // [Method/ Property] Publically accessible Function -- Public
mySafeBike.showDetail(); // [Method/ Property] Publically accessible Function CALL -- Public

console.log("-------------------------------------");
let infos = mySafeBike.company; // Getting property
console.log(infos);

mySafeBike.company = "BMW"; // Setting property
console.log(mySafeBike);

console.log("==============================================");
// 2) Constructor function with public and private properties --- Abstraction
function SaferBike(company, make, color, maxSpeed, count) {
  console.log("SaferBike Constructor Call --> this: ", this);

  let _make = make; // Local Variable
  let _color = color; // Local Variable
  let _maxSpeed = maxSpeed; // Local Variable
  let _count = count; // Local Variable

  let _doSomeCalculation = function () {
    // Here you can perform some logic on the argument/local variables
    return 0;
  };

  let getAvailability = // Local Variable
    function () {
      // console.log("Availability --> this: ", this);
      return {
        model: _make,
        availabiliy: _doSomeCalculation() + _count,
      };
    };

  //---
  this.company = company; // Property
  this.showDetail = // Property/ Method
    function () {
      console.log(" [showDetail] this: ", this);
      let obj = getAvailability();
      console.log(obj);
    };
}

console.log("-------------------------------------");
let mySaferBike = new SaferBike("Honda", 2023, "red", 120, 1);
console.log(mySaferBike);

console.log("-------------------------------------");
console.log(mySaferBike._make); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySaferBike._color); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySaferBike._maxSpeed); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySaferBike._count); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
console.log(mySaferBike.getAvailability); // Neither a Property, nor accessible // undefined // Local variable in function // Think as if it is private
// mySaferBike.getAvailability(); // [TypeERROR]: Neither a Property, nor accessible // undefined function call // Local variable in function // Think as if it is private

console.log("-------------------------------------");
console.log(mySaferBike.company); // [Property] Publically accessible -- Public
console.log(mySaferBike.showDetail); // [Method/ Property] Publically accessible Function -- Public
mySaferBike.showDetail(); // [Method/ Property] Publically accessible Function CALL -- Public

console.log("-------------------------------------");
let data = mySaferBike.company; // Getting property
console.log(data);

mySaferBike.company = "BMW"; // Setting property
console.log(mySaferBike);
