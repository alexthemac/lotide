//Compares two arrays. Returns true if match, false if not match.
// let eqArrays = function(arr1, arr2) {
//   let match = true;
//   if (arr1.length !== arr2.length) {
//     match = false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       match = false;
//     }
//   }
//   return match;
// };

const eqArrays = require("./eqArrays");

//Console logs whether two arrays are equal.
let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💸💸💸Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;