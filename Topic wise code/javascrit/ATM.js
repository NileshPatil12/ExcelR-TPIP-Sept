const prompt = require('prompt-sync')();
class ATM {
    constructor(balance,pin) {
        this.pin = pin;
        this.balance = balance;
    }
    withdraw() {
        console.log("Enter PIN to withdraw ");
        let pin = prompt();
        if(pin === this.pin) {
            let amount = prompt("Enter amount to withdraw ");
            if(amount <= this.balance) {
                this.balance = this.balance - amount;
                console.log("Amount withdrawn \ncurrent balance is " + this.balance);
            }
            else {
                console.log("Insufficient balance");
            }
        }
        else {
            console.log("Incorrect PIN");
        }
    }
    
     deposit() {
        console.log("Enter PIN to deposit ");
        let pin = prompt();
        if(pin === this.pin) {
            console.log("Enter amount to deposit ");
            let amount = prompt();
            if(amount >=1) {
                this.balance = Number(this.balance) + Number(amount);
                console.log("Amount deposited \ncurrent balance is " + this.balance);
            }
        }
        else {
            console.log("Incorrect PIN");
        }
    }
    checkBalance() {
        console.log("Enter PIN to check balance ");
        let pin = prompt();
        if(pin === this.pin) {
            console.log("Balance is " + this.balance);
        }
        else {
            console.log("Incorrect PIN ");
        }
    }
    changePin() {
        if(this.pin===prompt("Enter old PIN ")) {
            this.pin = prompt("Enter new PIN ");
        }
        else {
            console.log("Incorrect PIN");
        }
    }
}
const intialBalance = prompt("Enter initial balance of ATM ");
const pin = prompt("Enter intitial PIN of ATM ");
let atm = new ATM(intialBalance,pin);
atm.withdraw();   
atm.deposit();
atm.checkBalance();
atm.changePin();
