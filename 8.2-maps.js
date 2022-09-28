let myObj = {};
const maxCount = 1000000;

// console.time("test");

for (let i = 0; i < maxCount; i++) {
  myObj.i = i;
}
// console.timeEnd("test");

let myMap = new Map();

// console.time("test2");

for (let i = 0; i < maxCount; i++) {
  myMap.i = i;
}
// console.timeEnd("test2");

console.time("test3");
myObj[1000001] = "last";
console.timeEnd("test3");

console.time("test4");
myMap.set(234254646, "54");
console.timeEnd("test4");
