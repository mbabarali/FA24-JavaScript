/**
==================================
 Classes
==================================
  Class constructor
  Instance properties/fields
  Public properties/fields
----------------------------------
Class elements classificaiton
- Elements w.r.t. Kind:       Getter, setter, method, or field
- Elements w.r.t. Location:   Static or instance
- Elements w.r.t. Visibility: Public or private
 ---------------------------------
- Elements (Special): Constructor and static initialization blocks
----------------------------------
* [STRONG Convention] Capital letter start (and PascalCase notation) in class name
==================================
*/

console.log("==============================================");
// Instance property creation/initializaiton INSIDE 'constructor'
class Person {
  constructor() {
    // [Property creation] Properties which are dependent on constructor are defined as in constructor (ctor)
    this.firstName = "Babar";
    this.lastName = "Ali";
  }
}

let p1 = new Person();
console.log(p1, " --> Type: ", typeof p1);

console.log("==============================================");
// Instance property creation/initializaiton OUTSIDE 'constructor' [Filed Declarations]
class Transport {
  // Properties which are NOT dependent on constructor or with default value are defined as "class fields"
  // Class fields are similar to object properties hence unable to use 'const', 'let' or 'var' to declare them.
  // [Filed Declarations for Property creation]
  transportType = "Passenger"; // [Default initializaiton] "Passenger"
  vehiclePowerClass; // [Default initializaiton] undefined

  // const transportType = "Passenger"; // [SyntaxError] Unexpected identifier use 'const', 'let' or 'var'
  // const vehiclePowerClass; // [SyntaxError] Unexpected identifier use 'const', 'let' or 'var'

  constructor() {}
}

let t1 = new Transport();
console.log(t1, " --> Type: ", typeof t1);

console.log("==============================================");
// Instance property creation/initializaiton INSIDE constructor (using ctor args)
class PublicTransport {
  // [Property creation] OUTSIDE ctor
  transportType = "Passenger"; // [Default initializaiton] "Passenger"
  vehiclePowerClass; // [Default initializaiton] undefined {undefined, however indicates the existence of the interesting field}

  constructor(tt, vpc, rn) {
    // Properties which are dependent on constructor
    // [Initialization]s in ctor
    this.transportType = tt;
    this.vehiclePowerClass = vpc;

    // [Property creation] in ctor
    this.routeNumber = rn;
  }
}

let pt1 = new PublicTransport("Cargo", "Electric", 10);
console.log(pt1, " --> Type: ", typeof pt1);

let pt2 = new PublicTransport("Passenger", "Electric", "Route 5");
console.log(pt2, " --> Type: ", typeof pt2);

console.log("==============================================");
// Computed field names [Computed Field Declarations]
const CATEGORY = "House";

class AssetEnity {
  // Computed field names evaluated once at class definition time
  [`${CATEGORY}Type`] = "Passenger";
  [`${CATEGORY}PowerClass`];

  constructor() {}
}

let ae1 = new AssetEnity();
console.log(ae1, " --> Type: ", typeof ae1);
