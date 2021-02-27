// Q .1

const prompt = require("prompt-sync")();
let num = +prompt("enter a number");
console.log(checkPrime(num));

function checkPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

// Q .2
const prompt = require("prompt-sync")()
let radius = +prompt("Enter the radius of a circle: ")
let heightOfCylinder = +prompt("enter the height of a cylinder: ")

function areaOfCircle(ra) {
    let area = Math.PI * ra * ra;
    return area;
}
console.log(areaOfCircle(radius))



function volumeOfCylinder(heightOfCylinder) {

    let baseArea = areaOfCircle(radius);
    let volume = baseArea * heightOfCylinder;
    return volume;
}
console.log(volumeOfCylinder(heightOfCylinder));


// Q.3
const prompt = require("prompt-sync")();
let sweep = +prompt("enter the sweep value: ");
let height = +prompt("enter the height value: ");
let width = +prompt("enter the width value: ");
let depth = +prompt("enter the depth value: ");
let sweep1 = +prompt("enter the other sweep:")


function areaOfATriangle(sweep, sweep1, width) {
    let s = (sweep + sweep1 + width) / 2

    let nahom = Math.sqrt(s * (s - sweep) * (s - sweep1) * (s - width))
    return nahom;
}


function roofVolume(sweep, sweep1, width) {
    let volum1 = (areaOfATriangle(sweep, sweep1, width) * width);
    return volum1;
}


function livingVolume(width, height, depth) {
    let luwam = width * height * depth
    return luwam;
}


function houseVolume(width, height, depth, sweep, sweep1) {
    let kisun = livingVolume(width, height, depth) + roofVolume(sweep, sweep1, width)
    return kisun;
}
console.log(houseVolume(width, height, depth, sweep, sweep1));