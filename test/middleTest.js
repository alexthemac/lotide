const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle");

//TEST CODE
assertArraysEqual(middle([1,2]),[]);// => PASSED
assertArraysEqual(middle([]),[]);// => PASSED
assertArraysEqual(middle([1,2,3,4,5]),[3]);// => PASSED
assertArraysEqual(middle([1,2,3,4,5,6,7,8,10,4,3,1,2]),[7]);// => PASSED
assertArraysEqual(middle(["hello","test1","test2"]),["test1"]);// => PASSED

assertArraysEqual(middle([1,2]),[1]);// => FAILED
assertArraysEqual(middle([]),[4]);// => FAILED
assertArraysEqual(middle([1,2,3,4,5]),[2]);// => FAILED
assertArraysEqual(middle([1,2,3,4,5,6,7,8,10,4,3,1,2]),[5]);// => FAILED
assertArraysEqual(middle(["hello","test1","test2"]),["hello"]);// => FAILED