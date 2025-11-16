async function fetchDataAsync() {
    try {
        const data = await new Promise((resolve) => resolve("Async Data"));
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchDataAsync();