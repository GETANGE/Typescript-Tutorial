"use strict";
// If the contract of the "FullAlbumSales" type isn't fulfilled when creating a new object.
let albumWithSales = {
    title: "Grace",
    artist: "Otile Brown",
    releaseYear: 2020,
    unitsSold: 10000,
    // revenue: 20000000,
};
console.log(albumWithSales);
let example = {
    name: "John",
    age: 30,
    // age: "30", // this will cause a type error
};
console.log(example);
const classicRock = {
    artist: "Otile Brown",
    title: "Grace",
    releaseYear: 2024,
    studio: "Just In Love Music",
    producer: "Ihaji Made It",
    venue: "London Symphony Hall",
    concertDate: ["2024-06-10"],
};
console.log("Extending with multiple interfaces using commas");
console.log(classicRock);
const kenyanPop = {
    artist: "Otile Brown",
    title: "Grace",
    releaseYear: 2020,
    studio: "Just In Love Music",
    producer: "Vicky Pon Dis",
};
console.log(kenyanPop);
const liveAlbum = {
    artist: "Otile Brown",
    title: "Grace",
    releaseYear: 2024,
    venue: "Quiver Lounge",
    concertDate: ["2024-06-25"],
};
console.log(liveAlbum);
const user = {
    id: "1",
    createdAt: new Date(),
    name: "John Doe",
    email: "johndoe@example.com",
    price: 19.99,
};
console.log(user);
const user2 = {
    id: "2",
    createdAt: new Date(),
    name: "Jane Doe",
    email: "janedoe@example.com",
    role: "admin",
};
console.log(user2);
/**
 * DYNAMIC KEYS
 * In Typescript adding object keys will led to errors.
 */
// METHOD 1: Using index signatures for dynamic keys
const albumAwards = {};
albumAwards.winGrammy = true;
albumAwards.winIMAX = false;
albumAwards.winOscar = "Nominated";
albumAwards.wins = 30;
console.log(albumAwards);
const albumAwards2 = {};
albumAwards2.winGrammy = true;
albumAwards2.winIMAX = true;
albumAwards2.winOscar = "Nominated";
albumAwards2.wins = 30;
console.log(albumAwards2);
const extendedNominations = {
    Grammy: true,
    MercuryPrice: false,
    Billboard: true,
    winIMAX: false,
    wins: 30,
    winOscar: "Nominated",
};
console.log(extendedNominations);
const extendedNomination2 = Object.assign(Object.assign({}, albumAwards), { Grammy: true, MercuryPrice: false, Billboard: true, winIMAX: false, wins: 30, winOscar: "Nominated" });
console.log("Using the interface to perform intersection");
console.log(extendedNomination2);
/**
 * Type object
 * Similar to string, number, and boolean, object is a global type in TypeScript.
 * object represents any non-primitive type. This includes arrays, functions, and objects.
 */
const acceptAllNonPrimitiveTypes = (obj) => {
    return obj; // this will accept any non-primitive type.
};
// this function can be accept any non-primitive value.
let obj1 = acceptAllNonPrimitiveTypes({ name: "John Doe", age: 30, isActive: true });
let obj2 = acceptAllNonPrimitiveTypes(["Apple", "Banana", "Cherry"]);
let obj3 = acceptAllNonPrimitiveTypes(function helloWorld() {
    console.log("Hello, World!");
});
console.log(obj1, obj2, obj3);
let obj4 = { name: "Alice" };
let obj5 = [1, 2, 3];
let obj6 = () => {
    console.log("Hello, World!");
};
// how to access properties declared as object type
// obj4.name // Property 'name' does not exist on type 'object'.
let name1 = obj4.name;
console.log(name1);
const updateAlbum = (album) => {
    return Object.assign({}, album);
};
const album3 = {
    id: "1",
    artist: "Otile Brown",
    title: "Grace",
    releaseYear: 2024,
    genre: "Pop",
};
console.log(updateAlbum(album3));
