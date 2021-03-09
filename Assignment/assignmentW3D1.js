// Q1.

let car = {};

car.make = "Toyota";
car.model = "camry";
console.log(car);
car.model = "RAVA";
console.log(car);
delete car.make;
console.log(car);

// Q2.

function countProperties(obj) {
    let count = 0;
    for (const properties in obj) {
        count++;
    }
    return count;
}
// Q3.

function checkSpam(str) {
    if (str.includes("lottery") || str.includes("prize")) {
        return true;
    } else {
        return false;
    }
}
console.log(checkSpam("michael"));
console.log(checkSpam("lottery"));

}
// Q4.

function suffix(str1, str2) {
    let count = 1;
    for (let i = 0; i < str1.length; i++) {
        if (str1[str1.length - 1 - 1] === str[str2.length - 1 - i]) {
            count++;
            continue;
        }
        break;
    }
    let result = str1.slice(count);
    return result;
}
console.log(suffix("swiming", "running")):

    // Q5.
    let firstChar = s.slice(0, 1);
let afterFirstChar = s.slice(1);
let toUpperFirstChar = firstChar.toUpperCase();
let result = toUpperFirstChar.concat(afterFirstChar);
return result;
}​​​​​ 
console.log(tittleCase("chimdi")); 

queueMicrotask

// Q .6
function swap(a, b) {​​​​​
    let temp = a;
    a = b;
    b = temp;
    console.log(a, b);
}​​​​​
console.log(swap(5, 4));

queueMicrotask.

Q .7 

function getAverageAge(users) {​​​​​ 
    let sum = 0;
    for (let i = 0; i < users.length; i++) {​​​​​
        sum += users[i].age;
    }​​​​​
    return sum / users.length;
}​​​​​ 
let object1 = {​​​​​
    name: "Abc",
    age: 20
}​​​​​;
let object2 = {​​​​​
    name: "xyz",
    age: 10
}​​​​​;
let users = [];
users[0] = object1;
users[1] = object2; 
console.log(getAverageAge(users));

 