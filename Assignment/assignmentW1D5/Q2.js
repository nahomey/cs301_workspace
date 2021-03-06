"use strict";

let radius = +prompt("Enter the radius of a circle: ");
let heightOfCylinder = +prompt("enter the height of a cylinder: ");
/**
 * 
 * @param {number} radius this is radius value;
 * @return {number}; 
 */
function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(radius));
/**
 * 
 * @param {number} heightOfCylinder;
 * @return {number};
 */
function volumeOfCylinder(heightOfCylinder) {

    let baseArea = areaOfCircle(radius);
    let volume = baseArea * heightOfCylinder;
    return volume;
}
console.log(volumeOfCylinder(heightOfCylinder));