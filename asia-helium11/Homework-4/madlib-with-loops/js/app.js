// See instructions.md for instructions
//Your job is to add code to the JavaScript file that makes the "Create new startup" button work. Basically, when the user clicks that button, your JavaScript should generate a new madlib saying, which should appear inside the `XforY` h1.


//create references to 3 Buttons
const createStartup = document.querySelector("#create");

//create function for each button

createStartup.addEventListener("click", function(event) {
    //get random text value from startupX
    //get random text value from startupY

//arrays to pull from
const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

const random1 = Math.floor((Math.random() * startupX.length));
const random2 = Math.floor((Math.random() * startupY.length));

//print
console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

document.getElementById("xForY").innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
});
