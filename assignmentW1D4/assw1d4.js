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

let fibNum = prompt("enter the number")
let i = 0;
let j = 1;
let count = 1;
let result = "";
result = result + i + "," + j + ",";
while (count < fibNum) {
    let nextNum = i + j;
    result = result + nextNum + ",";
    i = j
    j = nextNum;
    count++;
}
console.log(result);

// Q5
let value = prompt("Enter a digit here")
let sum = 0
for (let j = 0; j < value.length; j++) {
    sum += parseInt(value[j])
}
console.log(sum)






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