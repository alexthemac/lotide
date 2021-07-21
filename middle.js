//Checks if arrays match, returns true if they do and false if they don't
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

//Console logs whether the arrays match or not
let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💸💸💸Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//Returns the middle of an array as a new array.
let middle = function(array) {
  let arrMiddle = [];
  if (array.length <= 2) {
    arrMiddle = [];
  } else if (array.length % 2 !== 0) {
    arrMiddle.push(array[(array.length - 1) / 2]);
  } else if (array.length % 2 === 0) {
    arrMiddle.push(array[(array.length / 2) - 1]);
    arrMiddle.push(array[(array.length / 2)]);
  }
  return arrMiddle;
};

//TEST CODE
assertArraysEqual(middle([1,2]),[]);// => PASSED
assertArraysEqual(middle([]),[]);// => PASSED
assertArraysEqual(middle([1,2,3,4,5]),[3]);// => PASSED
assertArraysEqual(middle([1,2,3,4,5,6,7,8,10,4,3,1,2]),[7]);// => PASSED
assertArraysEqual(middle(["hello","test1","test2"]),["test1"]);// => PASSED

assertArraysEqual(middle([1,2]),[1]);// => FAILED
assertArraysEqual(middle([]),[4]);// => FAILED
assertArraysEqual(middle([1,2,3,4,5]),[2]);// => FAILED
assertArraysEqual(middle([1,2,3,4,5,6,7,8,10,4,3,1,2]),[5]);// => FAILED
assertArraysEqual(middle(["hello","test1","test2"]),["hello"]);// => FAILED