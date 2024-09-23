const run = (message : string) => {
    console.log(message);
}

run("Hello, TypeScript!");

let name : string = "Emmanuel"

console.log("My name is " + name);

let arr: number[] = [2,4,5,6,7,2,3,4,6,]
console.log("This is an array of purely numbers "+[arr]);

let obj: string = {
    name: "Emmanuel",
    age: 23,
}

console.log(`My name is ${obj.name} and am ${obj.age} years old`);

// Type annotations
const logAlbumInfo = function(title: string, trackCount: number, isReleased:boolen){
    console.log(`Title: ${title}, Track Count: ${trackCount}, Is Released: ${isReleased}`);
}
logAlbumInfo("Grace",3, "2024")

// variable annotations
let example1: string = "Hello World!";
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: bigint = 123n;
let example6: null = null;
let example7: undefined = undefined;

console.log("This are all data types in javascript and how they are annoteted in typescript :"+example1, example2, example3, example4, example5, example6, example7)