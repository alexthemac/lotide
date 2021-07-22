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

//console logs whether the arrays match or not
let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💸💸💸Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//Return a subset of a given array, removing unwanted elements.
let without = function(source, itemsToRemove) {
  let newArray = [];
  let addToArraySwitch = 0; //Double check this again...mroe cases
    
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        addToArraySwitch = 1;
      } else if (addToArraySwitch === 0 && j === itemsToRemove.length - 1) {
        newArray.push(source[i]);
      }
    }
    addToArraySwitch = 0;
  }
  return newArray;
};
      
//Test cases
assertArraysEqual(without([1, 2, 3], [1]),[2,3]);// => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without([], [1, 2, "3"]), []); // => []
assertArraysEqual(without([2, 2, 3], [3, 2, 0]), []); // => []

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

