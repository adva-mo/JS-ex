// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)

console.log(this);

// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?
//ANSWER: changed aroww function to regular function

const myObj = {
  name: "Timmy",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
// myObj.greet();

// Question 3:
// In your own words what will this point to and why?

const myFuncDec = function () {
  console.log(this);
};

// Question 4:
// In your own words what will this point to and why?

const myFuncArrow = () => {
  console.log(this);
};
// myFuncArrow();

// Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?

// document.querySelector(".element").addEventListener(() => {
//   console.log(this);
// });
let E = document.querySelector(".element");
E.addEventListener(any, function () {
  console.log(this);
});

document.querySelector(".element").addEventListener(
  any,
  (somefunc = (e) => {
    console.log(this);
  })
);

// somefunc();

let ele = document.querySelector(".element");
ele.addEventListener(any, this.somefunc);
const somefunc = () => {
  console.log(this);
};
// somefunc();

// let elem = document.querySelector(".element");
// elem = {
//   addEventListener() {
//     console.log(this);
//   },
// };
// document.querySelector(".element").addEventListener();
//     (e) => {
//   console.log(this);
// });
