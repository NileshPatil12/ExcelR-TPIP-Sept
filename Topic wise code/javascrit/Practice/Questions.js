// 1. Find HCF (GCD)
function findHCF(a, b) {
    let i=1;
    let HCF=i;
    while(i<=a && i<=b){
        if(a%i==0 && b%i==0){
            HCF=i;
        }
        i++;
    }
    return HCF;
}
console.log("HCF of 20 and 240:", findHCF(20, 240));

// 2. Find LCM
function findLCM(a, b) {
    let i=(a>b?a:b);
    while(i%a!==0 || i%b!==0){
        i++;
    }
    return i;
}
console.log("LCM of 12 and 15:", findLCM(12, 15));

// 3. Greatest Common Divisor (Same as HCF)
console.log("GCD of 12 and 15:", findHCF(12, 15));

// 4. Octal to Decimal Conversion
function octalToDecimal(octal) {
    return parseInt(octal, 8);
}
console.log("Decimal of octal 17:", octalToDecimal("17"));

// 5. Hexadecimal to Decimal Conversion
function hexToDecimal(hex) {
    return parseInt(hex, 16);
}
console.log("Decimal of hex 1F:", hexToDecimal("1F"));

// 6. Decimal to Binary Conversion
function decimalToBinary(decimal) {
    return decimal.toString(2);
}
console.log("Binary of 25:", decimalToBinary(25));

// 7. Addition of Two Fractions
function addFractions(n1, d1, n2, d2) {
    let numerator = n1 * d2 + n2 * d1;
    let denominator = d1 * d2;
    let gcd = findHCF(numerator, denominator);
    return `${numerator / gcd}/${denominator / gcd}`;
}
console.log("Sum of 1/2 and 3/4:", addFractions(1, 2, 3, 4));

// 8. Can a Number Be Expressed as the Sum of Two Prime Numbers?
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function canBeSumOfTwoPrimes(number) {
    for (let i = 2; i <= number / 2; i++) {
        if (isPrime(i) && isPrime(number - i)) {
            return `${number} = ${i} + ${number - i}`;
        }
    }
    return `${number} cannot be expressed as a sum of two prime numbers.`;
}
console.log(canBeSumOfTwoPrimes(34));

// 9. Calculate the Area of a Circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}
console.log("Area of circle with radius 5:", calculateCircleArea(5));
