function scopeAndHoisting() {
    console.log(a); // undefined (hoisted)
    // console.log(b); // ReferenceError (temporal dead zone)
    // console.log(c); // ReferenceError (temporal dead zone)
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a, b, c); // 10, 20, 30
}
scopeAndHoisting();