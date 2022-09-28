// Write a function that has one argument, a positive integer.
// Let's call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right-hand side if empty!

function steps(N) {
  let counter = 1;
  while (counter <= N) {
    let i = 0;
    while (i < counter) {
      process.stdout.write("*");
      i++;
    }
    console.log("\n");
    counter++;
  }
}

steps(4);
