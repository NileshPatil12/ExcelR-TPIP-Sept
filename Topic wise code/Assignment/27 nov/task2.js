let counter = 0;
const intervalId = setInterval(() => {
    counter += 2;
    console.log(`Message logged at ${counter} seconds.`);
    if (counter === 10) {
        clearInterval(intervalId); 
        console.log("Stopped logging after 10 seconds.");
    }
}, 2000);