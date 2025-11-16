async function fetchingData() {
    console.log("Fetching data in 2 seconds");
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000); 
    });
    console.log(data);
}

fetchingData();