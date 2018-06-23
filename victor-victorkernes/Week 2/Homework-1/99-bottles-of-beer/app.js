/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: Each console.log will place your statement on a new line.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/
for (i = 99; i >= 1; i--) {
  if (i < 2) {
    // i less than 2, print out bottle
    console.log(i, "bottle of beer on the wall.");
  } else {
    console.log(i, "bottles of beer on the wall.");
  }
}

// const bottlePluralized = i > 1 ? 'bottles' : 'bottle';
//   console.log(`${i} ${bottlePluralized} of beer on the wall`)





