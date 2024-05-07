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

// let gameNum = 25;
// let userNum = prompt("Guess the game Number : ");
// while(userNum != gameNum) {
//      userNum = prompt("you entered wrong number. Guess again : ");
// }
// console.log("Congartulaions you enterd the right number");

// -----String-------------
// let str = "accountId";
// let str1 = 'newlyseup';

// string length
// console.log(str.length); // 9
// console.log(str1.length); // 9

// string indices or index => cahracter postion
// str[0], str[1], str[2]

// console.log(str[2]); // c
// console.log(str1[1]); // e

// Template litireals (string-interpolation)
// let multiLine = `This is a multi-line string.
// It spans across multiple lines.`
// console.log(typeof multiLine); // string

// let obj = {
//     item: "boundryLine",
//     price: "5usd$",
// };
// console.log("The cost of obj", obj.item, "is", obj.price);
// // or
// console.log(`the cost of obj ${obj.item} is ${obj.price}`);

// console.log("Ashish\nSingh"); // print the next line
// console.log("Ashish\tSingh"); // print the tab space

// let str = "Ashish\tSingh";
// console.log(str.length); // 12

//  ----------String method(is like block of code which used to work for me) in JS--------
// ---toUpperCase()
// let str = "abc";
// console.log(str.toUpperCase()); // ABC

// toLowerCase
// let str1 = "ASHSIH SINGH";
// console.log(str1.toLowerCase());

// trim starting and end to trin the white space
// let str2 = "   ashish singh ";
// console.log(str2.trim());

// Slice(str.slicr(star, end)) // returns part of the string

// let str = "0123456";
// console.log(str.slice(1, 3)); // 12

// string concat str1.concat(str2) joins str2 with str1

// let str1 = "apna";
// let str2 = "collage";
// let result = str1.concat(str2);
// console.log(result); // apnacollage

// replace method str.replace(searchVal, newVal)

// let str = "hello";
// // console.log(str.replace("h", "y")); // y
// console.log(str.replace("lo", "p")); // help

// let str = "hellololo";
// console.log(str.replaceAll("lo", "p")); // helppp

// cahracter method charAt(index)

// let str = "IloveJS";
// console.log(str.charAt(0)); // I










