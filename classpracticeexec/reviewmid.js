// let x = 5;

// function display() {
//     let x = 3;
//     let y = 7;
//     console.log(x, y);
// }
// display();
// console.log(x);
// console.log(y);


// let reverseDigitPrime;

// function isReversedPrime(32) {
//     while (n > 0) {
//         let lastDigit = n % 10;
//         reversed = reversed * 10 + lastDigit;
//         n = Math.floor(n / 10);
//     }
//     return reversed;
// }
// console.log(reversedPrime(32));

function reverse(num) {
    let reversedDigits = "";
    while (num > 0) {
        let lastDigits = num % 10;
        reverse += lastDigit;
        num = Math.floor(num / 10);
    }
    return Number(reversedDigits);
}
// console.log(reverse(32));


function isPrime(num) {
    for (let i = 2; i <= num; i++) {
        if (numi === 0) {
            return false;
        }
    }
    return true;
}

function isReversedPrime(num) {
    let reversedNum = reversed(num);
    let result = isPrime(reversedNum);
    return result;
}
let result = isreservedPrime(32); // we can also say console.log// Q.5


// function hcf(num1, num2) {
//     let min = Math.min(num1, num2)
//     let hcf = 1;
//     for (let i = 1; i <= min; i++) {

//         if (num1 % i === 0 && num2 % i === 0) {
//             hcf = i;
//         }
//     }
//     return hcf;

// }
// console.log(hcf(6, 8));


// // expression 

// let x = function(num1, num2) {
//     let min = Math.min(num1, num2)
//     let hcf = 1;
//     for (leti = 1; i <= min; i++) {
//         if (num1 % i === 0 && num2 % i === 0) {
//             hcf = i;
//         }
//     }
//     return hcf;
// }
// console.log(x(6, 8));