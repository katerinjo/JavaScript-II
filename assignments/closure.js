// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function bugFill(hero) {
  let totalBugs = 0
  function moreBugs(n) {
    totalBugs += n;
    console.log("Oh no! Skitter the supervillain filled", hero, "with", n, "bugs!")
    console.log(hero, "now contains", totalBugs, "bugs!")
  }
  return moreBugs
}

const alexandria = bugFill("Alexandria")
const defiant = bugFill("Defiant")

alexandria(1)
alexandria(20)
alexandria(300)
defiant(0)

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
