// ----------Function and methods-------

// function defination
// function functionname () {
//     // do some work
// }
// // /function call

// functionname();

// other type

// function functionname (para1, para2) {
//     // do some work

// }
// // /function call
// functionname();

// function functionname () {
//     console.log("Ashish");
//     console.log("singhashish82103@gmail.com")
// }
// functionname(); // invoke function

// function myfunction (msg, n) {
//     console.log(msg * n) // Nan
// }
// myfunction("java-script", 100); // argument

// function -> 2 numbers, sum

// function sum (x, y) {
//     console.log(x + y); // 5
// }
// sum(2, 3);

// function which return the vaue

// function sum(x, y) {
//     console.log("before return") // before return
//     s = x + y;
//     return s;
//     console.log("after return"); // Unreachable code detected 
// }
//  let result = sum(3, 4);
//  console.log(result); // 7

//  Note: function parameteres they are like local varibles of function and scope is block

// ------Arrow function(Modern java script)-----
// compatct way of writing a function

// const functionName = (para1, para2) => {
//     // do some work

// }

// sum function
function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    console.log(a + b);
}
arrowSum(3, 4); // 7

// multiplication function
function mul(a, b) {
    return a * b;
}

const arrowmulti = (a, b) => {
    console.log(a * b);
}
arrowmulti(3, 4); // 12

const print = () => {
    console.log("Ashish");
}
// print(); Ashish

// Qs : Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string

function countVowels (str) {
    // ApnaCollege, count = 0
    let count = 0;

    for(const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;

        }
        
    }

    console.log(count); // 5
}
countVowels("apnacollage"); // 5

// Qs: create a same problem with arrow function
const countVow = (str) => {
    let count = 0;

    for(const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;

        }
        
    }

    console.log(count); // 5

}
countVow("apnacollege");


// for each Loop in arrays

// arr.forEach(callBackFunction)

// callBackFunction : Headers, it is a function to execute for each element in the array
// * A callback is a function passed as an argument to another function*

// arr.forEach((val)=>{
//     console,log(val);
// })

let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//     console.log(val);
// });

arr.forEach((val, index, arr)=>{
    console.log(val, index, arr);

});

// what is high order function or method =>Ans:  forEach

// Qs : for a given arrays of numbers, print the square of each value using the for each loop.

// let arrNum = [2, 3, 4, 5, 6];
// arrNum.forEach((num) =>{
//     console.log(num*num);
// });

// or
let arrNum = [2, 3, 4, 5, 6];
let calculateSquare = (num) =>{
    console.log(num*num);
};
arrNum.forEach(calculateSquare);

// Map method is very similar to for each but it create a new array
// arr.map()
let num = [2, 3, 4, 5];
// num.map((val) =>{
//     console.log(val);

// })
let newValue = num.map((val) => {
    return val * val;
})
console.log(newValue);

// filter method =>  create a new arr and filter it.

let filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenArr = filterArr.filter((val)=>{
    
    return val % 2 === 0;

})
console.log(evenArr);

//  reduce method => perform some opertions and reduce to it single value accumulator starting value eg 1 curr 2

let reduceArr = [1, 2, 3, 4];
 let result = reduceArr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
})
console.log(result);

// find the largest element in an Array
let arr1 = [23, 45, 67, 74, 24];
let result1 = arr1.reduce((accumulator, currentValue)=>{{
    return accumulator > currentValue ? accumulator : currentValue;
}});
console.log(result1); // 74

// Qs : We are given an array of marks of student. filter out of the marks of the student that scored 90+.
let marks = [87, 97, 34, 49, 99, 96, 86];
 let finalAns = marks.filter((val) =>{
    return val > 90;

})
console.log(finalAns);

// Qs : a. Take a number n as input from User. create an array of number from 1 to n.
// b. use the reduce method to calculate the sum of the all number in array.
// c. use the reduce method to calculate the prodcut of the all numbers in the array.

// a.
 let n = prompt('Enter a number: ');
 let inputArr = [];
 for(let i = 1; i <= n; i++) {
    inputArr[i - 1] = i; //1(0), 2(1), 3(2)
 }
 console.log(inputArr);

//  b.
  let valueSum = inputArr.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;

 });
 console.log(valueSum);

 // c.
  let vauleMulti = inputArr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
 })

 console.log(vauleMulti)














