// Q.6
/**
 * 
 * @param {*} add 
 * @param {*} a 
 * @param {*} b 
 */

function compute(add, a, b) {

    return add(a, b);

}
/**
 * 
 * @param {*} a 
 * @param {*} b 
 */

function add(a, b) {
    return a + b
}

// function expression


let compute = function(add, x, y) {

    return add(x, y);

}

let add = function(x, y) {
    return x + y
}

// console.log(compute(add,6,3));


// console.log("****** Arrow function **********")
let compute = (add, x, y) => add(x, y);
let add = (x, y) => x + y;
console.log(compute(add, 6, 3));