const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// 1. Implement the following getCandy function:
// The function should return the candy element with
// the specified id.

function getCandy(candyStore, id) {
  return candyStore.candies.find((candy) => candy.id === id);
}
// console.log(getCandy(candyStore, "5hd7y"));

// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified id.

function getPrice(candyStore, id) {
  let res = candyStore.candies.find((candy) => candy.id === id);
  return res.price;
}
// console.log(getCandy(candyStore, "5hd7y"));

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a default amount of 1. The function will not return anything.

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
}

// addCandy(candyStore, "jhg", "marsh", 5779);
// console.log(candyStore.candies[2]);

// 4.  Implement the following buy function: The function
//  should add the candy price to the cashRegister, and decrease the
//  amount property of the relevant candy.

function buy(candyStore, id) {
  const CANDY = candyStore.candies.find((candy) => candy.id === id);
  CANDY.amount += 1;
  candyStore.cashRegister += CANDY.price;
}
