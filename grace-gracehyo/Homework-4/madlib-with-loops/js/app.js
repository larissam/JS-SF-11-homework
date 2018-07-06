// See instructions.md for instructions
function randomStartup (){
const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

const random1 = Math.floor((Math.random() * startupX.length));
const random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
}


// Your job is to add code to the JavaScript file that makes the "Create new startup" button work. 
// Basically, when the user clicks that buttons, your JavaScript should generate a new madlib saying, 
// which should appear inside the `XforY` h1.

//   * In order to complete this task, you will need to know a little bit about DOM manipulation. 
//   * If this isn't something you've covered yet in class, you may want to wait until 
//   * you've covered DOM manipulation before you try to tackle this exercise. If, however, 
//   * you'd like to get a head start, feel free to [check out this tutorial]
//   * (http://www.javascriptkit.com/javatutors/dom2.shtml), 
//   * which should contain everything you need to get started.

/* <h1 id="xForY"></h1>

<div id="inputs">
  <button id="create">Create New Startup</button>
  <button id="save">Favorite Startup</button>
  <button id="print">Print Favorites</button>
</div> */

// let results = document.createElement('h1');
// results.textContent =  console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);;
// // sidebar.appendChild(results);


//   function results(h1) {
//       const $

//   }

// let results = document.createElement('#XforY');
// function showResults() {

// }

const favorite = [];

$('#create').on('click', function (){
    const startup = randomStartup();
    $('#xForY').text(startup);
});

startup();