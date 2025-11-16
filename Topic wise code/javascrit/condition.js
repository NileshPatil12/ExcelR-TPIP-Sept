const prompt = require("prompt-sync")();
let num=parseInt(prompt("Enter the number   "));
if(num%5==0 && num%7==0){
    console.log("Hai");
}