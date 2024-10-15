/**
==================================
 Factory Functions
==================================
 Prototyping
----------------------------------
* Factory Function [Overcome Drawback: Avoid duplication of Property(ies)/Method(s) by pototyping]
==================================
*/

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
 - You will see 'getAvailability' method in each of the follwoing object i.e., duplicate 'getAvailability' method in each object.
 - Duplicate due to independent objects which lacks inheritance (aka prototype chain)
 - In Browser Console, you can see [[proptotype]]
 */
console.log("bikeFromProto1 = ", bikeFromProto1); // log object  // See in Browser Console
console.log("bikeFromProto2 = ", bikeFromProto2);
console.log("bikeFromProto3 = ", bikeFromProto3);

console.log(bikeFromProto1.company); // log property
console.log(bikeFromProto1.count);
console.log(bikeFromProto1.getAvailability); // log method
console.log(bikeFromProto1.getAvailability()); // log returned value of the method
