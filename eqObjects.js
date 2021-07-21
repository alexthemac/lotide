// FUNCTION IMPLEMENTATION
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key1 in object1) {
      for (let key2 in object2) {
        if (key1 === key2) {
          if (Array.isArray(object1[key1]) && Array.isArray(object2[key2])) {
            if (!eqArrays(object1[key1],object2[key2])) {
              return false;
            }
          } else if (object1[key1] !== object2[key2]) {
            return false;
          }
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// //eqObjects(ab, ba);

assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
const abc2 = { a: "2", b: "2", c: "3" };
// //eqObjects(ab, abc);
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(abc2, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false); // => false