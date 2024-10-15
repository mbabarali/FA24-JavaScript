/**
==================================
 Factory Functions
==================================
 Object Abstraction (Hiding Details)
----------------------------------
- Function scope
- Closure
- Abstraction (Private and Public Identifiers)
==================================
*/

console.log("==============================================");
// Global variable and top-level functions
let counterValue;

function setCounter(startValue) {
  counterValue = startValue;
}

function getCounter() {
  return counterValue;
}

function increment() {
  counterValue++;
}

function decrement() {
  counterValue--;
}

function incrementBy(value) {
  counterValue += value;
}

function decrementBy(value) {
  counterValue -= value;
}

setCounter(50);
incrementBy(10);
increment();
decrementBy(15);
decrement();
console.log(getCounter());
counterValue = 8564; // Global Access
console.log(getCounter());

console.log("==============================================");
// PRIVATE variable with nested functions (i.e. benefiting from closure)
function createCounter(initialValue) {
  let counterValue = initialValue;

  // [WARNING] Avoid creating methods directly. Insteadm use prototype object to avoid duplication.

  function setCounter(setValue) {
    counterValue = setValue;
  }

  function getCounter() {
    return counterValue;
  }

  function increment() {
    counterValue++;
  }

  function decrement() {
    counterValue--;
  }

  function incrementBy(value) {
    counterValue += value;
  }

  function decrementBy(value) {
    counterValue -= value;
  }

  return {
    setCounter,
    getCounter,
    increment,
    decrement,
    incrementBy,
    decrementBy,
  };
}

const counterOne = createCounter(1000);
counterOne.setCounter(50);
counterOne.incrementBy(10);
counterOne.increment();
counterOne.decrementBy(15);
counterOne.decrement();
console.log(counterOne.getCounter());
counterValue = 8564; // Some other global variable
console.log(counterOne.getCounter());

console.log("-------------------------------------");
const counterTwo = createCounter(2000);
const counterThree = createCounter(3000);

console.log(counterTwo.getCounter());
console.log(counterThree.getCounter());
