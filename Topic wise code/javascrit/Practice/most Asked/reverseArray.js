let a=[1,2,3,4,5];
function reverse(a){
    let i=0;
    let j=5;
    while(i!==j){
        temp=a[i];
        a[i]=a[j];
        a[j]=temp;
        i++;
        j--;
    }
}
reverse(a);
console.log(a);