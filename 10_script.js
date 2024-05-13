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
    constructor(brand, mileage) {
        console.log("Creating new objects");
        this.brand = brand;
        this.mileage = mileage;
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

let fortuner = new toyotaCar("fortuner", 10); // constructor
console.log(fortuner);

let lexus = new toyotaCar("lexus", 20); // consturctor
console.log(lexus);

// ------------Inheritance----------------
// Inheritance is passing down properties & methods from parent class to child class

// ** if chlid & parent have same method, child's method will be used. [Method overriding]

class Parent {
    
    hello () {
        console.log("hello");
    }
}

class Child extends Parent {};
let obj =  new Child();

// -----------another--------------

class Person {
    constructor() {
        this.sepices = "homo sapiens"
    }
    eat()  {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work () {
        console.log("Do nothing");
    }

}

class Engineer extends Person {
    work() {
        console.log("Solve problems, build something")
    }
}

class Doctor extends Person {
    work() {
        console.log("Treat patient")
    }
}
 let ashishObj = new Engineer();
 console.log(ashishObj.eat());

 let devndraObj = new Doctor();
 console.log(devndraObj.sleep());
 console.log(devndraObj.work()); //Treat patient (child class invoked)

//  let p1 = new Person();
//  console.log(p1);

let e1 = new Engineer();
console.log(e1); // Engineer { sepices: 'homo sapiens' } final output through out the browser

// ------------Super keyword------------

// The super keyword is used to call thte constructor of its parent class acess to the parent's properties and method.

class Person1 {
    constructor () {
        console.log("Enter parent constructor");
        this.sepices = "homo sepines";
    }
    eat() {
        console.log(eat);
    }
}

class Engineer1 extends Person1{
    constructor(branch) {
        console.log("enter child consturctor");
        super(); // to invoke parent class consturctor
        this.branch = branch;
        console.log("exit child consturctor");
    }
    work() {
        console.log("Solve the problem, build something");
    }
}



let engObj = new Engineer1("chemical-engg");





 














