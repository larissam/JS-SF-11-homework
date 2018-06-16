/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

let number = ['39', '48', '50', '162', '212', '230'];
let street = ['Market St', 'Broadway St', 'Oak St', 'Pine St', 'Maple St', 'Cedar St'];
let city = ['San Francisco', 'Philadelphia', 'Los Angeles', 'Boston', 'Richmond', 'New Orleans'];
let state = ['CA', 'PA', 'LA', 'MA', 'VA', 'LA'];
let zip = ['94123', '94115', '94115', '94109', '94102', '94102'];

function address(number, street, city, state, zip) {
    console.log(number + ' ' + street + ', ' + city + ' ' + state + ', ' + zip);
}

address(number[Math.floor(Math.random()* number.length)], street[Math.floor(Math.random()* street.length)], city[Math.floor(Math.random()* city.length)], state[Math.floor(Math.random()* state.length)], zip[Math.floor(Math.random()* zip.length)]);