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
