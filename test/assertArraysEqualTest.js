const assertArraysEqual = require("../assertArraysEqual");

//Tests
assertArraysEqual(["1",2,3],["1",2,3]);
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual(["1",2,3],[2,3]);