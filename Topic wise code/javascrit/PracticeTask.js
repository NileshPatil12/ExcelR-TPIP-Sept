const contact=["Abhishek","Nilesh","Akshata"];
contact.push("Adi");
contact.push("anjali")
contact.push("Priya")

console.log(contact);

const input = require("prompt-sync")();
const s = input("Enter the name to search ")

if(contact.includes(s)){
    console.log(`Name found \n`);
}
else{
    console.log(`Name not found \n`);
}