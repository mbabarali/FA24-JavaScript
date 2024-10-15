/**
==================================
 Objects
==================================
 Methods
----------------------------------
- Object creation from object literal
- Adding new property method an existing object
- "this" in object
==================================
*/

console.log("==============================================");
// Object creation from object literal
citizen = {
  firstName: "Aslam", // Property
  age: "31", // Property
};

console.log(citizen);

console.log("-------------------------------------");

citizen1 = {
  firstName: "Ali",
  age: "10",

  //Method
  print: function () {
    console.log("I am citizen.");
  },
};

console.log(citizen1);
citizen1.print();

console.log("-------------------------------------");
citizen2 = {
  firstName: "Akram",
  age: "15",

  //Method
  print() {
    // Accessing or modifying properties using 'this'
    console.log(
      "Citizen Name = " + this.firstName + ", Citizen Age = " + this.age
    );
  },
};

console.log(citizen2);
citizen2.print();

console.log("==============================================");
let bike1 = {
  // Properties
  company: "Honda",
  make: 1999,
  color: "red",
  maxSpeed: 120,
  count: 2,

  // Method(s)
  availabilityStats: function () {
    console.log("this: ", this); // 'this' keyword
    return {
      model: this.make,
      availabiliy: this.count,
    };
  },
};

console.log("-------------------------------------");
console.log(typeof bike1); // log type of identifier
console.log(bike1); // log object
console.log(bike1.company); // log property
console.log(bike1.availabilityStats); // log method
console.log(bike1.availabilityStats()); // log returned value of the method

console.log("-------------------------------------");
let bike2 = {
  company: "Yamaha",
  make: 2023,
  color: "black",
  maxSpeed: 120,
  count: 6,

  availabilityStats: function () {
    console.log("this: ", this);
    return {
      model: this.make,
      availabiliy: this.count,
    };
  },
};

let bike3 = {
  company: "Suzuki",
  make: 2017,
  color: "red",
  maxSpeed: 120,
  count: 3,

  availabilityStats: function () {
    console.log("this: ", this);
    return {
      model: this.make,
      availabiliy: this.count,
    };
  },
};

products = [bike1, bike2, bike3];

console.log("Company: " + bike1.company);
console.log("Company: " + products[2].company);

let availabiliy = bike1.availabilityStats();
console.log("availabiliy: ", availabiliy);
console.log("Count: " + availabiliy.availabiliy);

console.log("==============================================");
// Adding new property method an existing object

let employee = {
  // Properties
  company: "Company ABC",
  grade: "Officer",
};

console.log("employee: ", employee);

let e1 = employee; // Reference copy only

e1.print = function () {
  console.log(
    "Employee company: " + this.company + ", Employee grade: " + this.grade
  );
};

console.log("employee: ", employee);

employee.print();

console.log("==============================================");
// "this" in object

let address = {
  // Properties
  houseNo: 15,
  street: 5,
  addressLine1: "Defence",
  addressLine2: "Road",
  addressLine3: "Lahore Pakistan",

  print: function () {
    console.log(
      "Address: " +
        this.addressLine1 +
        " " +
        this.addressLine2 +
        ", " +
        this.addressLine3
    );
  },
};

console.log("address: ", address);
console.log(address.print);
address.print();

delete address.print; // Deleting exising property method
console.log("address: ", address);
console.log(address.print); // undefined
// address.print(); // [ERROR] TypeError: address.print is not a function

delete address.print; // Deleting NON-exising property
console.log("address: ", address);
console.log(address.print); // undefined
// address.print(); // [ERROR] TypeError: address.print is not a function

let motorBike1 = {
  // Properties
  company: "Honda",
  make: 1999,
  color: "red",
  maxSpeed: 120,
  count: 2,

  // Method(s)
  availabilityStats: function () {
    console.log("this: ", this); // 'this' keyword
    return {
      model: this.make,
      availabiliy: this.count,
    };
  },
};

console.log("-------------------------------------");
motorBike1.availabilityStats(); // OK
console.log("motorBike1.availabilityStats() ", motorBike1.availabilityStats()); // OK

console.log("- - - - - -");
const functionBike = motorBike1.availabilityStats;
functionBike(); // [WRONG-OUTPUT] undefined --- 'this' pointing Object Global
console.log("functionBike(): ", functionBike()); // [WRONG-OUTPUT] undefined --- 'this' pointing Object Global

console.log("-------------------------------------");
const mbArray = [motorBike1]; // motorBike Array
mbArray[0].availabilityStats(); // OK
console.log("mbArray[0].availabilityStats(): ", mbArray[0].availabilityStats()); // OK

console.log("- - - - - -");
const functionArray = mbArray[0].availabilityStats;
functionArray(); // [WRONG-OUTPUT] undefined --- 'this' pointing Object Global
console.log("functionArray(): ", functionArray()); // [WRONG-OUTPUT] undefined --> Binding problem with 'this': 'this' pointing Object Global
