//Checks if the actual and expected arguements are equal.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💸💸💸Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Returns key of value passed to function in object passed to function. Returns undefined if key is not present.
const findKeyByValue = function(objects, val) {
  let keyReturn;
  for (let item in objects) {
    if (val === objects[item]) {
      keyReturn = item;
      return keyReturn;
    }
  }
  return keyReturn;
};

//Test Cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); //Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");//Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "Brooklyn Nine-Nine"); //Fail
assertEqual(findKeyByValue(bestTVShowsByGenre, undefined), "Brooklyn Nine-Nine"); //Fail