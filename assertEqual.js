// FUNCTION IMPLEMENTATION
//lotide version of console.assert
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("💸💸💸Assertion Passed: " + actual + " " + "===" + " " + expected);
  } else {
    console.log("❌❌❌Assertion Failed: " + actual + " " + "!==" + " " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("text", "text");
assertEqual("text1", "text");
assertEqual(42, 42);
assertEqual(0, -1);