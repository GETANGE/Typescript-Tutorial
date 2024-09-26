/**
 * INTERSECTION TYPES
 * Intersections lets us combine multiple object types into a single type.
 * Using the intersection operator "&" combines multiple separate types into a single type
 */
type Album = {
    artist: string,
    title: string,
    releaseYear: number,
};

type SalesData = {
    unitsSold: number,
    revenue?: number, // optional, cannot be required when intersecting.
};

type FullAlbumSales = Album & SalesData;

// If the contract of the "FullAlbumSales" type isn't fulfilled when creating a new object.
let albumWithSales: FullAlbumSales = {
    title:"Grace",
    artist: "Otile Brown",
    releaseYear: 2020,
    unitsSold: 10000,
    // revenue: 20000000,
}

console.log(albumWithSales)

/**
 * PROBLEMS WITH INTERSECTION
 * 1.Conflicting prop types
 *      When 2 types have the same property name but different types for that property, intersecting can led to a problem.
 */
type A={
    name: string,
    age: number,
}
type B={
    name: string,
    age: string,
}

type combo = A & B 

let example: combo ={
    name: "John",
    age: 30,
    // age: "30", // this will cause a type error
}
console.log(example)

/**
 * INTERFACE EXTENDS
 * This allows you to create new interfaces that inherits properties from existing ones.
 */

interface Album2 {
    artist: string,
    title: string,
    releaseYear: number,
}

// we will extend Album2 interface to inherit all its properties
interface StudioAlbum extends Album2 {
    studio: string,
    producer: string
}

interface LiveAlbum extends Album2 {
    venue: string,
    concertDate: string[]
}

interface AlbumInfo extends Album2, StudioAlbum, LiveAlbum {

}

const classicRock: AlbumInfo ={
    artist: "Otile Brown",
    title: "Grace",
    releaseYear: 2024,
    studio: "Just In Love Music",
    producer: "Ihaji Made It",
    venue: "London Symphony Hall",
    concertDate: ["2024-06-10"],
}
console.log("Extending with multiple interfaces using commas");
console.log(classicRock)

const kenyanPop: StudioAlbum ={
    artist: "Otile Brown",
    title: "Grace",
    releaseYear: 2020,
    studio: "Just In Love Music",
    producer: "Vicky Pon Dis",
}

console.log(kenyanPop)

const liveAlbum: LiveAlbum ={
    artist: "Otile Brown",
    title: "Grace",
    releaseYear: 2024,
    venue: "Quiver Lounge",
    concertDate: ["2024-06-25"],
}

console.log(liveAlbum)

/**
 * CHOOSE INTERFACE EXTENDS OVER intersection.
 *      1. Interfaces have Better Errors when merging incompatible types.
 *      2. Interfaces have Better perfomance
 * -Interface extends is better for catching errors and for TypeScript performance.
 * This structure allows us to create more specific album representations with a clear inheritance relationship:
 */

// Declaration Merging. 
// When multiple interfaces with the same name in the same scope are created, TypeScript automatically merges them. This is known as declaration merging.
// with types when you try to re-declare ,, it will give you an error.
interface Album4 {
    artist: string,
    title: string,
    releaseYear: number,
}
interface Album4 {
    studio: string,
    producer: string
}

/**
 * EXERCISES
 */
type User = {
    id: string;
    createdAt: Date;
    name: string;
    email: string;
};

type Product = {
    id: string;
    createdAt: Date;
    name: string;
    price: number;
};

type BaseEntity = User & Product

const user: BaseEntity = {
    id: "1",
    createdAt: new Date(),
    name: "John Doe",
    email: "johndoe@example.com",
    price: 19.99,
}

console.log(user)

interface User1 {
    id: string;
    createdAt: Date;
    name: string;
    email: string;
}
interface User2 extends User1{
    role: string;
}

const user2: User2 = {
    id: "2",
    createdAt: new Date(),
    name: "Jane Doe",
    email: "janedoe@example.com",
    role: "admin",
}
console.log(user2)

/**
 * DYNAMIC KEYS
 * In Typescript adding object keys will led to errors.
 */
// METHOD 1: Using index signatures for dynamic keys
const albumAwards: {
    [key: string] : boolean | string | number; // this syntax is the index signature.
}={}
albumAwards.winGrammy = true;
albumAwards.winIMAX = false;
albumAwards.winOscar = "Nominated";
albumAwards.wins = 30
console.log(albumAwards)

// METHOD 2: Using record type for dynamic keys
type DynamicKeys = Record<string, boolean | string | number>;

const albumAwards2: DynamicKeys = {}
albumAwards2.winGrammy = true;
albumAwards2.winIMAX = true;
albumAwards2.winOscar = "Nominated";
albumAwards2.wins = 30

console.log(albumAwards2)