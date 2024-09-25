"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
let cow = {
    name: "Cow",
    age: 10,
    type: "Domestic",
};
let snake = {
    name: "Snake",
    age: 5,
};
console.log("This is an example of an optional property in typescript :" + cow.type, snake.type);
const talkToAnimal = (animal) => {
    console.log(`I am ${animal.name}, a ${animal.type} and I am ${animal.age} years old.`);
};
talkToAnimal({ name: "Dog", type: "golden retrieval", age: 5 });
const talkToAnimal2 = (animal) => {
    console.log(`I am ${animal.name}, a ${animal.type || "Unknown"} type and I am ${animal.age} years old.`);
};
talkToAnimal2({ name: "Cat", age: 3 });
/**
 * ARRAYS AND TUPLES
 */
// Arrays 
// you can also describe the types of arrays in TypeScript
// There are 2 different syntaxes for doing this
/**
 * OPTION 1:
 */
let albums = [
    "Rubber Soul",
    "Thriller",
    "Back in Black",
    "Jazz",
    "Revolver"
];
console.log("First options :" + albums);
let dates = [1970, 1980, 1985, 1990, 1995,];
console.log("second example :" + dates);
/**
 * OPTION 2:
 */
let albums3 = [
    "Rubber Soul",
    "Thriller",
    "Back in Black",
    "Jazz",
    "Revolver"
];
console.log("THe second option :" + albums3);
let selectedDiscography = [
    {
        artist: "Otile Brown",
        title: "Dusuma",
        releaseYear: 2020,
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        releaseYear: 1973,
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        releaseYear: 1971,
    },
];
// And if you try to update the array with item that doesn't match the type, Typescript will give you an error
selectedDiscography.push({ name: "Getange", type: "string", });
console.log("Third example :" + selectedDiscography[4]); // undefined selected.
/**
 * TUPLES
 * They allow you to specify an array with a fixed number of elements where each elements has its own types.
 */
let album = ["Just in love music", 2020];
console.log(album);
// Tuples are useful for grouping related information together without having to create a new type.
let albumWithPlayCount = [
    {
        artist: "Otile Brown",
        title: "Dusuma",
        releaseYear: 2020,
    },
    100,
];
console.log(albumWithPlayCount);
// Optional Members of Tuples
const goToLocation = (coordinates) => {
    var _a;
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const elevation = coordinates[2];
    // Safely access the 'number' property only if the third element exists
    /**
     * The ?. operator is used to safely access properties of an object that might be null or undefined. => "Object chainings"
     * if elevation exists, then access the number property else return undefined.
     */
    const elevationValue = (_a = elevation === null || elevation === void 0 ? void 0 : elevation.number) !== null && _a !== void 0 ? _a : undefined;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Elevation: ${elevationValue}`);
};
// Test with elevation
goToLocation([37.7749, -122.4194, { number: 0 }]); // Latitude: 37.7749, Longitude: -122.4194, Elevation: 0
// Test without elevation
goToLocation([37.7749, -122.4194]); // Latitude: 37.7749, Longitude: -122.4194, Elevation: undefined
const recipe = (recipe) => {
    console.log(`Title: ${recipe.title}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Instructions: ${recipe.instructions}`);
};
const myRecipe = {
    title: "Chocolate Chip Cookies",
    ingredients: ["1 cup all-purpose flour", "1/2 cup granulated sugar", "1/2 cup unsweetened cocoa powder", "1/4 cup milk", "2 large eggs", "1/2 teaspoon vanilla extract", "1/4 teaspoon baking soda", "1/4 teaspoon "],
    instructions: "Preheat oven to 350 degrees F (175 degrees C). Grease and flour a baking sheet."
};
recipe(myRecipe);
/**
 * REST PARAMETERS IN TYPESCRIPT
 */
// Just like in Javascript, TypesScript supports rest parameters by using the (...) syntax for the final parameter.
let albumFormats = ["CD", "LP", "Cassette"];
const getAlbumFormatsonParameters = (album, ...formats) => {
    console.log(`The album ${album.title} sang by ${album.artist} is available in the following formats ${formats.join(',')}`);
};
getAlbumFormatsonParameters({ artist: "Otile Brown", title: "Just in love music", releaseYear: 2020 }, ...albumFormats);
/**
 * THE VOID TYPE
 */
// some functions don't return anything.
// They perform some kind of action, but they don't prodice a value.
const logResult = console.log("Hello world"); // This is TypeScript's way of saying "ignore the result of this function call".(void)
/**
 * TYPING ASYNC FUNCTION
 */
const getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === "1") {
                resolve({ id: "1", name: "John Doe" });
            }
            else {
                reject(new Error("User not found"));
            }
        }, 2000);
    });
};
// getUser(3) Typescript will tell us that the argument to be passed should be a string.
const getUser2 = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield getUser(id);
        return user;
    }
    catch (error) {
        throw error;
    }
});
getUser2("1"); //will be correct TypeScript will now know that getUser2 returns a Promise<User>
/**
 *  PRACTICAL EXERCISES.
 */
// Optional Function Parameters.
const concatName = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
const result2 = concatName("Emmanuel", "Getange"); // when calling concat with just a first name, we will get an error.
console.log(result2);
// the last namse is optional
const concatNameWithOptional = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
const result3 = concatNameWithOptional("Emmanuel"); // when calling concat with just a first name, it will work correctly.
console.log(result3);
const result4 = concatNameWithOptional("Emmanuel", "Getange");
console.log(result4);
// Rest Parameters
const sumNumbers = (...numbers) => {
    return numbers.reduce((acc, current) => acc + current, 0);
};
const result5 = sumNumbers(1, 2, 3, 4, 5);
console.log(result5);
const modifyUser = (user, id, makeChange) => {
    return user.map((user) => {
        if (user.id === id) {
            return makeChange(user);
        }
        return user;
    });
};
const users = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Doe" },
];
const results = modifyUser(users, "1", function (user) {
    return { user, name: 123 };
});
console.log(results);
// Functions Returning void
// const addClickEventListener =(listener) => {
//     document.addEventListener("click", listener);
// };
// addClickEventListener(()=>{
//     console.log("You clicked!");
// })
const acceptsCallback = (callback) => {
    callback();
};
const returnString = () => {
    return "Hello World!";
};
let results_1 = acceptsCallback(returnString);
console.log(results_1);
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://198.199.82.69:8040/api/v1/disease");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = yield response.json();
        console.log(data.data.diseases);
        return data;
    });
}
// Call the function
fetchData();
