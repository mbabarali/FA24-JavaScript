/**
==================================
 Singleton Object
==================================
 Singleton Object
----------------------------------
==================================
*/

console.log("==============================================");

var Foo = (function () {
  "use strict";
  var instance;

  function Singleton() {
    if (instance) {
      return instance; // Return available singleton
    }

    instance = this; //  Initialize singleton
  }

  // Instance accessor
  Singleton.getInstance = function () {
    return instance || new Singleton();
  };
  return Singleton;
})();

let instance = Foo.getInstance();

console.log("-------------------------------------");
