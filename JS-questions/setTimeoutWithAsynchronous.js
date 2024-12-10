console.log("Start");
setTimeout(() => console.log("Delayed"), 1000);
console.log("End");

// 8. Avoid Closure Issues in Loops
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // Correct output: 0, 1, 2
}
