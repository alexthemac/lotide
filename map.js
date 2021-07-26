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

//const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);

const words2 = ['alex', 'is', 'the', 'best'];
const callback = word => word[0];

//Tests
// assertArraysEqual(map(['alex', 'is', 'the', 'best'], word => word[0]),['a', 'i', 't', 'b']);
// assertArraysEqual(map(words2, word => word[0]),['a', 'i', 't', 'b']);
// assertArraysEqual(map(words2, callback),['a', 'i', 't', 'b']);

