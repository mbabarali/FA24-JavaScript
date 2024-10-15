/**
 ==================================
 IIFE (Functions)
 ==================================
 - The module pattern
==================================
 */

console.log("==============================================");
const estateOnSale = (lengthArg, widthArg) => {
  let length = lengthArg; // length variable is LOCAL, initialized by external value
  let width = widthArg; // width variable is LOCAL, initialized by external value

  const getInitialArea = () => length * width;
  let remainingArea = getInitialArea();

  const checkLigitmacyOfEstate = () => {
    console.log("Validating...", length, width);

    // validation logic goes here, if any

    console.log("OK!");
  };

  checkLigitmacyOfEstate();

  return {
    sell(areaToSell) {
      if (remainingArea > areaToSell) {
        remainingArea = remainingArea - areaToSell;
        return remainingArea;
      } else return -1;
    },

    getInitialArea() {
      return getInitialArea();
    },

    getRemainingArea() {
      return remainingArea;
    },
  };
};

const estateProcessing = estateOnSale(1000, 2000);

console.log("Initial Area =", estateProcessing.getInitialArea());

console.log(estateProcessing.sell(500));
console.log(estateProcessing.sell(500));
console.log(estateProcessing.sell(500));
console.log(estateProcessing.sell(500));
console.log(estateProcessing.sell(500));

console.log("Remaining Area =", estateProcessing.getRemainingArea());

console.log("==============================================");
const realEstateOnSale = (len, wid) =>
  ((lengthArg, widthArg) => {
    let length = lengthArg; // length variable is LOCAL, initialized by external value
    let width = widthArg; // width variable is LOCAL, initialized by external value

    const getInitialArea = () => length * width;
    let remainingArea = getInitialArea();

    const checkLigitmacyOfRealEstate = () => {
      console.log("Validating...", length, width);

      // validation logic goes here, if any

      console.log("OK!");
    };

    checkLigitmacyOfRealEstate();

    return {
      sell(areaToSell) {
        if (remainingArea > areaToSell) {
          remainingArea = remainingArea - areaToSell;
          return remainingArea;
        } else return -1;
      },

      getInitialArea() {
        return getInitialArea();
      },

      getRemainingArea() {
        return remainingArea;
      },
    };
  })(len, wid);

const realEstateProcessing = realEstateOnSale(1000, 2000);

console.log("Initial Area =", realEstateProcessing.getInitialArea());

console.log(realEstateProcessing.sell(500));
console.log(realEstateProcessing.sell(500));
console.log(realEstateProcessing.sell(500));
console.log(realEstateProcessing.sell(500));
console.log(realEstateProcessing.sell(500));

console.log("Remaining Area =", realEstateProcessing.getRemainingArea());
