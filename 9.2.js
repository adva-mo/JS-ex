// Write a function that will receive an array of strings and will
// return a new array containing all the lengths of all the strings in
// the array it got as a parameter.
// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

// 1. Recreate the challenge from exercise 6.3-
// looping_with_arrays, but this time using a while loop.
// 2. Reflect on what solution you like better for this task: the for
// loop or the while loop?

let myArray = ["boo", "doooo", "hoo", "ro"];

function func(arr) {
  let i = 0;
  let res = [];
  while (i < myArray.length) {
    res.push(myArray[i].length);
    i++;
  }
  return res;
}

console.log(func(myArray));
