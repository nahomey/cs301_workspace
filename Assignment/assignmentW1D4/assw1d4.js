const prompt = require("prompt-sync")();
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



// // Q.2


let prompt = require("prompt-sync")();
let number = +prompt("please enter a number ");
let total = 1;
for (let i = number; number > 0; i--) {
    total = total * i;
}
console.log(total);

// // Q.3
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
// // Q.4

// let fibNum = prompt("enter the number")
// let i = 0;
// let j = 1;
// let count = 1;
// let result = "";
// result = result + i + "," + j + ",";
// while (count < fibNum) {
//     let nextNum = i + j;
//     result = result + nextNum + ",";
//     i = j
//     j = nextNum;
//     count++;
// }
// console.log(result);

// // Q5
// let value = prompt("Enter a digit here")
// let sum = 0
// for (let j = 0; j < value.length; j++) {
//     sum += parseInt(value[j])
// }
// console.log(sum)






// //Q.6


// let prompt = require("prompt-sync")();
// let row = "";

// for (let i = 1; i <= 5; i++) {


//     for (let j = 1; j <= 5; j++) {
//         row += i;
//     }
//     row += "\n"
// }
// console.log(row);

// console.log("=====")

// let row1 = "";

// for (let i = 1; i <= 5; i++) {

//     for (let j = 1; j <= 5; j++) {
//         row1 += j;
//     }
//     row1 += "\n"
// }
// console.log(row1);
// for (let i = 1; i <= 10; i++) {
//     let row = "";
//     for (let j = 1; j <= 10; j++) {
//         row += i * j + "\t";
//     }
//     console.log(row);
// }
// for (let i = 5; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= 5; j--) {
//         row += i;
//     }
//     console.log(row);
// }function secondSmallest(a, b, c){


// if (a < b && a < c) {
//     if (b < c) {
//         return b;
//     } else {
//         return c;
//     }
// } else if (b < a && b < c) {
//     if (a < c) {
//         return a;
//     } else {
//         return c;
//     }
// } else {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// }
// console.log(secondSmallest(1, 2, 3))

// funtion secondSmallest(a, b, c) {
//     if (a < b && )

// }


// let x = 1;
// y = 7;
// let message = "Hi";
// if (x < 2) {
//     if (y > 7) {
//         message = "Bye";
//     } else {
//         message = "Hola";

//         console.log(message)
//     }
// } else {
//     // message = "Hello";

//     // console.log(message);
// }
// console.log(message);



// What will be the output ?
// let x = 1,
//     y = 2;
// let message = "Hi";
// if (x < 2) {
//     if (y > 7) {
//         message = "Bye";
//     } else {
//         message = "Hola";
//     }
//     console.log(message);
// }
// message = "Hello";
// console.log(message);// 



//Hint: break statement only breaks from the current loop
// for (let i = 1; i <= 10; i++) {
//     for (let j = i; j <= 10; j++) {
//         if (j <= 7) {
//             continue;
//         }
//         if (i * j >= 16) {
//             break; // this break statement only breaks from the
//             // inner loop
//         }
//         console.log(j);
//     }
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }


// let prompt = require("prompt-sync")();



// console.log("bey" > "biby") //undefined
// console.log("2" > "1") //false
// console.log("01" == 1) //true
// console.log("01" === 1) //false
// let x;
// let y = "5";
// console.log(x + y);

// const prompt = require("prompt-sync")();
// let user = +prompt("Enter a number to be tested odd or even: ");
// if (user % 2 === 0) {
//     console.log("even");
// } else if (user % 2 === 1) {
//     console.log("odd")
// } else {

//     console.log("non")
// }


// for (let i = 100; i >= 0; i -= 5) {

//     console.log(i);
// }
// const prompt = require("prompt-sync")();
// let user = +prompt("enter mid term value");
// let user = +prompt("enter") 


// let i = 5;

// while (i > 5) {
//     alert("hello")
// }

//count downusing function

// function countdDOown() {
//     for (let i = 100; i >= 0; i - = 4) {
//         console.log(i)
//     }
// }
// countdDOown();

// function products(num1, num2) {
//     let result = num1 * num2
//     return result;
// }
// console.log(products);

// function reverseDigits(num) {
//     let reverse = 0;
//     while (num != 0) {
//         let lastDigits = num % 10;
//         reverse = reverse * 10 + lastDigits
//         num = Math.floor(num / 10);
//     }
//     return reverse;
// }
// console.log(reverseDigits(123));
// What will be the output of running following JavaScript code ?
// "use strict";
// let x = 5;
// let y = 2;
// let a = 7;
// let b = 3;

// function foo(a, b) {
//     let x = a + b;
//     y = a - b;
//     console.log(a, b, x, y);
// }
// console.log(a, b, x, y)
// foo(a, b);
// console.log(a, b, x, y)


// const prompt = require("prompt-sync")();
// let kmmeter = +prompt("enter a number");

// function nahom(kmmeter) {
//     return kmmeter * 1000
// }
// console.log(nahom(kmmeter))


// let length = +prompt("enter the length value: ");
// let width = +prompt("enter the width value:");

// function area(length, width) {
//     return length * width;
// }
// // console.log(area(length, width));


// function perimeter(length, width) {
//     return 2 * length + 2 * width;
// }
// // console.log(perimeter(length, width));



// function areaAndPerimeter() {

//     console.log("area of the room is: " + area(length, width));
//     console.log("perimeter of the room is: " + perimeter(length, width));
// }
// areaAndPerimeter();



//factorialof 6
// let product = 1;
// let n = 6;
// for (let i = 1; i <= n; i++) {
//     product *= i
//     console.log(product);
// }


