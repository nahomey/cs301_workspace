//Q. 1
let prompt = require("prompt-sync")();
let quarts = prompt(parseInt("enter here in quarts"));
let liters = quarts * 0.946
console.log(liters);


// Q .2
let prompt = require("prompt-sync")();
let km = +prompt("enter value in km");
let miles = km * 0.6
console.log(miles);

// Q .3
let prompt = require("prompt-sync")();
let totalNumberOfBoxes = prompt(parseInt("enter number of the total boxes"));
let numberOfBoxes = prompt(parseInt("enter number of boxes"));
numberOfStacks = Math.ceil(totalNumberOfBoxes / numberOfBoxes);
console.log(numberOfStacks);


// Q .4
let prompt = require("prompt-sync")();
let begningOfOdometer = +prompt("enter begining mileage:");
let endingOfOdometer = +prompt("enter ending mileage: ");
let begningNumbOfGallons = +prompt("enter begning number of gallon: ");
let endingnumberOfGallons = +prompt("enter ending number of gallon: ");
mileagePerGallon = (endingOfOdometer - begningOfOdometer) / (begningNumbOfGallons - endingnumberOfGallons);
console.log(mileagePerGallon);


// Q .5

let prompt = require("prompt-sync")();
let age = +prompt("enter your age");
let range = 220 - age
let fastestHeartRates = range * .85
let slowestHeartRates = range * .65
console.log("fastestHeartRates: is " + fastestHeartRates);
console.log("slowestHeartRates: is " + slowestHeartRates);