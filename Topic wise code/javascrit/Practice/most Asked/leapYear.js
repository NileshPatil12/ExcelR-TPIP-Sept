const prompt=require("prompt-sync")();

let year=parseInt(prompt("Enter the year"));

if( (year%4==0) || (year%100==0) || (year%400==0)){
    console.log("It is a leap year");
}
else{
    console.log("Is not a leap Year");
}