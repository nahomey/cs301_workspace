"use strict";
/**
 * 
 * @param {number} num is the value of a number
 * @param {number} num1 is the value of a number
 * @return {number};
 */
function computeLcm(num, num1) {
    let hcf;
    let lcm;
    let producat = num * num1;
    lcm = producat / hcf(num, num1);
    return lcm;
}
console.log(computeLcm(3, 4));