function conditionPromise(condition) {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected.");
        }
    });
}

conditionPromise(true)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

conditionPromise(false)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
