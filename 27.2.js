// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

const arr = ["cat", "dog", "sheep", 1];

function validateArr(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every((i) => typeof i === "string")) {
      resolve();
    } else {
      reject();
    }
  })
    .then(() => {
      console.log(sortWords(makeAllCaps(arr)));
    })
    .catch(() => {
      console.log("ERROR: the array contains not only strings values");
    });
}

function makeAllCaps(arr) {
  return arr.map((word) => {
    let newWord = word[0].toUpperCase() + word.slice(1);
    return newWord;
  });
}
function sortWords(arr) {
  return arr.sort();
}

validateArr(arr);
