function binaryToDecimal(binary) {
    let decimal = 0;
    let binaryStr = binary.toString(); 
    for (let i = 0; i < binaryStr.length; i++) {
        decimal += parseInt(binaryStr[i]) * Math.pow(2, binaryStr.length - 1 - i);
    }
    return decimal;
}

console.log(binaryToDecimal(1011)); // Example: Binary 1011 => Decimal 11
