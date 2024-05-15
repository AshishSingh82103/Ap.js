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

// function getData(dataID, getNextData) {
//      return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data", dataID);
//             resolve("Sucess");
//             if(getNextData) {
//                 getNextData();
//             }
//         },5000);

//     })

// }
// this console do on browser to see the reuslt
// before using resolve promise is pending

// let result = getData(123);
// console.log(result);

// after using resolve promise will be success

// let finalValue = getData(123);
// console.log(finalValue);

// function getData1(dataID, getNextData) {
//     return new Promise((resolve, reject) =>{
//        setTimeout(()=>{
//            console.log("data", dataID);
//            reject("Error");
//            if(getNextData) {
//                getNextData();
//            }
//        },5000);

//    })

// }

// this console do on browser to see the reuslt

// let result = getData1(123);
// console.log(result);

// promise => .then() & .catch()

// ----Sample---
// promise.then((resolve) => {})
// promise.then((reject) => {})


// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         console.log("I'm a promise");
//         resolve("success");
//         // reject("Some error occured");

//     });
// }
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled", res);
// });

// promise.catch((err)=>{
//     console.log("rejected", err);
// })

// --------------Promise chain--------------
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data 1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data 2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1.....");
// let p1 = asyncFunc1();
// p1.then((res) =>{
//     console.log(res);
//     console.log("fetching data2.....");
//     let p2 = asyncFunc2();
//     p2.then((res) =>{
//         console.log(res);
//     });
// });

// --------or---------
// console.log("fetching data1.....");
// asyncFunc1().
// then((res) =>{
//     console.log(res);
//     console.log("fetching data2.....");
//     asyncFunc2()
//     .then((res) =>{
//         console.log(res);
//     });
// });

// ---Promise chain best way to write the promise chain----------
// function getData(dataID) {
//     return new Promise((resolve, reject) =>{
//        setTimeout(()=>{
//            console.log("data", dataID);
//            resolve("Success");
//        },3000);

//    });

// }

// ---Promise chain best way to write the promise chain----------
// console.log("getting data1....");
// getData(1)
// .then((res) => {
//     console.log("getting data2....");
//     return getData(2);
// })
// .then((res)=> {
//     console.log("getting data3....");
//     return getData(3)
// })
// .then((res) => {
//     console.log(res);
// })

// -----------Async = it is always return a promise-----------
//  async function hello () {
//     console.log("hello");
// }
// hello(); // async is always return to promise

// await = await pauses the execution of its surroundings async function until the promise is settled.
// function api () {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve(200);
//         },2000);
     
//     });
// }

// async function getWeatherData() {
//     await api(); // 1st call
//     await api(); // 2st call
// }
// getWeatherData();


// function getData(dataID) {
//     return new Promise((resolve, reject) =>{
//        setTimeout(()=>{
//            console.log("data", dataID);
//            resolve("Success");
//        },3000);

//    });

// }

// // Async await
// async function getAllData() {
//     console.log("getting data 1....");
//     await getData(1);
//     console.log("getting data 2....");
//     await getData(2);
//     console.log("getting data 3....");
//     await getData(3);
//     console.log("getting data 4....");
//     await getData(4);
//     console.log("getting data 5....");
//     await getData(5);
// }
// console.log(getAllData());



// IIFE(imidiate invoked function Expression)

function getData(dataID) {
    return new Promise((resolve, reject) =>{
       setTimeout(()=>{
           console.log("data", dataID);
           resolve("Success");
       },3000);

   });

}

// Async await IIFE
(async function () {
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(3);
    console.log("getting data 4....");
    await getData(4);
    console.log("getting data 5....");
    await getData(5);
})();













