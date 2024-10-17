/**
==================================
 Classes
==================================
  Static Properties
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
  // Static property
  static transportType = "Passenger";

  vehiclePowerClass;

  [`${NUMBER_TYPE}Number`] = "ABC 1234";

  #ownerName;
  #ownerContactNumber;

  constructor(tt, vpc, rn, owner, contact) {
    // this.transportType = tt; // It will create Instance Property

    // PublicTransport.transportType = tt; // Static Property
    this.constructor.transportType = tt; // Static Property

    this.vehiclePowerClass = vpc;
    this.routeNumber = rn;

    this.#ownerName = owner;
    this.#ownerContactNumber = contact;

    console.log(this.#ownerName);
    console.log(this.#ownerContactNumber);
  }
}

let pt1 = new PublicTransport("Cargo", "Electric", 10, "Ali", "321300345");
console.log(pt1, " --> Type: ", typeof pt1);
console.log(pt1.registrationNumber);

console.log(PublicTransport.transportType); // Static Property
