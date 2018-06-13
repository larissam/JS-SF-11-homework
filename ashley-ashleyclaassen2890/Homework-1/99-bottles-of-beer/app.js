/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: Each console.log will place your statement on a new line.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/
var number = 100;
function singItAgain(){
  number -= 1
  if (number > 0){
    var bottles = number>1?'bottles':'bottle';
    document.body.innerHTML +=
      number+' '+bottles+' of beer on the wall, '+'<br>'+
      number+' '+bottles+' of beer.'+'<br>'+
      'Take one down, pass it around, '+'<br>'+
      number+' '+bottles+' of beer on the wall.'+'<br>'+
      '<br>';
    singItAgain()
  }
}
singItAgain()



