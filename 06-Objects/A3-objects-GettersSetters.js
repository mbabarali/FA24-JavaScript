/**
==================================
 Objects
==================================
 Property Accessors
----------------------------------
- Getters
- Setters
----------------------------------
Since ES5 - 2009
==================================
*/

console.log("==============================================");
// Objects with [DATA] properties

const motor = {
  // [Data] Properties
  make: 1999,
  count: 2,
  capacity: "",
};

console.log("==============================================");
// Deleting [Data] property from object

delete motor.capacity;

console.log(motor.capacity); // undefined
console.log(motor);

console.log("==============================================");
// Objects with [ACCESSOR] properties (getters and setters)

const bike = {
  // [Data] Properties
  _make: 1999, // [Renaming] Name starts with "_", therefore avoids conflict and overwriting
  _count: 2, // [Renaming] Name starts with "_", therefore avoids conflict and overwriting
  capacity: "",
  availability: true,

  // [ACCESSOR] Methods for "_make" variable
  get make() {
    return this._make;
  },

  set make(m) {
    if (typeof m === "number") this._make = m;
    else console.log("Number value accepted only, instead of", typeof m);
  },

  // [ACCESSOR] Methods for "_count" variable
  get count() {
    return this._count;
  },

  set count(c) {
    if (typeof c === "number") this._count = c;
    else console.log("Number value accepted only, instead of", typeof c);

    if (this._count <= 0) availability = false; // Sets 'availability' accordingly
  },
};

bike.make = 2012; // Using Setter
bike.count = 20; // Using Setter
console.log(bike.make); // Using Getter
console.log(bike.count); // Using Getter

console.log(bike); // make: [Getter/Setter] // See in Browser Console

console.log("==============================================");
// Deleting getter and setter from an object

delete bike.make;

console.log(bike.make); // undefined // Getting property
console.log(bike);
