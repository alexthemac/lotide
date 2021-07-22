//Checks if the actual and expected arguements are equal.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💸💸💸Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = function(obj, callback) {
  for (let item in obj) {
    if ((callback(obj[item]) === true)) {
      return item;
    }
  }
  return undefined;
};

// TEST CODE
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

let obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let obj2 = {
  "This": { points: -1 },
  "is":   { points: 3 },
  "a":      { points: 100 },
  "test":   { points: -55 },
};

let callback1 = x => x.stars === 2;
let callback2 = x => x.points === -55;

assertEqual(findKey(obj1, callback1), "noma"); // => Passed
assertEqual(findKey(obj1, callback2), undefined); // => Passed
assertEqual(findKey(obj2, callback1), "noma"); // => Failed
assertEqual(findKey(obj2, callback2), "test"); // => Passed
