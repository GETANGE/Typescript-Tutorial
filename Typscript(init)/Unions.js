"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union type is  => Typescript  way of saying that a value can be "either this type or that type"
const message = Date.now() % 2 === 0 ? 'Hello, Tuesdays!' : null; // this means that the message can either be a string or null.
console.log(message);
const add = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        throw new Error('Both inputs must be of the same type');
    }
};
console.log(add(1, 2)); // expected output: 3
const logId = (id) => {
    console.log(`User ID: ${id}`);
};
logId(38808187); // expected output: User ID: 38808187
logId(true);
/**
 * A flexible type that can represent different kinds of values:
 * - `string`: The value can be a string, such as `"hello"`.
 * - `number`: The value can be a number, like `42` or `3.14`.
 * - `boolean`: The value can be a boolean, either `true` or `false`.
 * - `object`: The value can be a generic object, such as `{}` or `{ key: "value" }`.
 * - `null`: The value can explicitly be `null`, indicating no value.
 * - `{ name: string; age: number; }`: The value can also be a specific object with two required properties:
 *    - `name`: A string representing the name (e.g., `"Alice"`).
 *    - `age`: A number representing the age (e.g., `25`).
 *
 * @typedef {string | number | boolean | object | null | { name: string, age: number }} AllSortsOfStuff
 */
/**
 * Example function that accepts an `AllSortsOfStuff` type as input.
 * It can be a string, number, boolean, object, null, or a specific object with `name` and `age`.
 *
 * @param {AllSortsOfStuff} value - The value that can be of various types defined in the AllSortsOfStuff type.
 */
function handleValue(value) {
    console.log(value);
}
handleValue({ name: "Emmanuel", age: "23" }); // age has been assigned a string value.
const getAlbumFormats = (album) => {
    if (typeof album === 'string' || typeof album === 'number') {
        return 'Audio';
    }
    else if (typeof album === 'boolean') {
        return 'CD';
    }
    else {
        return 'Unknown';
    }
};
console.log(getAlbumFormats('AC/DC')); // expected output: 'Audio'
console.log(getAlbumFormats(1980)); // expected output: 'Audio'
console.log(getAlbumFormats(true)); // expected output: 'CD'
/**
 * MAIN EXERCISES
 */
// Exercise 1: String of Null
const getUsername = (username) => {
    if (username !== null) {
        return `Username: ${username}`;
    }
    else {
        return 'Guest';
    }
};
console.log(getUsername('Emmanuel')); // expected output: 'Username: Emmanuel'
console.log(getUsername(null)); // expected output: 'Guest'
const move = (direction, distance) => {
    if (typeof direction !== 'string' || typeof distance !== 'number') {
        throw new Error('Both direction and distance must be of type string and number');
    }
    console.log(`Moving ${distance} units in the ${direction} direction`);
};
move('up', 10); // expected output: Moving 10 units in the up direction
move('left', 20); // expected output: Moving 20 units in the left direction
// move('right', '10') // expected error: Both direction and distance must be of type string and number
move('down', 30); // expected output: Moving 10 units in the down direction
/**
 * NARROWING
 * Wider vs Narrower Types
 * Some types are wider versions of other types
 * Literal Types: Literal types in TypeScript are specific values. For example:

    -"small" is a literal string type, meaning it can only represent the value "small".
    -42 is a literal number type, meaning it can only represent the number 42.
    -true is a literal boolean type, meaning it can only represent true.
    -Wider Types: These are more general types that can represent a broader range of values. For example:

    -string can represent any string, not just "small".
    -number can represent any number, not just 42.
    -boolean can represent both true and false.
 */
const logSize = (size) => {
    console.log(size.toUpperCase());
};
logSize('small'); // expected output: SMALL
// if a function accepts only "small" we cannot pass any random string.
const recordOfSizes = {
    small: 'Small',
    large: 'Large',
};
const logSize2 = (size) => {
    console.log(recordOfSizes[size]);
};
logSize2('small'); // expected output: Small but got "undefined" instead
// Unions are  Wider Than their members
const logId3 = (id) => {
    console.log(`User ID: ${id}`);
};
logId3(38808187); // expected output: User ID: 38808187
logId3(true); // expected output: User ID: true
logId3("abc");
const user = {
    id: 38808187,
};
const logId4 = (id) => {
    console.log(`User ID: ${id}`);
};
logId4(user.id);
const getStudentInfo = (stdInfo) => {
    console.log(`Name: ${stdInfo.name}, Age: ${stdInfo.age}, Address: ${stdInfo.address}`);
};
let student = {
    name: 'Emmanuel',
    age: 23,
    address: 'Nyeri View'
};
getStudentInfo(student); // expected output: Name: Emmanuel, Age: 23, Grade: A
