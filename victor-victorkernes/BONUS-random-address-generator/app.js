/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

// let address = [streetNumber, streetName, cityName, stateName, zipCode];

// function randomAddress () {
//     let streetNumber = [212, 333, 743, 890];
//     let streetName = ["Ace", "Ventura", "Ocean", "Squirrel"];
//     let cityName = ["Santa Maria", "Santa Monica", "Santa Barbara", "Goleta"];
//     let stateName = ["CA", "NV", "CO", "WA"];
//     let zipCode = ["93454", "76830", "38495", "21934"];

//     return [
//         console.log(
//             streetNumber[Math.floor(Math.random() * streetNumber.length)],
//             streetName[Math.floor(Math.random() * streetName.length)],
//             cityName[Math.floor(Math.random() * cityName.length)],
//             stateName[Math.floor(Math.random() * stateName.length)],
//             zipCode[Math.floor(Math.random() * zipCode.length)],
//         )
//     ]
// }

// randomAddress();
function getRandomIndex (array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomAddress () {
    let streetNumber = [212, 333, 743, 890];
    let streetName = ["Ace", "Ventura", "Ocean", "Squirrel"];
    let cityName = ["Santa Maria", "Santa Monica", "Santa Barbara", "Goleta"];
    let stateName = ["CA", "NV", "CO", "WA"];
    let zipCode = ["93454", "76830", "38495", "21934"];

    console.log(`Random street: ${getRandomIndex(streetNumber)} ${getRandomIndex(streetName)} ${getRandomIndex(cityName)} ${getRandomIndex(stateName)} ${getRandomIndex(zipCode)}`)
}

randomAddress();
// let randomAddress = address[Math.floor(Math.random()*address.length)];



    // Grab item from each array and goes through loop checking each array for random index.

// function randomAddressGenerator() {
//    
// }
// for randomAddressGenerator(i = 0; i >= 5; i++) {
//     // Check each individual array
    
// }

// function randomAddressGenerator() {
//     streetNumber[Math.floor(Math.random() * streetNumber.length)];
//     return randomAddressGenerator();
// }
// console.log(randomAddressGenerator);



// let randomAddressGenerator = function() {
//     console.log(randomAddress.values());
//     [Math.floor(Math.random() * streetNumber.length)];
// }
// console.log(randomAddressGenerator);

// for (i = 0; i < streetNumber.length; i++) {
//     let randomAddressGenerator = streetNumber[Math.floor(Math.random() * streetNumber.length)];
//     console.log(randomAddressGenerator);
// }


// for (i = 0; i < randomAddress.length; i++) {
//     let randomAddressGenerator = randomAddress[Math.floor(Math.random()* randomAddress.length)];
//     console.log(randomAddressGenerator);
// }