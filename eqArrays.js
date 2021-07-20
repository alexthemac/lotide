//Checks if the actual and expected arguements are equal.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💸💸💸Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Compares two arrays.
let eqArrays = function(arr1, arr2) {
  let match = true;
  if (arr1.length !== arr2.length) {
    match = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      match = false;
    }
  }
  return match;
};

//TEST CASE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4, 5, 6], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5, 6]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4, 5, 6], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5, 6]), false); // => should PASS
assertEqual(eqArrays([], [1, 2]), true); // => should FAIL
assertEqual(eqArrays(["hello"], [1]), true); // => should FAIL
assertEqual(eqArrays(["hello"], ["hello"]), true); // => should PASS
