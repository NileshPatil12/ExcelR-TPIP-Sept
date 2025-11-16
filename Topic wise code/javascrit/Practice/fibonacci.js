const prompt = require("prompt-sync")();

let x=prompt("Enter fibonacci series Count ");
let a=[0,1];
for (let i = 2; i < x; i++) {
    a.push(a[i - 1] + a[i - 2]);
}
console.log(a);