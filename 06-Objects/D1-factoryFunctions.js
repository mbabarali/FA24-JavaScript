/**
==================================
 Factory Functions
==================================
 Object Creation
---------------------------------- 
TOPICS:
* Object creation from object literal [Drawback: Repetition of code]
* Factory Functions to create objects (with properties only)
* Factory Functions to create objects (with methods)
* Factory Function [Drawback: Duplication of Method(s) in each object created]
* Factory Function [Overcome Drawback: Avoid duplication of Property(ies)/Method(s) by pototyping]
==================================
*/

console.log("==============================================");
// Object creation from object literal [Drawback: Repetition of code]
citizen1 = {
  firstName: "Ali", // Property
  age: "10", // Property

  print() {
    console.log(
      "Citizen Name = " + this.firstName + ", Citizen Age = " + this.age // use of 'this' to access property
    );
  },
};

citizen2 = {
  firstName: "Akram", // Property
  age: "15", // Property

  print() {
    console.log(
      "Citizen Name = " + this.firstName + ", Citizen Age = " + this.age // use of 'this' to access property
    );
  },
};

console.log(citizen1);
console.log(citizen2);
citizen1.print();
citizen2.print();

console.log("==============================================");
// Factory Functions to create objects (with properties only)
function createObj1() {
  return {
    firstName: "Ali", // Property
    age: "10", // Property
  };
}

console.log("-------------------------------------");
function createObj2(first, age) {
  return {
    firstName: first, // Property
    age: age, // Property
  };
}

console.log("==============================================");
// Factory Functions to create objects (with methods)
function createObj3(first, age) {
  return {
    firstName: first, // Property
    age: age, // Property

    // Method
    print: function () {
      console.log(" [print] this: ", this);

      console.log(
        'Name of the person: "' +
          this.firstName +
          '", ' +
          this.age +
          " year(s) old."
      );
    },
  };
}

let person1 = createObj3("Babar", 8); // create object from the factory function
let person2 = createObj3("Ali", 10);
let person3 = createObj3("Khan", 13);

console.log(person1); // log object
console.log(person2);
console.log(person3);

console.log(person1.age); // log property
console.log(person1.firstName);
console.log(person1.print); // log method
console.log(person1.print()); // log returned value of the method

console.log("==============================================");
// Factory Function [Drawback: Duplication of Method(s) in each object created]
function createBike(company, make, color, maxSpeed, count) {
  return {
    // Properties
    company: company,
    make: make,
    color: color,
    maxSpeed: maxSpeed,
    count: count,

    // Method(s)
    getAvailability: function () {
      console.log(" [getAvailability] this: ", this);
      return {
        model: this.make,
        availabiliy: this.count,
      };
    },
  };
}

let bike1 = createBike("Honda", 1999, "red", 120, 2); // create object from the factory function
let bike2 = createBike("Yamaha", 2023, "black", 120, 6);
let bike3 = createBike("Suzuki", 2017, "red", 120, 3);

/**
 - Duplicate properties as well as methods in each object
 - You will see 'getAvailability' method in each of the follwoing object i.e., duplicate 'getAvailability' method in each object.
 - Duplicate due to independent objects which lacks proper inheritance (aka prototype chain)
 - In Browser Console, you can see [[proptotype]]
 */
console.log("bike1 = ", bike1); // log object  // See in Browser Console
console.log("bike2 = ", bike2);
console.log("bike3 = ", bike3);

console.log(bike1.company); // log property
console.log(bike1.count);
console.log(bike1.getAvailability); // log method
console.log(bike1.getAvailability()); // log returned value of the method

console.log("==============================================");
// Factory Function [Overcome Drawback: Avoid duplication of Property(ies)/Method(s) by pototyping]

let bikePrototype = {
  // Method(s)
  getAvailability: function () {
    console.log(" [getAvailability] this: ", this);
    return {
      model: this.make,
      availabiliy: this.count,
    };
  },
};

function createBikeFromPrototype(company, make, color, maxSpeed, count) {
  let newChildObject = Object.create(bikePrototype); // take bikePrototype as prototype

  // Add properties in child
  newChildObject.company = company;
  newChildObject.make = make;
  newChildObject.color = color;
  newChildObject.maxSpeed = maxSpeed;
  newChildObject.count = count;

  return newChildObject; // return child
}

let bikeFromProto1 = createBikeFromPrototype("Honda", 1999, "red", 120, 2); // create object from the factory function
let bikeFromProto2 = createBikeFromPrototype("Yamaha", 2023, "black", 120, 6);
let bikeFromProto3 = createBikeFromPrototype("Suzuki", 2017, "red", 120, 3);

/**
 - Duplicate properties as well as methods in each object
 - You will see 'getAvailability' method in each of the follwoing object i.e., duplicate 'getAvailability' method in each object.
 - Duplicate due to independent objects which lacks proper inheritance (aka prototype chain)
 - In Browser Console, you can see [[proptotype]]
 */
console.log("bikeFromProto1 = ", bikeFromProto1); // log object  // See in Browser Console
console.log("bikeFromProto2 = ", bikeFromProto2);
console.log("bikeFromProto3 = ", bikeFromProto3);

console.log(bikeFromProto1.company); // log property
console.log(bikeFromProto1.count);
console.log(bikeFromProto1.getAvailability); // log method
console.log(bikeFromProto1.getAvailability()); // log returned value of the method
