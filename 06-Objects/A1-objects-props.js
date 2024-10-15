/**
==================================
 Objects
==================================
 Properties
----------------------------------
 * Object Literals
 * Object Variables
==================================
*/

console.log("==============================================");
// Object Initializer
let emptyObj = {
  // No Data
};

console.log(emptyObj); // log object
console.log(typeof emptyObj); // log type of identifier

console.log("==============================================");
// log object literal
console.log({
  firstName: "Ali", // Property (name: value)
  semester: 5, // Property (name: value)
});

console.log(
  typeof {
    firstName: "Ali", // Property (name: value)
    semester: 5, // Property (name: value)
  }
);

console.log("==============================================");
// Object Initializer
let x = {
  // [Data]
  firstName: "Ali", // Property (name: value)
  lastName: "Iqbal",
  semester: 5,
  "Registration Id": "BCE-250",
  0: "GAS",
};

console.log("-------------------------------------");
console.log(typeof x); // log type of identifier
console.log(x); // log object

// The . operator
console.log(x.firstName); // log property
console.log("Semester: " + x.semester); // log property
// console.log("Status: " + x.0); // [ERROR] log property

var prop1 = "Registration Id";
var prop2 = "firstName";

// The [] operator
console.log(x["0"]); // log property
console.log(x[0]); // log property
console.log(x["Registration Id"]); // log property
console.log(x[prop1]); // log property
console.log(x[prop2]); // log property

console.log("-------------------------------------");
// Object Initializer
let y = {
  firstName: "Aslam", // Property (name: value)
  lastName: "Khan",
  semester: 6,
  RegId: "BCE-234",
};

// Object Initializer
let z = {
  firstName: "Tauqeer", // Property (name: value)
  lastName: "Salman",
  semester: 7,
  RegId: "BCE-345",
};

console.log("-------------------------------------");
arrayOfObjects = [x, y, z];

console.log(typeof arrayOfObjects);
console.log("Semester: " + arrayOfObjects[2].semester);

console.log("==============================================");
// Object Initializer from other variables

// Bike Details
a = "Honda";
b = 1999;
c = "red";
d = 120;
e = 2;

let bikeObjA = {
  // Properties
  company: a,
  make: b,
  color: c,
  maxSpeed: d,
  count: e,
};

console.log(bikeObjA);

console.log("-------------------------------------");

// Variable having Bike Details
company = "Honda";
make = 1999;
color = "red";
maxSpeed = 120;
count = 2;

let bikeObjB = {
  // Properties created with the same name as variable name
  company, // company: company,
  make, // make: make,
  color, // color: color,
  maxSpeed, // maxSpeed: maxSpeed,
  count, // count: count,
};

console.log(bikeObjB);

console.log("==============================================");

// Variable having Bike Details
make = 1999;
count = 2;

let bike1 = {
  // Properties
  company: "Honda",
  make,
  color: "red",
  maxSpeed: 120,
  count,
};

console.log("-------------------------------------");
console.log(typeof bike1); // log type of identifier
console.log(bike1); // log object
console.log(bike1.company); // log property

console.log("-------------------------------------");
let bike2 = {
  company: "Yamaha",
  make: 2023,
  color: "black",
  maxSpeed: 120,
  count: 6,
};

let bike3 = {
  company: "Suzuki",
  make: 2017,
  color: "red",
  maxSpeed: 120,
  count: 3,
};

console.log("-------------------------------------");
products = [bike1, bike2, bike3];

console.log("Company: " + bike1.company);
console.log("Company: " + products[2].company);

console.log("==============================================");
// Objects are mutable
// Objects are references

let newBike = {
  // Properties
  company: "Honda",
  make: 1999,
  color: "red",
  maxSpeed: 120,
  count: 2,
};

console.log("newBike: ", newBike);

let bike = newBike; // Reference copy only
bike.make = 1990;

console.log("newBike: ", newBike);

console.log("==============================================");
// Adding new property to an existing object

let employee = {
  // Properties
  company: "Company ABC",
  grade: "Officer",
};

console.log("employee: ", employee);

let e1 = employee; // Reference copy only
e1.name = "Babar";
employee.age = 20;

console.log("employee: ", employee);

console.log("==============================================");
// Deleting [existing] property as well as its value from an object

let address = {
  // Properties
  houseNo: 15,
  street: 5,
  addressLine: "Defence Road, Lahore Pakistan",
  addressLine1: "Defence",
  addressLine2: "Road",
  addressLine3: "Lahore Pakistan",
};

console.log("address: ", address);

delete address.addressLine; // Deleting exising property
console.log("address: ", address);

delete address.addressLine; // Deleting NON-exising property
console.log("address: ", address);

console.log("==============================================");
// Nested object

let personalRecord = {
  // Properties
  company: "Company ABC",
  grade: "Officer",

  address: {
    // Properties
    houseNo: 15,
    street: 5,
    addressLine1: "Defence",
    addressLine2: "Road",
    addressLine3: "Lahore Pakistan",
  },
};

console.log("personalRecord: ", personalRecord);
console.log("addaddressLine3: ", personalRecord.address.addressLine3);
