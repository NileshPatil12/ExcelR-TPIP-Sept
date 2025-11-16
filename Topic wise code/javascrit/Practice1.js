const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the number "))

num%10 ==0 ? console.log("Divisible ",num*num ):console.log("not divisible");

// Start 
// Input num from the prompt 
// condition 
//     if num is divible by 10 
//         then output divible and square of num 
//     else not divisible
// End 