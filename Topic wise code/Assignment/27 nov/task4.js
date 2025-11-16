function processData(input, callback) {
    console.log(`Processing input: ${input}`);
    callback(input * 2);
}

function displayResult(result) {
    console.log(`Result: ${result}`);
}

processData(5, displayResult);
