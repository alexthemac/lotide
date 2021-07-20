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

let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💸💸💸Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//Tests
assertArraysEqual(["1",2,3],["1",2,3]);
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual(["1",2,3],[2,3]);