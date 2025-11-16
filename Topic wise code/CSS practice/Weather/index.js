const prompt=require("prompt-sync")();
let num=prompt("Enter the variable");
let flag=true;
if(num[0]>=0 && num[0]<=9){
    if(num.length==1 && (num==1 || num==0)){
        console.log("Boolean");
    }else{
        console.log("Number");
    }
}
else if(num=="True" || num=="False" || num==0 || num==1){
    console.log("Boolean");
}
else{
    console.log("String");
}