let a=13;

let flag=true;
for(let i=a/2;i>1;i--){
    console.log(i);
    if(a%i==0){
        flag=false;
    }
}
console.log((flag)?("Prime"):("Not Prime"));