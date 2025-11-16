const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the number "));

// sum of n natural numbers
// let i=1;
// let sum=0;
// while(i<=num){
//     sum=sum+(i++);
// }
// console.log("Sum of first "+num+" natural number is "+sum);

//Task 2
// let rev= 0;
// while(num>0){
//     let Last=num%10;
//     rev=(rev*10)+Last;
//     num=Math.floor(num/10);
// }
// console.log("\n"+rev+"\n");

//Task3
// let i=2;
// while(num%i!=0 && i<num/2){
//     i++;
// }
// if(i>=num/2){
//     console.log(num+" is a Prime number");
// }
// else{
//     console.log(num+" is not a Prime Number");
// }