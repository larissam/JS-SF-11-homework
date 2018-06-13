let startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Snapchat', 'Medium', 'AirBnB'];
let startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Bitmoji', 'Lyft', 'MailChimp'];
let startup
let allFavorites = [];

$('#create').on('click', function() {
    let random1 = Math.floor((Math.random() * startupX.length));
    let random2 = Math.floor((Math.random() * startupY.length));
    startup = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
    $('#xForY').text(startup);
});

$('#save').on('click', function() {
    allFavorites.push(startup);
});

$('#print').on('click', function() {
    $('#favorites').text(allFavorites);
});
