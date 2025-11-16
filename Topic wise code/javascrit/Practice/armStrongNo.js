function isArmstrongNumber(num) {
    let sum = 0;
    let numStr = num.toString();
    let power = numStr.length;

    for (let digit of numStr) {
        sum += Math.pow(parseInt(digit), power);
    }

    return sum === num;
}

console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(123)); // false
