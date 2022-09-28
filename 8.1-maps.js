// 1. Create 3 separate objects that their key is called name and their value is a string. Store them in separate variables.
// 2. Create a new Map object that sets each object as a key and assign an id number as the value.
// 3. Iterate over the Map object with the for..of loop. - log the name and id

let obj = {
  name: "one",
};

let obj2 = {
  name: "two",
};

let obj3 = {
  name: "three",
};

let myMap = new Map([
  [obj.name, 1],
  [obj2.name, 2],
  [obj3.name, 3],
]);
// console.log(obj);

for (val of myMap) {
  console.log(val);
}
