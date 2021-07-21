//Checks if the actual and expected arguements are equal.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💸💸💸Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Counts the number of letters in a string. Skips anything that isn't an uppercase or lowercase letter
const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if ((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

//Test Code
countLetters("lighthouse in the house");
countLetters("      aAaa    AAA");

assertEqual(countLetters("      aAaa    AAA")['a'], 3); // PASS
assertEqual(countLetters("      aAaa    AAA")['A'], 3); // FAIL