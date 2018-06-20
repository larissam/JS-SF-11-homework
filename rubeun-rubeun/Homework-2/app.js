// Write your answers inside this file, at the places where it's indicated by the comments.


// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. 
// In comments, list at least three reasonable abstractions that you might use to build this program.
  // (ie. "What types of objects would you have in this program? A calendar? A user? A week?")
// For each abstraction, list out at least two properties or behaviors that it would make sense for that abstraction to have. 
// Below is an example - please write your answer in the same format.
  // 'car'
  // description: our app manages car sales.
  // every 'car' has
  // - a make
  // - a model
  // - a year
  // every 'car' can
  // - drive
  // - brake
  // - park





// Answer Starts Here
// calendar stores task date/time/description in arrays
// taskIndex to keep an index of tasks in number format
// taskDate format YYYYMMDD
// taskTime format HHMM in 24hrs
// taskDescription is a string.
// METHODS:
// addTask, editTask & deleteTask edits tasks
// viewDay, viewWeek, viewMonth & viewYear displays all tasks within calendar span requested

'calendar'
description: our app manages an online calendar
every 'calendar' has
- taskIndex
- taskDate
- taskTime
- taskDescription
every 'calendar' can
- addTask
- editTask
- deleteTask
- viewDay
- //viewWeek /* A bit overkill maybe */
- //viewMonth
- //viewYear




// Answer Ends Here


// 2. Create an object literal that represents your calendar program.
// For example:
  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

  // let pet_owner = {
  //   name: 'Bob',
  //   address: '225 Bush St, San Francisco, CA 94104'
  // };





// Answer Starts Here

let calendar = {
  taskIndex: [0, 1],
  taskDate: [20180619, 20180621],
  taskTime: [1830, 1830],
  taskDescription: ["Javascript Class 6", "Javascript Class 7"],
  addTask: function(newDate, newTime, newDescription) {
    this.taskDate.push(newDate);
    this.taskTime.push(newTime);
    this.taskDescription.push(newDescription);
  },
  editTask: function(selectedIndex, updatedDescription) {
    this.taskDescription[selectedIndex] = updatedDescription;
  },
  deleteTask: function(selectedIndex) {
    this.taskDate.splice(selectedIndex, 1);
    this.taskTime.splice(selectedIndex, 1);
    this.taskDescription.splice(selectedIndex, 1);
    this.taskIndex--;
  },
  viewDay: function(selectedDate) {
    let dateIndices = []; // all indices matching date
    // search all matching dates, output taskDescriptions associated with that date
    for (let i = 0; i < this.taskDate.length; i++) {
      if (selectedDate === this.taskDate[i]) {
        console.log(this.taskDescription[i]);
      }
    }
  }
  //viewWeek: function(startDate, endDate) /* Maybe more than necesarry for this assignment */



// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_animal`, below.

  // Animal
  // Description: We are making an app for a zoo - it manages animals' information
  // Every animal has:
  // - a name
  // - a species
  // - a weight
  // - a place it is originally from (eg. 'Africa', 'Antarctica')
  // - a list of food it eats (eg. 'chicken', 'beef', and 'fish')
  // - an amount of sleep it needs
  // - a noise that it can make (e.g. 'howl')
  // Every animal can:
  // - eat
  // - sleep
  // - make noise (each animal makes its own unique noise, as specified by `noise`.

  // Example:
  // let some_pet = {
  //   name: 'Mint',
  //   species: 'cat',
  //   breed: 'persian',
  //   noise: 'meow',
  //   makeNoise: function() {
  //     console.log(some_pet.noise);
  //   }
  // };




// Answer Starts Here
let some_animal = {
  name: "Skippy",
  species: "Kangaroo",
  weight: 200,
  origin: "Australia",
  diet: "grass",
  sleep: 8,
  noise: "cluck",
  eat: function() {
    console.log("eating " + some_animal.diet);
    some_animal.weight++;
  },
  sleep: function() {
    console.log("sleeping...see you in " + some_animal.sleep + " hours!");
  },
  makeNoise: function() {
    console.log(some_animal.noise);
  } 
}




// Answer Ends Here