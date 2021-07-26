const countLetters = require("../countLetters");
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns 3 for '      aAaa    AAA'['a']", () => {
    assert.strictEqual(countLetters("      aAaa    AAA")['a'], 3);
  });
});




//Test Code
// countLetters("lighthouse in the house");
// countLetters("      aAaa    AAA");

// assertEqual(countLetters("      aAaa    AAA")['a'], 3); // PASS
// assertEqual(countLetters("      aAaa    AAA")['A'], 3); // FAIL