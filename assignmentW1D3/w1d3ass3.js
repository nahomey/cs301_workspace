let prompt = require("prompt-sync")();

// Q .1

// let weather = +prompt("enter the weather condition");
// if (weather == "hot") {
//     console.log("wear sandals");
// } else if (weather == "rain") {
//     console.log("wear galoshes")
// } else if (weather == "snow") {
//     console.log("wear boots")
// } else {
//     console.log("wear sneakers");
// }


// Q .2

// let name = prompt("enter student name: ");
// let credit = prompt("enter number of credits: ");
// if (completedcredits > 0 && completedcredits < 30) {
//     console.log("Freshman");
// } else if (completedcredits >= 30 && completedcredits < 60) {
//     console.log("sophomore");
// } else if (completedcredits <= 60 && completedcredits < 90) {
//     console.log("Junior")
// } else {
//     console.log("Senior");
// }

// Q .3
// let cost = +prompt("Enter cost of the house: ");

// if (cost < 50000) {
//     console.log(0.5 * cost);
// } else if (cost < 100000) {
//     console.log(1000 + 0.1 * (cost - 50000));
// } else if (cost < 200000) {
//     console.log(2000 + 0.15 * (cost - 100000));
// } else {
//     console.log(5000 + 0.1 * (cost - 200000));
// }


// Q .4

// let status = +prompt("enter the status of the person: ");
// let overdueBooks = +prompt("Enter the number of books overdue");

// if (status === "student") {
//     if (overdueBooks === 0) {
//         console.log(6);
//     } else if (overdueBooks < 3) {
//         console.log(4);
//     } else {
//         console.log(2);
//     }
// } else if (status === "faculty") {
//     if (overdueBooks === 0) {
//         console.log(12);
//     } else if (overdueBooks < 3) {
//         console.log(10);
//     } else {
//         console.log(8);
//     }
// } else {
//     if (overdueBooks === 0) {
//         console.log(4);
//     } else if (overdueBooks < 3) {
//         console.log(3);
//     } else {
//         console.log(2);
//     }
// }



// Q .5

// let age = +prompt('Enter age ');
// let season = prompt('Enter season ');

// if (age <= 5) {
//     if (season == 'summer' || season == 'fall') {
//         console.log('child must go to bed ' + '8:30Pm')
//     } else {
//         console.log('child must go to bed ' + '8:00Pm')
//     }
// } else if (age >= 6 || Age <= 12) {
//     if (season == 'summer') {
//         console.log('child must go to bed ' + '9:30Pm')
//     } else {
//         console.log('child must go to bed ' + '8:30Pm')
//     }
// } else {
//     if (season == 'summer') {
//         console.log('child must go to bed ' + '10:30Pm')
//     } else {
//         console.log('child must go to bed ' + '9:30Pm')
//     }
// }
var foo = 0;
switch (foo) {
    case -1:
        console.log('negative 1');
        break;
    case 0:
        console.log(0);
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}