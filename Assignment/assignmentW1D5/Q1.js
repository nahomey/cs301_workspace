"use strict";
const prompt = require("prompt-sync")();
let num = +prompt("enter a number");
console.log(checkPrime(num));
/**
 * 
 * @param {number} num input any number
 * @return {boolen};
 */
function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}