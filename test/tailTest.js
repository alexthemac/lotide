const assertEqual = require('../assertEqual');
const tail = require("../tail");

// TEST CODE

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
//Test Case: Extra test cases
console.log(tail([1])); //should return an empty array
console.log(tail([])); //should return an empty array.