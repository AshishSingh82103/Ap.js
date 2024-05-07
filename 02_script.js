// ------------Arithmetic Opertors---------------
// let a = 5;
// let b = 2;

// console.log("a + b = ", a + b); // 7
// console.log("a - b = ", a - b); // 3
// console.log("a * b = ", a * b); // 10
// console.log("a / b = ", a / b); // 2.5
// console.log("a % b = ", a % b); // 1 (modulus)
// console.log("a ** b = ", a ** b); // 25(exponential)

//  Unary opretors
// let a = 5;
// let b = 2;
// console.log("a = ", a, " & b = ", b );

// a = a + 1;
// or
// a++;
// console.log("a = ", a); // 6

// // a = a - 1;
// // or
// a--;
// console.log("a = ", a); // 4

// console.log("++a = ", ++a); // 6
// console.log("a++ = ", a++); // 6
// console.log("a = ", a); // 7

// ----------Assignment Operators---------------
// let a  = 5;
// let b = 2;

//  a += 4 // a = a + 4
//  console.log("a = " ,a); // 9

//  a -= 4 // a = a - 4
//  console.log("a = ", a); // 1

// a *= 4 // a = a * 4
// console.log("a = ", a); // 20

// a /= 4 // a = a / 4
// console.log("a = ", a); // 1.25

// a %= 4 // a = a % 4
// console.log("a = ", a); // 1

// a **= 4 // a = a ** 4
// console.log("a = ", a); // 625

// ------------Comparsion operator-------------
// let a = 5;
// let b = 2;

// console.log("5 == 2", a == b) // false
// console.log(" 5 != 2", a != b); // true

// Strictly checked cehcekd the data type
// let a = 5;
// let b = "5";
// console.log("5 === 5  ", a ===b); // flase

// console.log("5 !==5 ", a !== b); // true

// ---------------conditional statement------------
// if(statement){}
// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "Black"
// }
// if(mode === "light") {
//     color = "white"
// }
// console.log(color); // Black

// let age = 18;
// if(age >= 18) {
//     console.log("you can vote"); // you can vote
// }

// if(age < 18) {
//     console.log("you cannt vote");
// }

// if(statement){

// } else{

// }

// let mode1 = "light";
// let color1;

// if(mode1 === "dark") {
//     color1 = "Black"
// } else {
//     color1 = "white"
// }
// console.log(color1); // white

// if(statement){

// } else if(statement){

// } else {

// }

// let mode = "blue";
// let color;

// if(mode === "dark") {
//     color = "Black"
// } else if( mode === "blue") {
//     color = "blue"
// } else if( mode === "pink") {
//     color = "pink"
// } else {
//     color = "white"
// }
// console.log(color); // blue

// -----------------Ternary operators---------------

// constion ? trueoutput : falseoutput

// let age = 18;
// // let result = age >= 18 ? "adult" : "Not adult";
// // console.log(result);
// age >= 18 ? console.log("Adult") : console.log("not adult");

// -----------Swtich statement------------------
// const foo = 0;
// switch (foo) {
//   case -1:
//     console.log("negative 1");
//     break;
//   case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//   // Forgotten break! Execution falls through
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
//     break;
// }
// Logs 0 and 1

// Q : 1=> get user to input a number using prompt("Enter a number:").Check if the number is a multiple of 5 or not?
// let num = prompt("Enter a number");
// if(num % 5 === 0) {
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not multiple of 5");
// }

// Q : 2=>write a code which can give a grades to student according to thier score
// 80-100 A
// 70-89, B
// 60-69, C 
// 50-59, D 
// 0-49, F

let score = 75;
let grade;

if( score >= 80 && score <=100) {
    grade = "A"
} else if (score >= 70 && score <= 89) {
    grade = "B"
} else if (score >= 60 && score <= 69){
    grade = "C"
} else if (score >= 50 && score <= 59) {
    grade = "D"
} else if(score >= 0 && score <=49) {
    grade = "F"
}
console.log("According to your scores, your grade was : ", grade)










