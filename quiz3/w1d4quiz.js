// let x;
// if (x) {
//     let y = 5
// };
// console.log(y);

// let x;
// if (!x) {
//     let y = 5;
// }
// console.log(y);


// letx = leapYear
// if (x) {

// }


// exec slide 9(w1d4)

// let i = 1;
// while (i <= 20) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let x = evennumber;
// let x =
//     for (x = 1; x <= 20; x++) {
//         console.log(x);
//     }



// for (let i = 0; i < 10; i++) {
//     // if true, skip the remaining part of the body
//     if (i % 2 == 0) continue;
//     alert(i); // 1, then 3, 5, 7, 9

let prompt = require("prompt-sync")();
let row = "";

for (let i = 1; i <= 5; i++) {
    //console.log(row);

    for (let j = 1; j <= 5; j++) {
        row += i; //row =row+i;
    }
    row += "\n"
}
console.log(row);

console.log("==================================")

let row1 = "";

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {
        row1 += j;
    }
    row1 += "\n"
}
console.log(row1);


// let prompt = require("prompt-sync")();
// let number = +prompt("enter a positive number");


// let prompt = require("prompt-sync")();
// let number = +prompt("please enter a number ");
// let total = 1;
// for (let i = number; number > 0; i--) {
//     total = total * i;
// }
// console.log(total);