//lotide version of console.assert
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💸💸💸Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//lotide version of tail
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

// TEST CODE

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(tail([1])); //should return an empty array

console.log(tail([])); //should return an empty array.
