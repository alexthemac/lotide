//Compares two arrays. Returns true if match, false if not match.
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

//Console logs whether two arrays are equal.
let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💸💸💸Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//Keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    if (callback(item) === false) {
      newArray.push(item);
    } else if (callback(item) === true) {
      return newArray;
    }
  }
};

module.exports = takeUntil;

//Test Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); //Passed
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); //Passed
assertArraysEqual(results1, [ 100, 2, 5, 7, 2 ]); //Failed (intentional)
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to']); //Failed (intentional)

