"use strict";
const run = (message) => {
    console.log(message);
};
run("Hello, TypeScript!");
let name = "Emmanuel";
console.log("My name is " + name);
let arr = [2, 4, 5, 6, 7, 2, 3, 4, 6,];
console.log("This is an array of purely numbers " + [arr]);
let obj = {
    name: "Emmanuel",
    age: 23,
};
console.log(`My name is ${obj.name} and am ${obj.age} years old`);
// Type annotations
const logAlbumInfo = function (title, trackCount, isReleased) {
    console.log(`Title: ${title}, Track Count: ${trackCount}, Is Released: ${isReleased}`);
};
logAlbumInfo("Grace", 3, "2024");
// variable annotations
let example1 = "Hello World!";
let example2 = 42;
let example3 = true;
let example4 = Symbol();
let example5 = 123n;
let example6 = null;
let example7 = undefined;
console.log("This are all data types in javascript and how they are annoteted in typescript :" + example1, example2, example3, example4, example5, example6, example7);
