"use strict";
// Q .1
/**
 * 
 * @param {number} firstArray is a number;
 * @param {number} secondArray is a number;
 * @return {number} number;
 */
function isArrayEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) return false;
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[1] !== secondArray[i]) {
            return false;
        }
    }
}
console.log(isArrayEqual([1, 2, 3, 4], [4, 5, 6, 7]));

// Q2
/**
 * 
 * @param{​​​​​​​​array}​​​​​​​​arr1 first array
 * @param{​​​​​​​​array}​​​​​​​​arr2 second array
 * @returns{​​​​​​​​boolean}​​​​​​​​ true if equal else false
 */
functionisArrayEqual(arr1, arr2) {​​​​​​​​
        if (arr1.length !== arr2.length) {​​​​​​​​
            returnfalse;
        }​​​​​​​​
        for (leti = 0; i < arr1.length; i++) {​​​​​​​​
            if (arr1[i] !== arr2[i]) {​​​​​​​​
                returnfalse;
            }​​​​​​​​
        }​​​​​​​​
        returntrue;
    }​​​​​​​​
    // Q3
    /**
     * 
     * @param{​​​​​​​​array}​​​​​​​​arr enter the type of array;
     * @returns{​​​​​​​​number}​​​​​​​​ result of addition of first and last elements of the array 
     */
functionaddends(arr) {​​​​​​​​
    letfirst = arr.shift();
    letend = arr.pop();
    letsum = first + end;
    returnsum;
}​​​​​​​​
Q4
/**
 * 
 * @param{​​​​​​​​array}​​​​​​​​arr enter any array
 * @returns{​​​​​​​​number}​​​​​​​​ return the middle number.
 * 
 */
// Q5
functiongetMiddle(arr) {​​​​​​​​
    letmiddle;
    if (arr.length % 2 == 0) {​​​​​​​​
        middle = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    }​​​​​​​​
    else {​​​​​​​​
        letmee = Math.floor(arr.length / 2);
        middle = arr[mee];

    }​​​​​​​​

    returnmiddle;
}​​​​​​​​
console.log(getMiddle([1, 2, 3, 4]));
console.log(getMiddle([1, 2, 3, 4, 5]));

/**
 * 
 * @param{​​​​​​​​array}​​​​​​​​arr entery any array 
 * @returns{​​​​​​​​array}​​​​​​​​;
 */
functionrotateLeft(arr) {​​​​​​​​
        letcopy = [];
        lettemp = arr.shift();
        copy = arr;
        copy.push(temp);
        returncopy;
    }​​​​​​​​
    /**
     * 
     * @param{​​​​​​​​array}​​​​​​​​arr enter the array
     * @param{​​​​​​​​number}​​​​​​​​num enter the number of shifting
     * @returns{​​​​​​​​array}​​​​​​​​;
     */
functionrotateNRight(arr, num) {​​​​​​​​
    letcopy = [];

    for (leti = 1; i <= num; i++) {​​​​​​​​
        lettemp = arr.pop();
        copy = arr;
        copy.unshift(temp);
    }​​​​​​​​
    returncopy;
}​​​​​​​​

// Q8

/**
 * 
 * @param {array} arr1 first array 
 * @param {array} arr2 second array
 * @returns {array} last result
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