// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

function compare(arr1, arr2) {
  let res = false;
  for (i of arr1) {
    for (j of arr2) {
      if (j == i) {
        res = true;
      }
    }
  }
  return res;
}

const food = ["Noodle", "Pasta", "Ice-crem", "Meat", "Cucumber", "Olves"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

console.log(compare(food, food1));
