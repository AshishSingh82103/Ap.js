// ---------Object----------------
// const student = {
//     fullNAme: "Ashish Singh",
//     marks: 94.4,
//     printMarks: function () {
//         console.log("marks = ", this.marks); // 
//     },

// };

// const employee = {
//     // define a function in object -way1 but this is better way
//     calculateTax1 () {
//         console.log("Tax rate is 10%");
//     },

//     // define a function in object -way2

//     // calculateTax2: function () {
//     //     console.log("Tax rate is 10%");
//     // }
// };


// const xEmp = {
//     salray: 50000,
// };

// const yEmp = {
//     salray: 50000,
// };

// const zEmp = {
//     salray: 50000,
// };

// const aEmp = {
//     salray: 50000,
//     calculateTax1() {
//         console.log("Tax rate is 20%");
//     },
// };


// set a prototype
// xEmp.__proto__ = employee;
// yEmp.__proto__ = employee;
// zEmp.__proto__ = employee;
// aEmp.__proto__ = employee;

// console.log(xEmp.calculateTax1());

// ----------Class----------------
// class toyotaCar {
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");

//     }

//     setBrand (brand) {
//         this.brandName = brand;
//     }
// }

// let fortuner = new toyotaCar();
// fortuner.setBrand("fortuner");

// let lexus = new toyotaCar();
// lexus.setBrand("lexus");

// In class constructor method(special method)

// constructor() method is : a. automatically invoked by new. b. intializes objects

class toyotaCar {
    constructor(brand) {
        console.log("Creating new objects");
        this.brand = brand;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");

    }

    // setBrand (brand) {
    //     this.brandName = brand;
    // }
}

let fortuner = new toyotaCar("fortuner"); // constructor
let lexus = new toyotaCar("lexus"); // consturctor
 














