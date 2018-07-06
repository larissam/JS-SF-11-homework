// See instructions.md for instructions

const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

const random1 = Math.floor((Math.random() * startupX.length));
const random2 = Math.floor((Math.random() * startupY.length));


let createBtn = document.querySelector('#create');
let randomStartup = $('#xForY');

// createBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     randomStartup.text('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
//     console.log(random1, random2);
// });
// console.log(random1, random2);

createBtn.onclick = function () {
    const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    const random1 = Math.floor((Math.random() * startupX.length));
    const random2 = Math.floor((Math.random() * startupY.length));
    $('#xForY').text('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
};