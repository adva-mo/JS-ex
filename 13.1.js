const numbers = [1, -5, 666, 2, 400, 11];

// 1. Sort the array of numbers from descending to ascending
// order.

const sorted = numbers.sort();
// console.log(sorted);
// 2. Sort the array of numbers from ascending to descending
// order.
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);
