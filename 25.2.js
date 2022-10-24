// Create an object with a name property. The object should
// also have a method that prints its name and another method
// that prints its name after a second with the help of setTimeOut.
// in this exercise, you are not allowed to use arrow functions.
let myObj = {
  name: "adva",
  printName() {
    console.log(this.name);
  },
  TimeR() {
    setTimeout(myObj.printName.bind(myObj), 1000);
  },
};
myObj.TimeR();
