let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

let currentMadlib = "";
let favouriteMadlibs = [];

// function declaration to create a new madlib and update the DOM
function createMadlib() {
    $("#xForY").fadeOut(function(){
        let random1 = Math.floor((Math.random() * startupX.length));
        let random2 = Math.floor((Math.random() * startupY.length));
        currentMadlib = '&ldquo; A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + " &rdquo;";
        $("#xForY").html(currentMadlib);
        $("#xForY").fadeIn();    
    });
}

// function to loop through all the favourites and output to DOM
function printMadlibFavourites() {
    let outputList = "<span>Favourites:</span><ul>";
    for(var i=0; i < favouriteMadlibs.length; i++) {
        outputList += "<li>" + favouriteMadlibs[i] + "</li>";
    }
    outputList += "</ul>";
    $("#favorites").fadeOut(function(){
        $("#favorites").html(outputList);
        $("#favorites").fadeIn();
    });
}

// function to let user know how many madlib favourites were saved.
function savedIndicator() {
    $("#savedIndicator").fadeOut(function(){
        let savedCount = favouriteMadlibs.length;
        $("#savedCount").html(savedCount);
        $("#savedIndicator").fadeIn();
    });
    
}

// On DOM ready
$(document).ready(function(){
    // create initial madlib & display it
    createMadlib();

    // ### Button Click Handlers ###
    // create a new madlib
    $("#create").click(function(){
        createMadlib();
    });

    // push current madlib into an array of favourites
    $("#save").click(function(){
        favouriteMadlibs.push(currentMadlib);
        savedIndicator();
        //console.log(favouriteMadlibs);
    });

    // loop through all the madlibs in the array of favourites and output in list
    $("#print").click(function(){
        printMadlibFavourites();
    });
    
});