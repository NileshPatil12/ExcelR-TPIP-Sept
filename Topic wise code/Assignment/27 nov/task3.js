let counter = 10;

const timerId = setInterval(() => {
    console.log(counter);
    counter--;
    if (counter < 0) {
        clearInterval(timerId);
        console.log("Countdown complete!");
    }
}, 1000); 
