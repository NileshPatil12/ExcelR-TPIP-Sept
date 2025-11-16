const prompt=require("prompt-sync")();
let a=[];
console.log("Enter the Numbers");
for (let i = 0; i < 3; i++) {
    a[i]=parseInt(prompt());
}

if(a[0]>a[1]){
    if(a[0]>a[2]){
        console.log(`${a[0]} is largest`);
    }
    else{
        console.log(`${a[2]} is largest`);
    }
}
else{
    if(a[1]>a[2]){
        console.log(`${a[1]} is largest`);
    }
    else{
        console.log(`${a[2]} is largest`);
    }
}
