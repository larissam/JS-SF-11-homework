let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let random1 = Math.floor((Math.random() * startupX.length));
let random2 = Math.floor((Math.random() * startupY.length));

let createNewEl = document.querySelector("#create");
let printEl = document.querySelector("#xForY");
// console.log("createNewEl is ", createNewEl);
// console.log("printNewEl is, ", printEl);


// adds a listener for clicks, to run the `createStartup` function
createNewEl.addEventListener('click', function () {
    createStartup(startupX[random1], startupY[random2]);
});


function createStartup(startupX, startupY){
    //want to reset the string each button click
    let x = `A startup that is ${startupX}, but for ${startupY}`;
    printEl.innerHTML = x;
    
};


