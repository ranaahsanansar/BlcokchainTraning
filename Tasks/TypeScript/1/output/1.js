"use strict";
let firstName = "Dylan"; // type string
firstName = "Bhao"; // attempts to re-assign the value to a different type 
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