//perfect number
// let sum = 0;
// let n = 49;
// for (let i = 1; i < n; i++) { //loop
//     if (n % i === 0) { //1,2,3
//         sum += i
//     }
// }
// //- 2nd--------------------------------
// if (sum === n) {
//     console.log("Nahom, it's perfect Number")
// } else { console.log("It's not!") }

// //isPrime
let n = 5
let isPrime = true;
for (let i = 2; i < n; i++) {
    if (n % i !== 0) {
        isPrime;

    } else {
        isPrime = false;
    }
}
console.log(isPrime)



//convert day to hrs

// let conversion = +prompt("enter the value of the day");
// let day = hrs * 24;
// let hrs;
// console.log(hrs * 24);

// function testPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i !== 0) {
//             return true;
//         }
//         return false;

//     }
// }
// let n = +prompt("enter number: ")
// console.log(testPrime(n))




// What will be the output of running following JavaScript code ?
// "use strict";
// let x = 5;
// let y = 2;
// let a = 7;
// let b = 3;

// function foo(a, b) {
//     let x = a + b;
//     lety = a - b;
//     console.log(a, b, x, y);
// }
// foo(4, 4);
// console.log(a, b, x, y)
//     // foo(4, 4);
// console.log(a, b, x, y)// Hint: break statement only breaks from the current loop
// for (let i = 1; i <= 10; i++) {
//     for (let j = i; j <= 10; j++) {
//         if (j > 7) {
//             continue;
//         }
//         if (i * j >= 16) {
//             break; // this break statement only breaks from the
//             // inner loop
//         }
//         console.log(j);
//     }
//     if (i === 3) {
//         break;
//     }
//     console.log(i);

// }


// reverseDigits

// function reverseDigits(num) {
//     let reversed = 0;
//     while (num !== 0) {
//         let lastDigits = num % 10;
//         reversed = reversed * 10 + lastDigits;
//         num = Math.floor(num / 10)
//     }
//     return reversed
// }
// console.log(reverseDigits(3,4,5))




//even,odd

// let user = +prompt("enter a number to be tested even or odd");

// for (let i = 1; i < user; i++) {
//     if (i % 2 === 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }

// =====================================
// }
// let i = 1;
// while (i < 10) {
//     console.log(i);
// }


// function secondLargest(a, b, c) {
//     if (a > b && b > c) {
//         return b;
//     }
//     if (b > a && a > c) {
//         return a;
//     } else if (a > c && c > b) {
//         return c;
//     }
//     console.log(secondLargest(9, 8, 78));
// }


// function elias(a, b, c) {
//     let second = a > b && a > c ? b > c ? b : c : b > a && b > c ? a > c ? a : c : a > b ? a : b;

//     console.log(second); 
// }
// elias(4, 908, 600);


// function secondLarger(x, y, z, p) {
//     let secndlargeNumber;
//     if (x < y && x > z && x > p || x > y && x < z && x > p || x > y && x > z && x < p) {
//         secndlargeNumber = x;
//     } else if (y < x && y > z && y > p || y > x && y < z && y > p || y > x && y > z && y < p) {
//         secndlargeNumber = y;
//     } else if (z < x && z > y && z > p || z > x && z < y && z > p || z > x && z > y && z < p) {
//         secndlargeNumber = z;
//     } else {
//         secndlargeNumber = p;
//     }
//     return secndlargeNumber;
// }


// function smallest(a, b, c) {
//     if (a < b && a < c) {
//         return a
//     } else if (b < a && b < c) {
//         return b
//     } else {
//         return c
//     }
// }
// console.log(smallest(8, 9, 2))

// for (e: all elements) {
//     if (e > largest) {
//         second = largest;
//         largest = e;
//     } else if (e > second) {
//         second = e;
//     }
// }

// function secondLargestNumber(a, b, c, d) {
//     let secondLargestNumber;
//     if (a < b && a > c && a > d || a > b && a < c && a > d || a > b && a > c && a < d) {
//         secondLargest = a;
//     } else
//     if (b < a && b > c && b > d || b > a && b > c && b < d || b > a && b < c && b > d) {
//         secondLargestNumber = b;
//     } else if (c < a && c > b && c > d || c > a && c > b && c < d || c < d && c > a && c > b) {
//         secondLargestNumber = c;
//     } else {
//         secondLargestNumber = d;
//     }
//     return secondLargestNumber;
// }
// console.log(secondLargestNumber(2, 3, 4, 5));

//factorial   6!  n(n-1)

// let product = 1;
// let n = 6;
// for (let i = 6; i >= 1; i--) {
//     product = product * i;
//     console.log(product);

// }

//reverseDigits 4,5,6

// function reverseDigits(num) {
//     let reverse = ""
//     while (num !== 0) {
//         let lastDigit = num % 10
//         reverse = reverse * 10 + lastDigit;
//         num = Math.floor(num / 10)
//     }
//     return reverse;
// }
// console.log(reverseDigits(4, 5, 6));

// function reverseDigits(num) {
//     let reversed = 0;
//     while (num !== 0) {
//         let lastDigits = num % 10;
//         reversed = reversed * 10 + lastDigits;
//         num = Math.floor(num / 10)
//     }
//     return reversed;
// }
// console.log(reverseDigits(3, 4, 5))
// letsum = 0;
// let num;
// for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//         sum += i
//     }
// }

// function isPerfect(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             // sum += i sum=sum+i
//         }
//     }
//     return sum;


// let n = 5;
// let isPrime = true;

// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         isPrime = false;
//         break;
//     }
// }

// console.log(isPrime);