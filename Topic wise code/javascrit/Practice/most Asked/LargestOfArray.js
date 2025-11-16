let a=[10,11,23,33,4,5];
let m=a[0]
for (let i = 1; i < a.length; i++) {
    if(m<a[i]){
        m=a[i];
    }
}
console.log(`Largest Of the Array ${m}`);