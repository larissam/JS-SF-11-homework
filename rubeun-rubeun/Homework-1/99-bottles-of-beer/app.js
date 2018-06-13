/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: Each console.log will place your statement on a new line.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

// Function declaration to return verses from 99 bottles of beers. Input: number of beers.
function bottlesOfBeer(numBeers) {
  let firstLine = "";
  let secondLine = "";
  
  if (numBeers === 0) { // 0 beers
    firstLine = "No more bottles of beer on the wall, no more bottles of beer.\n";
    secondLine = "Go to the store and buy some more, 99 bottles of beer on the wall.\n\n";
  } else if (numBeers === 1) { // 1 beer
    firstLine = "1 bottle of beer on the wall, 1 bottle of beer.\n";
    secondLine = "Take one down and pass it around, no more bottles of beer on the wall.\n\n";
  } else if ((numBeers < 100) && (numBeers > 1)) { // 1 to 99 beers
    firstLine = numBeers + " bottles of beer on the wall, " + numBeers + " bottles of beer.\n";
    if (numBeers === 2) { // if next numBeers is 1, switch wording to bottle instead of bottles
      secondLine = "Take one down and pass it around, 1 bottle of beer on the wall.\n\n";
    } else {
      secondLine = "Take one down and pass it around, " + (numBeers - 1) + " bottles of beer on the wall.\n\n";
    }
  } else { // error on any input other than 0-99
    console.error("Invalid number of beers!");
  }
  return firstLine + secondLine;
}

for (var i = 99; i >= 0; i--) {
  console.log(bottlesOfBeer(i));
}


