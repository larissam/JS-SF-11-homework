/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: Each console.log will place your statement on a new line.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

    // var sub = 0;

    // for (var num = 99; num >= 0; num--) {
    //   if (num > 2) {
    //     sub = num - 1;
    //       console.log(num + " bottles of beer on the wall! " + num + 
    //       " bottles of beer! Take one down, pass it around... " + sub + 
    //       " bottles of beer on the wall!");
    //   }
    //   else if (num === 2){
    //     sub = num - 1;
    //       console.log(num + " bottles of beer on the wall! " + num + 
    //       " bottles of beer! Take one down, pass it around... " + sub +
    //       " bottles of beer on the wall!");
    //   }
    //   else if (num === 1) {
    //       sub = num - 1;
    //       console.log(num + " bottles of beer on the wall! " + num + 
    //       " bottles of beer! Take one down, pass it around... " + sub +
    //       " bottles of beer on the wall!");
    //   }
    // }

    var sub;
    for (var num = 99; num >= 0; num--) {
      sub = num - 1;
      console.log(num + " bottles of beer on the wall! " + num + 
          " bottles of beer! Take one down, pass it around... " + sub +
          " bottles of beer on the wall!");
    }

