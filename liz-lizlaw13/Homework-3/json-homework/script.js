// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

module.exports = function(robot) {
  //  YOUR CODE HERE

   robot.hear(/scared/i, function(res) {
    return res.emote('never let the fear of striking out keep you from playing the game- a cinderella story');
  });

   robot.hear(/insecure/i, function(res) {
     return res.emote("you is kind. you is smart. you is important- the help");
   });
   robot.hear(/old/i, function(res) { 
    return res.emote("if you are 30... don't worry... you are 30... flirty... AND thriving- 13 going on 30");
  });

  robot.hear(/beautiful/i, function(res) { 
    return res.emote("did you know that according to the movie donnie darko... cellar door is the most beautiful combination of words in the english language?");
  });
  robot.hear(/ugly/i, function(res){
    return res.emote("you are not ugly, you are more beautiful than cinderalla- bridesmaids ")
  });
}

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

/* Variables for random example */

// const squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

// module.exports = function(robot) {
//   /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
//   return robot.respond(/hi|hello/i, function(msg) {
//     return msg.send("Howdy!");
//   });

  /* Random Example
  If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
  // return robot.hear(/ship it/i, function(msg) {
  //   return msg.send(msg.random(squirrels));
  // }); 
