const prompt = require("prompt-sync")();
let i=n=parseInt(prompt('Enter Start')) ;
let a=0;

while(n>0){
    n--
    a=a+n;
}
console.log(`Sum of ${i} Natural number is ${a}`);