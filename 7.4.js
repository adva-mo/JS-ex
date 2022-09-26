
// using splice modify the array to be this:
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple",
// "Mango"];


const fruits = ["Banana", "Orange", "Apple",
"Mango"];

let x=fruits.splice(2,0, "Lemon", "Kiwi");
console.log(fruits);
