"use strict";
/**
 * 
 * @param {number} input any number;
 * @param {number} input any number;
 * @return {number};
 */
function computeHcf(num1, num) {
    let HCF;
    for (let i = 1; i <= num1; i++) {
        if (num % i === 0 && num % i === 0) {
            HCF = i;
        }
    }
    return HCF;
}
console.log(computeHcf(6, 12));
/**
 * 
 * @param {number} input any number;
 * @param {number} input any number;
 * @return {number};
 */
// function decleration
let compute = function(num1, num) {
    let HCF;
    for (let i = 1; i <= num; i++) {
        if (num1 % i === 0 && num % i === 0) {
            HCF = i;
        }
    }
    return HCF;
}
console.log(compute(6, 12));