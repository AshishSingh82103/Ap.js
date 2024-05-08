// Qs: Create a h2 heading element with text - "Hello java script". Append "from Apna college students" to this text using js.
// let h2 = document.querySelector('h2');
// // console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from apna college student";


// Qs :create three div with common class name - "box". Acess them & add some unique text to each  of them.
let divs = document.querySelectorAll(".box");
// div[0].innerText = "new unique value 1";
// div[1].innerText = "new unique value 2";
// div[2].innerText = "new unique value 3";


// ---------Best way-------
let index = 1;
for(div of divs) {
    // console.log(div.innerText);
    div.innerText = `new unique vale${index}`
    index++;
}


