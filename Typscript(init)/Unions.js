"use strict";
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
// Exercise 2: Restricting function parameters.
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
