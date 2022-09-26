// 1. Fill an array with 100 of the same object using the array fill
// method.

let filledArr = Array(100).fill(100, 0);

// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.

let ranged = Array.from(Array(101).keys());
console.log(ranged);

// 3. Convert only values of an object into one array.
let arrayFromValues = Object.values(ranged);

// 4. Convert an array into one object.

let my_arr = [1,2,3,4,5];
let myStirng =my_arr.join(' ');

// 5. Find out if an array is an array.
console.log(Array.isArray(my_arr));


// 6. Copy an array.
let copiedArray = [];
for (val of my_arr){
    copiedArray.push(val);
}
console.log(my_arr);

// 7. Create a copy of an array that won’t affect the
// original array if modified.
let oldArray = [1, 2, 3, 4, 5];

let newArray2 = oldArray.slice();

// 8. Create a copy of an array that will affect the original
// array if modified.

var arr1 = ['a','b','c'];
var arr2 = arr1;
