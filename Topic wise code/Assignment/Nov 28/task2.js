function check(number) {
    return new Promise((resolve, reject) => {
        if (typeof number !== "number") {
            reject("Input is not a number.");
        } else if (number % 2 === 0) {
            resolve("Even number");
        } else {
            resolve("Odd number");
        }
    });
}

check(4)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

check("nik")
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
