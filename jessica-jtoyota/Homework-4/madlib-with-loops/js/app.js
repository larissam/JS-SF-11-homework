// See instructions.md for instructions

const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
let mystartup
let favorites = [];

$('#create').on('click', function () {
    const random1 = Math.floor((Math.random() * startupX.length));
    const random2 = Math.floor((Math.random() * startupY.length));
    mystartup = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]
    $('h1').html(mystartup);
});

$('#save').on('click', function () {
    favorites.push(mystartup);
});


// I know there is a bettet way to do this part, but I coulldn't figure out by myself
$('#print').on('click', function() {
    favorites.forEach(function(item){
        $('ul').append("<h2 class='favorite'>" + item + "</h2>");
    });
});

