// Answer the questions below and use the map or the
// forEach method :

// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.

function doubleValues(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

const ARR = [1, 2, 3, 4, 5];

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

function onlyEvenValues(arr) {
  let res = [];
  arr.forEach(function (num) {
    if (num % 2 == 0) {
      res.push(num);
    }
  });
  return res;
}

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.

function showFirstAndLast(arr) {
  let res = [];
  arr.forEach(function (e, i) {
    if (i == 0 || i == arr.length - 1) {
      res.push(e + "");
    }
  });
  return res;
}

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object 
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
let stringg = "uuuiiidgfbuui";

function vowelCount(str) {
  let myarr = str.split("");
  console.log(myarr);
  let res = {};
  myarr.forEach((letter) => {
    if (letter == "u" || letter == "i") {
      if (res[letter]) {
        res[letter] += 1;
      } else {
        res[letter] = 1;
      }
    }
  });

  return res;
}
// console.log(vowelCount(stringg));

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

function capitalize(str) {
  let res = str.split("");

  res = res.map(function (l) {
    return l.toUpperCase();
  });

  return res.join("");
}

// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.

function shiftLetters(str) {
  const alphabet = {
    a: "z",
    b: "a",
    c: "b",
    d: "c",
    e: "d",
    f: "e",
    g: "f",
    h: "g",
    i: "h",
    j: "i",
    k: "j",
    l: "k",
    m: "l",
    n: "m",
    o: "n",
    p: "o",
    q: "p",
    r: "q",
    s: "r",
    t: "s",
    u: "t",
    v: "u",
    w: "v",
    x: "w",
    y: "x",
    z: "y",
  };
  str = str.split("");
  let res = [];
  str.forEach(function (e, i) {
    res.push(alphabet[str[i]]);
  });
  return res.join("");
}

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

function swapCase(str) {
  str = str.split("");
  let res = [];
  str.forEach(function (letter, i) {
    if (i == 0 || i % 2 == 0) {
      // console.log(letter);
      res.push(letter.toUpperCase());
    } else {
      res.push(letter);
    }
  });
  return res.join("");
}
stringg = "uuuiiidgfbuui";
console.log(swapCase(stringg));
