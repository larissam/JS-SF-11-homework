/*
1. Each line of the song should appear inside of a list item (<li>) within that unordered list.
2. Your JavaScript file should programatically append each line of the song to the page.
3. Code this project using vanilla JavaScript methods.
4. Then refactor your code to use jQuery instead (preserving your original code in comments)
*/

// //create new element
// document.createElement("li");

// //select <li> in the DOM and assign class  
// document.querySelectorAll("li"); //selects all <li>


let list = document.querySelector(‘ul’); // selects ul element
list.appendChild(item1);    // adds item1 li to list ul
list.appendChild(item2);    // adds item2 li to list ul


//remove 1 bottle 
for (var i = 98; i >= 1; i--) {
//log remaining bottles
  console.log( i + 1 + " bottles of beer on the wall, " + (i + 1) + " bottles of beer! " + " Take one down, pass it around, " + i + " bottles of beer on the wall!");
};
