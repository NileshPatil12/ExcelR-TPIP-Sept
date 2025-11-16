const promise = new Promise((resolve, reject) => {
    let success = true;
    success ? resolve("Done") : reject("Error");
});
promise.then(console.log).catch(console.error);