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
  return results;
};

module.exports = countLetters;
