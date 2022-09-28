// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.

function isString(string, func) {
  if (typeof string == "string") {
    func(string);
  }
}

function func(str) {
  console.log(str);
}

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.

function firstWordUpperCase(string, func) {
  string = string.charAt(0).toUpperCase() + string.slice(1);
  func(string);
}

function func1(string) {
  console.log(string.replace(" ", "-"));
}

// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.

function print(string) {
  for (val of string) {
    console.log(val);
  }
}
firstWordUpperCase("hello world", print);

// 4. Create your own function that will receive from one of its
// arguments a callback function.

function isBigger(num, print2) {
  if (num > 10) {
    print2(num);
  } else {
    console.log("smaller");
  }
}

function print2(num) {
  console.log(`${num} is bigger then 10`);
}
isBigger(9, print2);
