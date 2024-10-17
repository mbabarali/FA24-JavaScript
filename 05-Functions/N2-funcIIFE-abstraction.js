/**
==================================
 IIFE (Functions)
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

function createStateCounter(initialState) {
  let counterState = initialState; // counterState is private

  // [WARNING] Avoid creating methods directly. Instead use prototype object to avoid duplication.

  function setCounter(setState) {
    counterState = setState;
  }

  function getCounter() {
    return counterState;
  }

  function increment() {
    counterState++;
  }

  function decrement() {
    counterState--;
  }

  function incrementBy(value) {
    counterState += value;
  }

  function decrementBy(value) {
    counterState -= value;
  }

  /*
  function performAction(action) {
    switch (action.type) {
      case "set":
        setCounter(action.payload);
        break;
      case "get":
        return getCounter();
      case "increment":
        if (payload) incrementBy(action.payload);
        else increment();
        break;
      case "decrement":
        if (payload) decrementBy(action.payload);
        else decrement();
        break;
      default:
        break;
    }
  }
  */

  function performAction(action) {
    switch (action.type) {
      case "set":
        setCounter(action.payload);
        break;
      case "get":
        return getCounter();
      // break;
      case "increment":
        increment();
        break;
      case "decrement":
        decrement();
        break;
      case "add":
        incrementBy(action.payload);
        break;
      case "subtract":
        decrementBy(action.payload);
        break;
      default:
        break;
    }
  }

  //   return {
  //     setCounter,
  //     getCounter,
  //     increment,
  //     decrement,
  //     incrementBy,
  //     decrementBy,
  //   };

  return performAction;
}

const counterOneActionDispatcher = createStateCounter(1000);
counterOneActionDispatcher({ type: "set", payload: 50 });
counterOneActionDispatcher({ type: "add", payload: 10 });
counterOneActionDispatcher({ type: "increment" });
counterOneActionDispatcher({ type: "subtract", payload: 15 });
counterOneActionDispatcher({ type: "decrement" });
console.log(counterOneActionDispatcher({ type: "get" }));

counterState = 5000; // Some other global variable
console.log(counterOneActionDispatcher({ type: "get" }));

console.log("-------------------------------------");
const counterTwoActionDispatcher = createStateCounter(2000);
const counterThreeActionDispatcher = createStateCounter(3000);

console.log(counterTwoActionDispatcher({ type: "get" }));
console.log(counterThreeActionDispatcher({ type: "get" }));
