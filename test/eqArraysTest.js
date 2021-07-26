const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

//TEST CASE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4, 5, 6], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5, 6]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4, 5, 6], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5, 6]), false); // => should PASS
assertEqual(eqArrays([], [1, 2]), true); // => should FAIL
assertEqual(eqArrays(["hello"], [1]), true); // => should FAIL
assertEqual(eqArrays(["hello"], ["hello"]), true); // => should PASS
