const prompt = require("prompt-sync")();
let s=start=parseInt(prompt('Enter Start')) ;
let end=parseInt(prompt('Enter End'));
let sum=0;

while(start!==end){
    sum=sum+start;
    start++;
}
console.log(`Sum of ${s} to ${end} = ${sum}`);