// --------------Loops--------------
// --for---
// for( let i = 1; i <= 5; i++) {
//     console.log("Ashish");
// }
// let i = 1; initialization
//  i <= 5 stooping condtion, both are run one time after we move out updation
// i++ updation

// calculate sum of 1 to 5
// let sum = 0;
// for(let i =0; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);

// ---Infinte Loops => a Loop that never end-- no do in a program
// for( let i = 1; i >= 0; i++) {
//     console.log(i);
// }

// -----------while loops---------------

// while(condition) {
//     // do some work
//updation++;
// }

// let i = 1;
// while( i <= 5){
//     console.log("i= ", i);
//     i++;
// }

// -----------Do while-------------

// do{
//     // some work
// }while(condition);

// let i = 20;
// do {
//     console.log("Ashish");
//     i++;
// }while( i <= 10);

// ------for-of loop using for string and array----------

// for(let val of strVar) {
//     // do some work
// }
// let str = "account_setup";
// for( let i of str) {
//     console.log("i =",i);
// }

// print string size
// let str = "account-setup";
// let size = 0;
// for(let i of str) {
//     console.log("i = ", i);
//     size++;
// }
// console.log("size =", size); // 

// --------for-in loop => using for object to get object keys and arrays key---------

// for(let key in objVar) {
//     // do some work
// }

// let student = {
//     name: "rahul kumar",
//     age: 25,
//     cgpa: 7.4,
//     isPass: true,
// };
// for( let key in student) {
//     console.log("key = ", key, "value =", student[key]);
// }

// Q:1 => print all even no. 0 to 100;

// for(let i = 0; i <= 100; i++) {
//     if(i % 2 ===0) {
//         // even number
//         console.log("i = ", i);
//     } else {
//         console.log("i = ", i);
//     }
//     // console.log("i = ", i);
// }

// Q:2 => print all odd number 0 to 100;

// for(let i = 0; i <= 100; i++) {
//     if(i % 2 !== 0) {
//         console.log("i = ", i);
//     } 
// }

// Q: 3 => Creat a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters coorect value.

let gameNum = 25;
let userNum = prompt("Guess the game Number : ");
while(userNum != gameNum) {
     userNum = prompt("you entered wrong number. Guess again : ");
}
console.log("Congartulaions you enterd the right number");
