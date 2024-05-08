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
arrowmulti(3, 4);








