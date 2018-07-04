/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. 
Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

1) Write down pseudocode for the program described below.

Function: Roll a die 
    - get random number from 1 to 6

Click Handler: On Click 
    - call Roll a die function twice 
    - change class of each die to reflect the new numbers on the page

2) Follow the steps in your pseudocode to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate another random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie
* get the first die by ID and update the CSS class name to firstDie 
* get the first die by ID and update the CSS class name to secondDie 

3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked.

*/

function rollDie() {
    //console.log(Math.floor(Math.random() * 6) + 1)
    return Math.floor(Math.random() * 6) + 1;
}

document.querySelector("#roll-dice").addEventListener("click", function(event){
    event.preventDefault();
    let random1 = rollDie();
    let random2 = rollDie();
    console.log("First die: " + random1 + " Second die: " + random2);
    document.querySelector("#first-die").className = "dice dice-" + random1;
    document.querySelector("#second-die").className = "dice dice-" + random2;

});