const prompt = require("prompt-sync")();
let radius = prompt("enter the value of radius");
radius = parseInt(radius);
let height = prompt("enter the value of height");
height = parseInt(height)

volume = Math.PI * radius * radius * height

console.log(volume);