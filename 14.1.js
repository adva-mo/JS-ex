// Write the following functions using the reduce built-in function.
const ARR = [6, 7, 8, 9, 10];

// 1. max

const maxNum = ARR.reduce((max, current) => Math.max(max, current));

// 2. the sum of even numbers

const sumOfEven = ARR.reduce((sum, current) => {
  if (current % 2 == 0) {
    return sum + current;
  } else {
    return sum;
  }
}, 0);

// 3. average

const average = ARR.reduce((total, current) => total + current) / ARR.length;
