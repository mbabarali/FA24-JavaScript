/**
==================================
 Functions parameters and arguments
==================================
 Passing argument to function
 ---------------------------------
 Destructuring arguments
==================================
*/

console.log("============= Destructuring ==================");
console.log("==============================================");
//  [Destructuring] Unpacking properties from object argument

// Without object destructuring
function printDetails(info) {
  console.log("Name :", info.username);
  console.log("id :", info.id);
}

// With object destructuring
function printDetailsDestruct({ username, id }) {
  console.log("Name :", username);
  console.log("id :", id);
}

userDetails = {
  username: "Ali",
  id: 50,
  profession: "Engineer",
  email: "abc@123.xyz",
};

printDetails(userDetails);
printDetailsDestruct(userDetails);

// printDetails(); // [ERROR] TypeError: Cannot read properties of undefined (reading 'username')
// printDetailsDestruct(); // [ERROR] TypeError: Cannot destructure property 'username' of 'undefined' as it is undefined.

userDetails = {
  // username: "Ali",
  // id: 50,
  profession: "Engineer",
  email: "abc@123.xyz",
};

printDetails(userDetails); // Name : undefined, id : undefined
printDetailsDestruct(userDetails); // Name : undefined, id : undefined

// printDetails(); // [ERROR] TypeError: Cannot read properties of undefined (reading 'username')
// printDetailsDestruct(); // [ERROR] TypeError: Cannot destructure property 'username' of 'undefined' as it is undefined.

console.log("-------------------------------------");
// Without object destructuring
function printDetailsDefault(info = {}) {
  console.log("Name :", info.username);
  console.log("id :", info.id);
}

// With object destructuring
function printDetailsDestructDefault({ username, id } = {}) {
  console.log("Name :", username);
  console.log("id :", id);
}

userDetails = {
  // username: "Ali",
  // id: 50,
  profession: "Engineer",
  email: "abc@123.xyz",
};

printDetailsDefault(userDetails); // Name : undefined, id : undefined
printDetailsDestructDefault(userDetails); // Name : undefined, id : undefined

printDetailsDefault(); // Name : undefined, id : undefined
printDetailsDestructDefault(); // Name : undefined, id : undefined

console.log("-------------------------------------");
// With object destructuring and renaming the variables for local use
function printDetailsDestructRenaming({ username: name, id: identity }) {
  console.log("Name :", name);
  console.log("id :", identity);
}

userDetails2 = {
  username: "Aslam",
  id: 132,
  profession: "Doctor",
  email: "xyz@123.bcd",
};

printDetailsDestructRenaming(userDetails2);

console.log("-------------------------------------");
// Setting default values while destructuring and renaming the variables for local use
function printDetailsDestructRenamingDefault({
  username: name = "AKBAR",
  id: identity = "9999",
} = {}) {
  console.log("Name :", name);
  console.log("id :", identity);
}

userDetails3 = {
  // username: "Aslam",
  // id: 132,
  profession: "Doctor",
  email: "xyz@123.bcd",
};

printDetailsDestructRenamingDefault(userDetails3);

console.log("-------------------------------------");
// Setting default values while destructuring and renaming the variables for local use
// Multilevel objects
function printDetailsDestructRenamingDefaultMulti(
  {
    username: name = "AKBAR",
    id: identity = 9999,
    details: {
      passingYear: passout = 2000,
      specialization: field = "SKIN",
    } = {}, // Without "= {}", error occurs if "passingYear" or "specialization" property is not present in the "details" object
  } = {} // Without "= {}", error occurs if "username", "id" or "details" property is not present in the object passed in argument
) {
  console.log("Name :", name);
  console.log("id :", identity);
  console.log("passing year :", passout);
  console.log("specialization :", field);
}

userDetailsMulti = {
  // username: "Aslam",
  // id: 132,
  profession: "Doctor",
  email: "xyz@123.bcd",
  details: {
    passingYear: "2020",
    specialization: "ENT",
  },
};

printDetailsDestructRenamingDefaultMulti(); // No error with "= {}" default object assignment in "printDetailsDestructRenamingDefaultMulti" function paramenter list

printDetailsDestructRenamingDefaultMulti(userDetailsMulti);

console.log("-------------------------------------");
// Setting default values while destructuring and renaming the variables for local use
// Multilevel objects
//  ****** Example 2 ******
function printDetailsDestructRenamingDefaultMultiEx2({
  username: name = "AKBAR",
  id: identity = 9999,
  details: { passingYear: passout = 2000, specialization: field = "SKIN" } = {},

  moredetails: {
    finalQualificationYear: qualYear = 2000,
    finalSpecialization: qualField = "HEART",
    //}, // [ReferenceERROR] ReferenceError occurs if "finalQualificationYear" or "finalSpecialization" property is not present in "moredetails" object
  } = {}, // No Error occurs if "finalQualificationYear" or "finalSpecialization" property is not present in "moredetails" object. Default for "moredetails" is empty object
} = {}) {
  console.log("Name :", name);
  console.log("id :", identity);
  console.log("passing year :", passout);
  console.log("specialization :", field);
  console.log("final Qualification Year :", qualYear);
  console.log("final Specialization :", qualField);
}

userDetailsMultiEx2 = {
  // username: "Aslam",
  // id: 132,
  profession: "Doctor",
  email: "xyz@123.bcd",
  details: {
    passingYear: "2020",
    specialization: "ENT",
  },
  moredetails: {
    finalQualificationYear: 2019,
    // finalSpecialization: "Medicine",
  },
};

printDetailsDestructRenamingDefaultMultiEx2(); // No error with "= {}" default object assignment in "printDetailsDestructRenamingDefaultMultiEx2" function paramenter list

printDetailsDestructRenamingDefaultMultiEx2(userDetailsMultiEx2);

console.log("==============================================");
// Array destructuring

let arr = [1, 2, 3, "onion", 158, "potato", "abc", 123];

printArr(arr);

function printArr([a, b, , , , d, ...others]) {
  console.log(a, b, d, others);
}
