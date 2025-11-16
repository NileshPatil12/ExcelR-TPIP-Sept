const prompt=require("prompt-sync")();

let a=parseInt(prompt("Enter the Number"));
let flag=true;
for (let i = 2; i < a/2; i++) {
    if(a%i==0){
        flag=false;
    }
}
if(flag){
    console.log(`${a} is a prime number`);
}
else{
    console.log(`${a} is not a prime number`);
}