const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head(["a",1,2,3]), "a");
assertEqual(head([0,1,2,3]), 3);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), "Hello");