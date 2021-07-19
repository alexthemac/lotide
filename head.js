// FUNCTION IMPLEMENTATION
//lotide version of console.assert
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💸💸💸Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//lotide version of head
const head = function(array) {
  let first = array[0];
  return first;
};

// TEST CODE
assertEqual(head(["a",1,2,3]), "a");
assertEqual(head([0,1,2,3]), 3);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), "Hello");