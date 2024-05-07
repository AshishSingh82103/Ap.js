//  --------------Arrays(collection of item) same type of data  in java scrpit array is a special type of object is thier key vlaue pair but we use index--------------
// let marks = [97, 82, 75, 36];
// console.log(marks); // [ 97, 82, 75, 36 ]
// console.log(marks.length); // 4

// let sampleSize = ["java-scrpit", "python", "langName", "Sql", "Php"];
// console.log(sampleSize);
// console.log(sampleSize.length); // 5

// ---------Array indices(array is mutiable but string is not muitable)-------

// let marks = [97, 82, 75, 36];
// console.log(marks[0]); 
// console.log(marks[1]); 
// console.log(marks[2]); 
// console.log(marks[3]); 
// console.log(marks[4]);  // undefined

// marks[0] = 66;
// console.log(marks); // [ 66, 82, 75, 36 ]

// let str = "Hello";
// str[0] = "p";
// console.log(str); // Hello string is not mutiable it is unmuitbale

// ----------Looping = > (iitrables) over array => print all element of  an array------------

let sampleSize = ["java-scrpit", "python", "langName", "Sql", "Php"];

// length propery
// for(let index = 0; index < sampleSize.length; index++) {
//     console.log(sampleSize[index]);
// }

// for-of in genrally
// for( let el of sampleSize) {
//     console.log(el);
// }

let cities = ["Delhi", "Pune", "mumbai", "hyderabad", "gurgaon"];
// for( let el of cities)  {
//     console.log(el);
// }

for( let el of cities)  {
    // console.log(el.toUpperCase());
}

// Q: 1=> for given array with the marks of the student -> [85, 97, 44, 37, 76, 60].find the average marks of the entire class

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// console.log(sum); // 399
// let avg = sum /marks.length;
// console.log(avg); // 66.5

// or
for(let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
let average = sum / marks.length;
// console.log(average);
// console.log(sum); // 399

// Q:2 => for a given array with prices of 5 items -> [250, 645, 300, 900, 50] all items have an offer of 10% off them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];
let index = 0;
// for( let val of items) {
//     // console.log(`value at index ${index} = ${val}`);
//     let offer = val / 10;
//     items[index] = items[index] - offer;
//     console.log(`value of offer = ${items[index]}`);
//     index++;
// }

for ( let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
}
console.log(items);

//  ---------Array methods-------

// push() : add to end

// let veggie = ["potato", "Bringle", "LadyFinger", "Tamato"];
// veggie.push("cully-flower")
// console.log(veggie);

// pop() : delete from end & return

// let veggie = ["potato", "Bringle", "LadyFinger", "Tamato"];
// console.log(veggie)
// let deleted = veggie.pop();
// console.log(veggie);
// console.log("deleted =", deleted); // deleted = Tamato

// tostring : to convert a array in string

// let veggie = ["potato", "Bringle", "LadyFinger", "Tamato"];
// console.log(veggie);
// console.log(veggie.toString());

// let marks1 = [97, 78, 83, 46];
// console.log(marks1.toString());

// let marvel_heroes = ["thor", "Spiderman", "iorn-man"];
// let dc_heroes = ["batman", "superman", "flash"];
// let indi_heores = ["shaktiman", "krish"]

// let heroes  = marvel_heroes.concat(dc_heroes, indi_heores);
// console.log(heroes);

// ----Unshift method unshift() : add to start => push-----
// let marvel_heroes = ["thor", "Spiderman", "iorn-man"];
// marvel_heroes.unshift("Antman");
// console.log(marvel_heroes);

// ---shift() : 
// let marvel_heroes = ["thor", "Spiderman", "iorn-man"];
//  let del = marvel_heroes.shift();
// console.log(marvel_heroes);
// console.log(del); // thor

// ------------Slice() : returns a piece of the array not change in orignal array 
// eg: - slice(startindex, end index);

// let marvel_heroes = ["thor", "Spiderman", "iorn-man", "Antman", "hulk"];
// console.log(marvel_heroes);
// console.log(marvel_heroes.slice());

// splice() : change orignal  array ( add, remove, replace)
splice(start index, deleteCount, newEl);









