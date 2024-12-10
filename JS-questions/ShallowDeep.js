const obj1 = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj1 };
const deepCopy = JSON.parse(JSON.stringify(obj1));
shallowCopy.b.c = 3;
console.log(obj1.b.c); // 3 (shallow copy affects original)
console.log(deepCopy.b.c); // 2 (deep copy unaffected)
