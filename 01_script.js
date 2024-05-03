// variable can be redeclare and update.A global scope variable
// var a = 24;
// var a = 58;
// console.log(a); // 58

// variable can not be redecalre but update the value . A block scope variable
// let a = 24;
// // update the value
// a = 25;
// console.log(a); // 25

//variable can not be redecalre and update. A block scope variable
// const age = 35;
// age = 46;
// console.log(age); // TypeError: Assignment to constant variable.


// let a;
// console.log(a); // undefined
// a = 10;
// console.log(a); // 10

// const a;
// console.log(a);  // SyntaxError: Identifier 'a' has already been declared

// Data type in js
// Number, String, Boolean, Undefined, Null, Bigint, Symbol <= these are primitive data types they are total 7 types
let a = null;
console.log(typeof a); // object

// ----Nonprimitve => objcet-------
const student = {
    name: "rahul",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};
student["name"] = 'rahul shrma';
console.log(student["name"]); // rahul shrma

// console.log(student["age"]);

student["age"] = student["age"] + 1;
console.log(student["age"]); // 21

console.log(student.cgpa);

// practice One
const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price:270,
};
console.log(product);

// practice two
const profile = {
    userName: "singhashis@82103",
    isFollow: "false",
    followers: 321,
    following: 123,
};
console.log(typeof profile); //object
console.log(typeof profile.userName); //  string