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

// Optional Object properties
type Animal = {
    name: string,
    type?: string, // making type optional
    age: number,
}

let cow: Animal = {
    name: "Cow",
    age: 10,
    type: "Domestic",
}

let snake: Animal = {
    name: "Snake",
    age: 5,
}

console.log("This is an example of an optional property in typescript :"+cow.type, snake.type)
const talkToAnimal = ( animal : {name: string,type:string, age: number}) =>{
    console.log(`I am ${animal.name}, a ${animal.type} and I am ${animal.age} years old.`);
};
talkToAnimal({name: "Dog", type: "golden retrieval", age: 5});

const talkToAnimal2 = (animal: Animal)=>{
    console.log(`I am ${animal.name}, a ${animal.type || "Unknown"} type and I am ${animal.age} years old.`);
}
talkToAnimal2({name: "Cat", age: 3});

/**
 * TYPE ALIASES
 *  ensures that there is a signle type of truth.
 */
export type StudentInfo = {
    name: string;
    age: number;
    address: string;
    grade?: string; // Optional property
};


/**
 * ARRAYS AND TUPLES
 */

// Arrays 
// you can also describe the types of arrays in TypeScript
// There are 2 different syntaxes for doing this

/**
 * OPTION 1:
 */
let albums: string[] =[
    "Rubber Soul",
    "Thriller",
    "Back in Black",
    "Jazz",
    "Revolver"
]
console.log("First options :"+albums)

let dates: number[] = [1970,1980,1985,1990,1995,]
console.log("second example :"+dates)

/**
 * OPTION 2:
 */
let albums3: Array<string> = [
    "Rubber Soul",
    "Thriller",
    "Back in Black",
    "Jazz",
    "Revolver"
]
console.log("THe second option :"+albums3)
// both of this are equivalent but the first option is abit more concise

/**
 * ARRAYS OF OBJECTS
 */
// when specifying an array's type, you can use any built-in types,inline types, or type aliases
type Album ={ // defining our objects.
    artist: string,
    title: string,
    releaseYear: number,
};

let selectedDiscography: Album [] = [
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
selectedDiscography.push({name: "Getange", type: "string",})

console.log("Third example :"+selectedDiscography[4]) // undefined selected.

/**
 * TUPLES
 * They allow you to specify an array with a fixed number of elements where each elements has its own types.
 */
let album: [string, number] = ["Just in love music", 2020];

console.log(album)

// Tuples are useful for grouping related information together without having to create a new type.
let albumWithPlayCount: [Album,number] = [
    {
        artist: "Otile Brown",
        title: "Dusuma",
        releaseYear: 2020,
    },
    100,
]
console.log(albumWithPlayCount)

// Optional Members of Tuples
const goToLocation = (coordinates: [number, number, { number?: number }?]) => {
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const elevation = coordinates[2];

    // Safely access the 'number' property only if the third element exists
    /**
     * The ?. operator is used to safely access properties of an object that might be null or undefined. => "Object chainings"
     * if elevation exists, then access the number property else return undefined.
     */
    const elevationValue = elevation?.number ?? undefined;

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Elevation: ${elevationValue}`);
};

// Test with elevation
goToLocation([37.7749, -122.4194, { number: 0 }]); // Latitude: 37.7749, Longitude: -122.4194, Elevation: 0

// Test without elevation
goToLocation([37.7749, -122.4194]); // Latitude: 37.7749, Longitude: -122.4194, Elevation: undefined


/**
 * ARRAYS OF OBJECTS
 */
type Recipe = {
    title: string,
    ingredients: string[],
    instructions: string,
}

const recipe = (recipe: Recipe)=>{
    console.log(`Title: ${recipe.title}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Instructions: ${recipe.instructions}`);
}

const myRecipe = {
    title: "Chocolate Chip Cookies",
    ingredients: ["1 cup all-purpose flour", "1/2 cup granulated sugar", "1/2 cup unsweetened cocoa powder", "1/4 cup milk", "2 large eggs", "1/2 teaspoon vanilla extract", "1/4 teaspoon baking soda", "1/4 teaspoon "],
    instructions: "Preheat oven to 350 degrees F (175 degrees C). Grease and flour a baking sheet."
}

recipe(myRecipe);

/**
 * REST PARAMETERS IN TYPESCRIPT
 */

// Just like in Javascript, TypesScript supports rest parameters by using the (...) syntax for the final parameter.
let albumFormats =[ "CD","LP","Cassette"]

const getAlbumFormatsonParameters = (album: Album, ...formats: Array<string>)=>{
    console.log(`The album ${album.title} sang by ${album.artist} is available in the following formats ${formats.join(',')}`);
}

getAlbumFormatsonParameters(
    { artist: "Otile Brown", title:"Just in love music", releaseYear:2020 },
    ...albumFormats
)

/**
 * THE VOID TYPE
 */
// some functions don't return anything.
// They perform some kind of action, but they don't prodice a value.
const logResult = console.log("Hello world") // This is TypeScript's way of saying "ignore the result of this function call".(void)

/**
 * TYPING ASYNC FUNCTION
 */
const getUser =  (id: string)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(id === "1"){
                resolve({id: "1", name: "John Doe"})
            }else{
                reject(new Error("User not found"))
            }
        }, 2000)
    })
}

// getUser(3) Typescript will tell us that the argument to be passed should be a string.

const getUser2 = async (id: string) : Promise<User> =>{
    try {
        let user = await getUser(id)
        return user
    } catch (error) {
        throw error
    }
}

getUser2("1") //will be correct TypeScript will now know that getUser2 returns a Promise<User>

/**
 *  PRACTICAL EXERCISES.
 */

// Optional Function Parameters.
const concatName = (first: string, last: string)=>{
    if(!last){
        return first;
    }
    return `${first} ${last}`;
}
const result2 = concatName("Emmanuel", "Getange"); // when calling concat with just a first name, we will get an error.
console.log(result2);