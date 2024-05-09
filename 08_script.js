// ---------getAttribute------------
// let div = document.querySelector('div');
// console.log(div);
// div.getAttribute("id");
// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// para.getAttribute("class");
// let class1 = para.getAttribute("class");
// console.log(class1);


// --------SetAttributes ----------
// let para1 = document.querySelector("p");
// para1.setAttribute("class","newClass");
// let class2 = para1.setAttribute("class", "newClass");
// console.log(class2);

// ------------Styling-------------
// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";
// div.innerText = "Hello!"
// div.style.visibility = "hidden";

// -------------Create element -----------------
// document.createElement("button");
// let newbtn = document.createElement("button");
// newbtn.innerText = "Click me!"
// console.log(newbtn);
// --------at last to append in the div----------
// let div  = document.querySelector("div");
// div.append(newbtn);

// --------at first to prepend in the div---------
// let div = document.querySelector('div');
// div.prepend(newbtn);

// --------before start the div add button--------
// let div = document.querySelector('div');
// div.before(newbtn);

// -------end of the div to add the button--------
// let div = document.querySelector('div');
// div.after(newbtn);

// ---------create a heading element-------------
// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>"


// document.querySelector("body").prepend(newHeading);
// -------or-------------
// let body = document.querySelector("body");
// body.prepend(newHeading);

// -------Delete a paragraph-----------
// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();


// Qs: create a new button element. Give a text "Click me!", background color of red  and text color of white. insert the button as the first element inside the body tag.

//  let newbtn = document.createElement("button");
//  newbtn.innerText = "CLick me!";
//  newbtn.style.backgroundColor = "red";
//  newbtn.style.color = "white";

//  document.querySelector("body").prepend(newbtn);

// Qs: Create a paragraph tag in html, give it to some class and styling.
// a. now create a new class in CSS and try to append this class to the paragraph tag
// b. Did you notice , how you overwrite the class name when you add a new one?solve the problem using classList.

let para = document.querySelector("p");
console.log(para);
// add a new class using classlist
para.classList.add("newClass")