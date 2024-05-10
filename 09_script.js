// -----------Events-------------

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("this is box");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// -----------Event object------------

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e);
  
// }

// ---------Event-listiner and event object-------------
// let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = () => {
//     console.log("buttun was double clicked");
//     let a = 34;
//     a++;
//     console.log(a);
// }

// ---------------Event-object-------------

// btn2.ondblclick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// }

// let div = document.querySelector("div");
// div.onmouseover = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY); 
// }

// ---------- add Event-Listner----------
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener('click', (event) => {
//     console.log("Button was clicked");
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// })

// let btn2 = document.querySelector("#btn2");
// btn2.addEventListener('click', (event) => {
//     console.log("Buttun was doubled clicked");
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// })


// ---------remove event listner------------------
let btn1 = document.querySelector("#btn1");

btn1.addEventListener('click', () => {
    console.log("buttun was clicked - hander1");
})

btn1.addEventListener('click', () => {
    console.log("buttun was clicked - hander2");
})

const handler3 = () => {
    console.log("buttun was clicked - hander3");
}
btn1.addEventListener('click', handler3);

btn1.removeEventListener('click', handler3);
    

btn1.addEventListener('click', () => {
    console.log("buttun was clicked - hander4");
})

btn1.removeEventListener('click',()=>{
    console.log("buttun was clicked - hander3");
})

// Qs : create a toggle buttun that changes the screen to dark-mode when clicked & light-mode when clicked again.
// toggle => suffer between two state one to reach another point after then reached to starting point

let modebtn = document.querySelector("#mode");
let currMode = "light";
modebtn.addEventListener('click', () => {
    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "pink";
    }
    console.log(currMode);
})

