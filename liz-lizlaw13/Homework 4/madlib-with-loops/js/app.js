// See instructions.md for instructions


//create a variable for when user clicks on button
const create = document.querySelector('#create');
console.log('create:', create);
//replace XforY text
create.addEventListener('click', function(){
    const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    const random1 = Math.floor((Math.random() * startupX.length));
    const random2 = Math.floor((Math.random() * startupY.length));

    document.getElementById('xForY').innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
});