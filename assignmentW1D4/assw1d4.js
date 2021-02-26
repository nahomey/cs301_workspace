// Q .1

let prompt = require("prompt-sync")();
let num = prompt("enter your number");

for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
        console.log("false")
    } else {
        console.log(num > 1);
    }
}



// Q.2


let prompt = require("prompt-sync")();
let number = +prompt("please enter a number ");
let total = 1;
for (let i = number; number > 0; i--) {
    total = total * i;
}
console.log(total);

// Q.3
let guess = prompt("Enter your pin number form 1 to 9 ");
const pin = "0000";
if (pin === guess) {
    console.log("correct, welcom back")
} else {
    console.log("incorrect, try again ")
    guess = prompt("please the enter  pin again");
    if (pin === guess) {
        console.log("correct, welcom back")
    } else {
        console.log("incorrect, try again ")
        guess = prompt("Enter the enter your pin number");
        if (pin === guess) {
            console.log("correct, welcom back")
        } else {
            console.log("sorry but You have been locked out")
        }
    }

}
// Q.4
// Q.5

//Q.6


let prompt = require("prompt-sync")();
let row = "";

for (let i = 1; i <= 5; i++) {


    for (let j = 1; j <= 5; j++) {
        row += i;
    }
    row += "\n"
}
console.log(row);

console.log("=====")

let row1 = "";

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {
        row1 += j;
    }
    row1 += "\n"
}
console.log(row1);