/**
==================================
 Constructor Functions
==================================
 Contructor/Prototype Pattern
----------------------------------
==================================
*/

console.log("==============================================");
// Constructor creates and initializes 'Properties' (Unique in each objects)
function Registration(name, financialStatus, scholasticStatus) {
  this.studentID = name;
  this.financialStatus = financialStatus;
  this.scholasticStatus = scholasticStatus;
  this.courseRegistered = [];
}

let student1 = new Registration("Babar", "OK", "GS");
console.log(student1);

console.log("-------------------------------------");
/*
student1.info = () => {
  console.log(
    "Student Name: " +
      this.studentID +
      ", Financial Status: " +
      this.scholasticStatus
  );
};
*/

student1.info = function () {
  console.log(
    "Student Name: " +
      this.studentID +
      ", Financial Status: " +
      this.scholasticStatus
  );
};

student1.info();

console.log("-------------------------------------");
// Constructor.prototype [Registration.prototype] creates and initializes 'Methods' (Shared by all objects)
Registration.prototype.print = function () {
  console.log(
    "Student Name: " +
      this.studentID +
      ", Financial Status: " +
      this.financialStatus +
      ", Scholastic Status: " +
      this.scholasticStatus
  );

  for (course in this.courseRegistered) {
    console.log(
      "Theory Credits = " +
        course.thCrHrs +
        ", Lab Credits = " +
        course.labCrHrs +
        ", Course Name = " +
        course.title
    );
  }
};

console.log("-------------------------------------");
// Constructor.prototype [Registration.prototype] is shared by all objects, even among those objects created earlier
student1.print();

console.log("-------------------------------------");
let student2 = new Registration("Saba", "OK", "GS");
let student3 = new Registration("Aabid", "PENDING", "GS");

// Constructor.prototype [Registration.prototype] is shared by all objects
console.log(student2);
console.log(student3);

console.log("-------------------------------------");
// student2.info(); // TypeError: student2.info is not a function
// student3.info(); // TypeError: student3.info is not a function
