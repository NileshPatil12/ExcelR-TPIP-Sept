function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const person = { name: "Nilesh" };
greet.call(person, "Hi");
greet.apply(person, ["Hello"]);
const boundGreet = greet.bind(person, "Hey");
boundGreet();