// let x = "global_x"

// function outer(outer_param) {
//     let y = "outer_local_y";
//     // x,y and outer_param are accessible here i.e x,y and outer_param are in scope here
//     console.log(x, y, outer_param);

//     // inner_param and z are out of scope
//     // console.log(inner_param, z)  
//     function inner(inner_param) {
//         let z = "inner_local_z";
//         // x,y,z and outer_param all are accebile here
//         console.log(z, inner_param, y, x);
//     }
//     console.log(x, y, outer_param);
//     // inner_param and z are out of scope
//     // console.log(inner_param, z) 

//     inner("inner_parameter");s

//     console.log(z);
// }

// outer("outer_parameter");

// console.log(y);
// Why the order or output different?


// function b(x) {
//     function a() {
//         console.log(x);
//     }
//     let x = 10;
//     a();
//     console.log(x);
// }
// let x = 20;
// b(30); // 10


// nahom()

// function nahom() {
//     console.log("Hello");
// }
// nahom()
// console.log("Hello");
// x()
// let x = function() {
//     console.log("Hello");
// }


// let x = function(l, w) {

//     let area = l * w
//     return area;
// }
// console.log(x(5, 6));

// let x = 10;

// function main() {
//     let x;
//     console.log("x1: " + x);
if (x > 0) {
    let x = 30;
    console.log("x2: " + x);
}
// x = 40;
// let f = function(x) {
//     console.log("x3: " + x);
// }
// f(50);
// }
// console.log(x)
// main();
// console.log(x)