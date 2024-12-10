function globalThis() {
    console.log(this); // In browsers: window
}
globalThis();

const obj = {
    name: "Nilesh",
    showThis: function () {
        console.log(this); // Logs obj
    }
};
obj.showThis();