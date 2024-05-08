// ---------getAttribute------------
let div = document.querySelector('div');
console.log(div);
div.getAttribute("id");
let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
para.getAttribute("class");
let class1 = para.getAttribute("class");
console.log(class1);


// --------SetAttributes ----------
let para1 = document.querySelector("p");
para1.setAttribute("class","newClass");
let class2 = para1.setAttribute("class", "newClass");
console.log(class2);
