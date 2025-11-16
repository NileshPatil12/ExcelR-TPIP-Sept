// 1) Start
// 2) Input: Ask the user for sign (parse it as an integer).
// 3) Input: Ask the user for login (parse it as an integer).
// 4) Condition Check:
//      If sign is truthy (non-zero), then:
//              Check if login is also truthy:
//                  If true, display "Entered the webpage".
//              Else, display "Not login".
//      Else, display "Not sign in".
// 5) End

const prompt = require("prompt-sync")();
let sign = parseInt(prompt("Enter the signup "));
let login = parseInt(prompt("Enter the Login "));

sign
  ? login
    ? console.log("Entered the webpage")
    : console.log("Not login")
  : console.log("Not sign in");
