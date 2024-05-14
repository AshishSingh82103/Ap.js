// ------------Callbacks, Promises & Async Await--------------
// function hello () {
//     console.log("hello");
// }

// setTimeout(hello, 2000); // 2s = 2000ms

// // or 
// setTimeout(()=>{
//     console.log("Ashish");
// }, 4000);

// Callbacks = > Acallback function passed as an argument to another function

// function  sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);

// }

// calculator(1, 2, sum);

// -------Callback hell--------
// nesting

// let age = 19;
// if(age >= 18) {
//     if(age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle"); // middle
//     }

// } else {
//     console.log("child");
// }

// for( let i = 0; i < 5; i++) {
//     let str = "";
//     for(let j = 0; j < 5; j++) {
//         // console.log(j);
//         str = str + j;
//     }
//     console.log(i, str);
// }

// function getData(dataId) {
//     consola("something@gmail.com");e.log("data", dataId); // data 123
// }
// getData(123);

// // if data back to in 2second

// function getData (dataId) {
//     setTimeout(() =>{
//         console.log("data", dataId);
//     }, 2000);
// }
// getData("singhashish82103@gmail.com");
// getData("ashishguru0203@gmail.com");


// call back hell
// function getExtractData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// //  using callbacks hell
// // (nested call back = > pyramid of Doom) this style of programming becomes dificult to understand & manage.
// getExtractData(1, () => {
//     console.log("getting data 2....")
//     getExtractData(2, () => {
//         console.log("getting data 3....")
//         getExtractData(3, ()=> {
//             console.log("getting data 4....")
//             getExtractData(4)
//         });
//     }); 

// });

// promises => it will become on the part of java script to resolve the problem of callbacks-hell.
// it is for "eventual" completion of task . It is an object in JS. It is solution of callback hell.

// let promise = new Promise((resolve, reject) => {

// })

// Function with two handlers
// ** resolve and rejcts are callbacks provided in JS.

// let promise = new Promise((resolve, reject) => {
//     console.log("I'm a promise");
//     resolve("Success");
// })

// let promise1 = new Promise((resolve, reject)=>{
//     console.log("I'm a promise");
//     reject("Get some error occured");

// });

// in genral programming api return to data
function getData(dataID, getNextData) {
     return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data", dataID);
            resolve("Sucess");
            if(getNextData) {
                getNextData();
            }
        },5000);

    })

}
// this console do on browser to see the reuslt
// before using resolve promise is pending

// let result = getData(123);
// console.log(result);

// after using resolve promise will be success

// let finalValue = getData(123);
// console.log(finalValue);

function getData1(dataID, getNextData) {
    return new Promise((resolve, reject) =>{
       setTimeout(()=>{
           console.log("data", dataID);
           reject("Error");
           if(getNextData) {
               getNextData();
           }
       },5000);

   })

}

// this console do on browser to see the reuslt
let result = getData1(123);
console.log(result);

// promise => .then() & .catch()

// ----Sample---
// promise.then((resolve) => {})
// promise.then((reject) => {})








