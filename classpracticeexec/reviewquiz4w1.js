// for (let i = 1; i < 10; i++) {
//     if (i % 3 === 0) break;
//     console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//     if (i % 3 === 0) continue;
//     console.log(i);
// }

// if (sumOffFactors === input) {
//     console.log(sunOfffactors);
// }

// function oddEven(num) {
//     if (!num) return;
//     if (num % 2 == 0) return "Even";
//     else return "Odd"
// }

// function reverseDigits(n) {
//     let reversed = 0;

// }

// let n = 123;
// let reversed = 0;
// while (n > 0) {
//     let lastDigit = n % 10;
//     reversed = reversed * 10 + lastDigit;
//     n = Math.floor(n / 10);
// }
// console.log(reversed)

// const prompt = require("prompt-sync")();
// let numberOfStudents = prompt("please enter number of students: ");

// let numberOfTeams = prompt('please enter number of teams: ');
// let InitialTeamSize = Math.floor(numberOfStudents / numberOfTeams);
// let teamsWithExtraStudent = etraStudents;
// let teamWithStandardSize = numberOfTeams - teamsWithExtraStudent;

// if (extra === 0) {
//     console.log(`${teamWithStandardSIze} teams of $ {initialTeamSIze}`)
// } else {
//     console.log(`${teamWithExtraStudent} teams of ${initialTeamSize + 1}
//     and $(teamWithStandardSize} teams of ${initialTeamSize})`)
// }

const prompt = require("prompt-sync")();
let num = +prompt("enter a number");
console.log(checkPrime(num));

function checkPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}