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
console.log(average);
console.log(sum); // 399


