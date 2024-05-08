// -----------Dom(Document Object Model)---------------------

//  window object => log is part of window and many other it is browser object not java script object

// console.log("Hello");
// window.console.log("Hello2")

// console.dir(window.document); // it is print object properties method
// console.dir(window.document.body.childNodes[1]);

//-------------- Dom Manipulation--------------
// Slecting with id
// document.getElementById("myId")

 let heading = document.getElementById("heading");
 console.dir(heading);

//  -------------Slecting with class html collection-------------
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);

// ----------Selecting with tag retun html collection--------------
let para = document.getElementsByTagName("p");
console.dir(para);

// ------------query slector return node list------------
let firstElements = document.querySelector("p");
console.log(firstElements); // 1st element

let allElements = document.querySelectorAll("p");
console.log(allElements); // all elements


