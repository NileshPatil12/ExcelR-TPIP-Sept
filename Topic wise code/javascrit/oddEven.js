const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the number "))
  if(num%2==0){
      console.log("Even number");
  }
  else{
      console.log("Odd number");
  }

  if(num>0){
    if(num>100){
      console.log("Number is greater than 100");
    }
    else{
      console.log("Number is smaller than 100");
    }
  }
  else{
    console.log("Number is negative ");
  }
  // num % 2 == 0
  // ? console.log("Even number")
  // : console.log("Odd number");


// start 
// input number from the prompt
// condition 
//     if num is divisble by 2 then even 
//     else Odd 
// End
