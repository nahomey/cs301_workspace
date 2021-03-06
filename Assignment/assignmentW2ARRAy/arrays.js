"use strict";

/**
 * 
 * @param {array} firstArray first array
 * @param {array} secondArray second array
 * @returns {boolean} true if equal else false;
 */
function isArrayEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[1] !== secondArray[i]) {
            return false;
        }
        return true;
    }
}

module.exports = { isArrayEqual }