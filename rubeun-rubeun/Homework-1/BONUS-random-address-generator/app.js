/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

let streetNumber = ["99", "1111", "404", "101", "666"];
let streetName = ["Market Street", "Sunset Boulevard", "Sycamore Street", "Bush Street", "Lombard Street", "Main Street"];
let cityName = ["San Francisco", "Los Angeles", "New York", "Seattle"];
let stateName = ["CA", "WA", "NY"];
let zipcode = ["94110", "94105", "90069", "10118", "11201"];

function randomNumberGenerator(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomAddress() {
    let streetAddress = "";
    streetAddress += streetNumber[randomNumberGenerator(streetNumber.length)] + " ";
    streetAddress += streetName[randomNumberGenerator(streetName.length)] + ", ";
    streetAddress += cityName[randomNumberGenerator(cityName.length)] + " ";
    streetAddress += stateName[randomNumberGenerator(stateName.length)] + ", ";
    streetAddress += zipcode[randomNumberGenerator(zipcode.length)];
    console.log(streetAddress);
}

randomAddress();