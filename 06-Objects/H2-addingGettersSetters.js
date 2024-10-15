/**
==================================
 Objects
==================================
 Object Property Accessors
----------------------------------
 - Getters
 - Setters
----------------------------------
ES5 - 2009
----------------------------------
TODO
==================================
*/

// Adding property to an empty object
console.log("==============================================");
let building = {};
console.log(building);

Object.defineProperty(building, "area_sqm", {
  value: 500, //ADDING A DATA PROPERTY
  // writable: false, // [false]
  // enumerable: false, // [false]
  // configurable: false, // [false]
});

console.log(building.area_sqm);
console.log(building);

building.area_sqm = 1000;
console.log(building);

// Adding property to an object
console.log("==============================================");
// let building = {};

Object.defineProperty(building, "street", {
  value: "Jinnah street", // ADDING A DATA PROPERTY
  writable: true, // [false]
});

console.log(building);
console.log(building.street);

building.street = "abc street";
console.log(building);

building.street = 123;
console.log(building);

// Adding getters/ setters to an object
console.log("==============================================");
let motor = {
  make: 1999, // Property
  count: 2, // Property
  capacity: "", // Property
};

Object.defineProperty(motor, "engineCapacity", {
  // ADDING A ACCESSOR PROPERTY
  // Getter Function
  get: function () {
    return this.capacity;
  },

  // ADDING A ACCESSOR PROPERTY
  // Setter Function
  set: function (cap) {
    if (typeof cap != "string")
      console.log("Please enter string value.", typeof cap);
    else this.capacity = cap;
  },
});

console.log(motor);

console.log(motor.make); // Getting property
motor.make = "BMW"; // Setting property
console.log(motor); // See in Browser

motor.engineCapacity = "3500 cc"; // Setting property
console.log(motor); // See in Browser

// [NOTE] Getters, setters and all other properties of the object
// are publically accessible

// Deleting property from object
console.log("==============================================");

// delete motor.capacity;
// console.log(motor.capacity); // undefined // Getting property
// console.log(motor);

delete motor.engineCapacity;
console.log(motor.engineCapacity); // undefined // Getting property
console.log(motor);

/*
// Adding property to an individual object
console.log("==============================================");
function BestBike(company, make, count) {
  let _make = make; // Local Variable
  let _count = count; // Local Variable
  let _capacity = "300cc"; // Local Variable

  let getAvailability = // Local Variable
    function () {
      return {
        model: _make,
        availabiliy: _count,
      };
    };

  this.company = company; // Property
  this.showDetail = // Property/ Method
    function () {
      let obj = getAvailability();
      console.log(obj);
    };
}

let myBike1 = new BestBike("Honda", 2023, 1);
let myBike2 = new BestBike("Yamaha", 2020, 2);

console.log(myBike1);

console.log(myBike1.company); // Getting property
myBike1.company = "BMW"; // Setting property

console.log(myBike1);

console.log("-------------------------------------");
console.log(myBike1._capacity); // undefined
console.log(myBike2._capacity); // undefined

// Defining new property on an existig object
console.log("-------------------------------------");
Object.defineProperty(myBike1, "engineCapacity", {
  // Getter Function
  get: function () {
    return this._capacity;
  },
  // Setter Function
  set: function (cap) {
    if (typeof cap != "string")
      console.log("Please enter string value.", typeof cap);
    else this._capacity = cap;
  },
});

console.log(myBike1._capacity); // undefined
console.log(myBike1.engineCapacity); //  undefined --- Getting property

// myBike1.engineCapacity = 100; // [ERROR] Setting property --- if check failed!
myBike1.engineCapacity = "100cc"; // Setting property

console.log(myBike1._capacity); // Getting property
console.log(myBike1.engineCapacity); // Getting property
console.log(myBike1);

console.log(myBike1._capacity); // Getting property
myBike1._capacity = 50; // Setting property --- if check not present
console.log(myBike1);

console.log("-------------------------------------");
console.log(myBike2._capacity); // Getting property
console.log(myBike2.engineCapacity); // Getting property

myBike2.engineCapacity = 100; // Creating property --- if check not present

console.log(myBike2);

console.log(myBike2._capacity); // undefined --- Getting property
console.log(myBike2.engineCapacity); // Getting property

// Adding property to objects' constructor function
console.log("==============================================");
function SaferBike(company, make, count, engineCapacity) {
  let _make = make; // Local Variable
  let _count = count; // Local Variable
  let _capacity = engineCapacity; // Local Variable

  let getAvailability = // Local Variable
    function () {
      return {
        model: _make,
        availabiliy: _count,
      };
    };

  this.company = company; // Property
  this.showDetail = // Property/ Method
    function () {
      let obj = getAvailability();
      console.log(obj);
    };

  Object.defineProperty(this, "engineCapacity", {
    get: function () {
      return _capacity;
    },
    set: function (cap) {
      if (cap instanceof String)
        console.log("Please enter string value.", typeof cap);
      _capacity = cap;
    },
  });
}

let mySaferBike = new SaferBike("Honda", 2023, 1, "200cc");

console.log(mySaferBike);

console.log(mySaferBike._capacity); // undefined
console.log(mySaferBike.company); // Getting property
console.log(mySaferBike.engineCapacity); // Getting property

mySaferBike.company = "BMW"; // Setting property
mySaferBike.engineCapacity = "250cc"; // Setting property

console.log(mySaferBike._capacity); // undefined
console.log(mySaferBike.company); // Getting property
console.log(mySaferBike.engineCapacity); // Getting property

console.log(mySaferBike);

// Deleting property from object
console.log("==============================================");

delete mySaferBike.engineCapacity;
console.log(mySaferBike._capacity); // undefined
console.log(mySaferBike.engineCapacity); // Getting property
console.log(mySaferBike);


*/
