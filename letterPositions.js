//Compares two arrays. Returns match if identical.
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

//return all the indices (zero-based positions) in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if ((sentence[i] >= "A" && sentence[i] <= "Z") || (sentence[i] >= "a" && sentence[i] <= "z")) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

//Test Cases
assertArraysEqual(letterPositions("hello"), { h: [0], e: [1], l: [2,3], o: [4] }); // => should PASS
assertArraysEqual(letterPositions("hello").e, [1]); // => should PASS