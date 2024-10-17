/**
==================================
 Classes
==================================
  Private Properties
----------------------------------
Class elements classificaiton
- Elements w.r.t. Kind:       Getter, setter, method, or field
- Elements w.r.t. Location:   Static or instance
- Elements w.r.t. Visibility: Public or private
 ---------------------------------
- Elements (Special): Constructor and static initialization blocks
==================================
*/

console.log("==============================================");
const NUMBER_TYPE = "registration";

class PublicTransport {
  transportType = "Passenger";
  vehiclePowerClass;

  [`${NUMBER_TYPE}Number`] = "ABC 1234";

  // Private class field/property
  #ownerName;
  #ownerContactNumber;

  constructor(tt, vpc, rn, owner, contact) {
    this.transportType = tt;
    this.vehiclePowerClass = vpc;
    this.routeNumber = rn;

    // Dot Notation
    this.#ownerName = owner;
    this.#ownerContactNumber = contact;

    console.log(this.#ownerName);
    console.log(this.#ownerContactNumber);
  }

  // Legacy public method to access private data
  getContactNumber() {
    return this.#ownerContactNumber;
  }

  // Legacy public method to access private data
  setContactNumber(phone) {
    this.#ownerContactNumber = phone;
  }

  // Accessor method to access private data
  get contactNumber() {
    return this.#ownerContactNumber;
  }

  // Accessor method to access private data
  set contactNumber(phone) {
    this.#ownerContactNumber = phone;
  }
}

console.log("-------------------------------------");
let pt1 = new PublicTransport("Cargo", "Electric", 10, "Ali", "321300345");
console.log(pt1, " --> Type: ", typeof pt1);

console.log(pt1.registrationNumber);
// console.log(pt1.#ownerName); // [SyntaxError]: Private field '#ownerName' must be declared in an enclosing class
// console.log("Type: ", typeof pt1.#ownerName); // [SyntaxError]: Private field '#ownerName' must be declared in an enclosing class

console.log(pt1.getContactNumber());

pt1.setContactNumber("987654321");
console.log(pt1.getContactNumber());

console.log(pt1.contactNumber);

pt1.contactNumber = "987654321";
console.log(pt1.contactNumber);

console.log("-------------------------------------");
let pt2 = new PublicTransport(
  "Passenger",
  "Electric",
  "Route 5",
  "Ali",
  "321300345"
);
console.log(pt2, " --> Type: ", typeof pt2);

console.log(pt2.registrationNumber);
// console.log(pt2.#ownerName); // [SyntaxError]: Private field '#ownerName' must be declared in an enclosing class
// console.log("Type: ", typeof pt2.#ownerName); // [SyntaxError]: Private field '#ownerName' must be declared in an enclosing class

console.log(pt2.getContactNumber());

pt2.setContactNumber("123456789");
console.log(pt2.getContactNumber());

console.log(pt2.contactNumber);

pt2.contactNumber = "123456789";
console.log(pt2.contactNumber);
