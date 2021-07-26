# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alex_the_mac/lotide`

**Require it:**

`const _ = require('@alex_the_mac/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element in an array. 
* `tail(array)`: Returns a newArray containing everything but the first element in the initial array passed to the function.
* `middle(array)`: Returns the middle of an array as a new array
* `assertEqual(actual, expected)`: Checks if the actual and expected arguements are equal. Console.logs if they are equal or not.
* `countLetters(string)`: Counts the number of letters in a string. Skips anything that isn't an uppercase or lowercase letter.
* `findKey(obj, callback)`: Scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `map(array, callback)`: Creates a new array of values by running each element in array through the callback.
* `takeUntil(array, callback)`: Keep collecting items from a provided array until the callback provided returns a truthy value.
* `without(array, itemsToRemove)`: Return a subset of a given array, removing unwanted elements.
