"use strict";
let prompt = require("prompt-sync")();
let sweep = +prompt("enter the sweep value: ");
let height = +prompt("enter the height value: ");
let width = +prompt("enter the width value: ");
let depth = +prompt("enter the depth value: ");
let sweep1 = +prompt("enter the other sweep: ");
/**
 * 
 * @param {number} sweep value of the sweep
 * @param {number} sweep1 value of the sweep1
 * @param {number} width value of the width
 * @return {number};
 */
function areaOfATriangle(sweep, sweep1, width) {
    let sides = (sweep + sweep1 + width) / 2;

    let nahom = Math.sqrt(sides * (sides - sweep) * (sides - sweep1) * (sides - width));
    return nahom;
}
/**
 * 
 * @param {number} sweep value of the sweep
 * @param {number} sweep1 value
 * @param {number} width value
 * @return {number};
 */
function roofVolume(sweep, sweep1, width) {
    let volum1 = (areaOfATriangle(sweep, sweep1, width) * width);
    return volum1;
}
/**
 * 
 * @param {number} width value
 * @param {number} height value
 * @param {number} depth value
 * @return {number};
 */
function livingVolume(width, height, depth) {
    let luwam = width * height * depth;
    return luwam;
}
/**
 * 
 * @param {number} width value
 * @param {number} height value
 * @param {number} depth value
 * @param {number} sweep value
 * @param {number} sweep1 value
 * @return {number};
 */
function houseVolume(width, height, depth, sweep, sweep1) {
    let kisun = livingVolume(width, height, depth) + roofVolume(sweep, sweep1, width);
    return kisun;
}
console.log(houseVolume(4, 5, 6, 6, 6));