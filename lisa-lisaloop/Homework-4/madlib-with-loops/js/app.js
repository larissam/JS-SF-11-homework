// See instructions.md for instructions

const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Square'];


let randomFunc = function(){
    let rand = Math.floor((Math.random() * startupX.length));
    return rand
}


let createBtn = document.querySelector("#create");
let printEl = document.querySelector("#xForY");
// console.log("createBtn is ", createBtn);
// console.log("printNewEl is, ", printEl);


// adds a listener for clicks, to run the `createStartup` function
createBtn.addEventListener('click', function(e) {
    // console.log(random1);
    e.preventDefault();
    let randX = randomFunc();
    let randY = randomFunc();
    createStartup(startupX[randX], startupY[randY]);
});


function createStartup(startupX, startupY){
    //want to reset the string each button click
    let x = '';
    x = `A startup that is ${startupX}, but for ${startupY}`;
    printEl.innerHTML = x;
    
};

