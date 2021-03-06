"use strict";
// Q .1
/**
 * 
 * @param {number} firstArray is a number;
 * @param {number} secondArray is a number;
 * @return {boolean} true if equal esle false
 */
function isArrayEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) return false;

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[1] !== secondArray[i]) {
            return false;
        }
    }
}
// Q2
/**
 * 
 * @param{​​​​​​​​array}​​​​​​​​arr enter the type of array;
 * @returns{​​​​​​​​number}​​​​​​​​ result of addition of first and last elements of the array ;
 */
function addends(arr) {​​​​​​​​
    let first = arr.shift();
    let end = arr.pop();
    let sum = first + end;
    return sum;
}​​​​​​​​
console.log(addends([1, 2, 4, 6]));
// Q3
/**
 * 
 * @param {​​​​​​​​array}​​​​​​​​arr enter any array;
 * @return {​​​​​​​​number}​​​​​​​​ return the middle number;
 * 
 */
function getMiddle(arr) {​​​​​​​​
    let middle;
    if (arr.length % 2 == 0) {​​​​​​​​
        middle = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    }​​​​​​​​
    else {​​​​​​​​
        letmee = Math.floor(arr.length / 2);
        middle = arr[mee];

    }​​​​​​​​

    return middle;
}​​​​​​​​
console.log(getMiddle([1, 2, 3, 4]));
console.log(getMiddle([1, 2, 3, 4, 5]));
// Q4
/**
 * 
 * @param {​​​​​​​​array}​​​​​​​​arr enter any array; 
 * @return {​​​​​​​​array}​​​​​​​​ returns an array;
 */
function rotateLeft(arr) {​​​​​​​​
    for (leti = 1; i <= num; i++) {​​​​​​​​
        arr.push(arr.shift);
    }
    return arr;
}​​​​​​​​
// Q5
/**
 * 
 * @param{​​​​​​​​array}​​​​​​​​arr enter the array;
 * @param{​​​​​​​​number}​​​​​​​​num enter the number of shifting;
 * @returns{​​​​​​​​array}​​​​​​​​;
 */
function rotateRight(arr, num) {​​​​​​​​

    for (let i = 1; i <= num; i++) {​​​​​​​​

        arr.unshift(arr.pop);
    }​​​​​​​​
    return arr;
}​​​​​​​​
// Q6.
/**
 * 
 * @param {array} array enter the type of array
 * @param {number} number enter number
 * @return {array} array 
 */

function rotateNRight(arr, num) {

    for (let i = 1; i <= num; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotateNRight([1, 2, 3, 4], 2));


// Q7.
/**
 * 
 * @param {array} arr1 enter the type of array
 * @return {boolean} true if balanced else false
 */

function checkBalance(arr1) {
    let newArray = [];
    if (arr1.length % 2 !== 0) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === "{" || arr1[i] === "[" || arr1[i] === "(") {
            newArray.push(arr1[i])
        } else if (newArray[newArray.length - 1] === "{" && arr1[i] === "}") {
            newArray.pop()
        } else if (newArray[newArray.length - 1] === "[" && arr1[i] === "]") {
            newArray.pop()
        } else if (newArray[newArray.length - 1] === "(" && arr1[i] === ")") {
            newArray.pop()
        }
    }
    if (newArray.length === 0) {
        return true;
    }
    return false;
}
let exp = [")", "(", ")", "[", "{", "}", "]"]
console.log(checkBalance(exp))

// Q8.
/**
 * 
 * @param {array} arr1 first array 
 * @param {array} arr2 second array
 * @return {array} last result
 */
function merge(arr1, arr2) {
    for (let i = 0; i <= arr1.length; i++) {

        let xy1 = arr1.shift();
        arr2.push(xy1);

    }
    let lastItem = arr1[0];
    arr2.push(lastItem);
    return arr2;
}
console.log(merge([4, 5, 6], [1, 2, 3]));
// Q9.
/**
 * 
 * @param {array} array enter the type of array
 * @return {array} array enter the type of array
 */
function transform(arr) {
    arr = ["Quick", "Brown", "Fox"];
    let transformed = (arr.reverse().join("_"));
    return transformed;
}
console.log(transform());
// Q10.
/**
 * 
 * @param {array} array enter type of value
 * @param {number} value 
 * @return {number} number
 */
function enhancedIncludes(arr, val) {
    let resu = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            resu[0] = true
            resu.push(i)
        }

    }
    if (resu.length === 0) {
        resu = [false, -1, -1]
    }
    if (resu.length === 2) {
        resu.push(-1)
    }
    return resu;
}
console.log(enhancedIncludes([1, 2, 3, 4], 2))