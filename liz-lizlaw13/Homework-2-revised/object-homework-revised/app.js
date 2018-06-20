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
// 'calendar'
// description: browswer based calendar program for keeping track of events 
// every 'calendar' has
// - 12 months 
// - lists phases of the moon 
// every 'browser based calendar' can 
// - schedule events : all day? specific time? , invite other people? add a description 
// - set reminders : recurrent? one time? , add a description 
// - show different view settings : day, week, month, year 

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
  months: 12,
  moonPhases: ['last moon', 'full moon', 'new moon', 'first moon'],
  color: ['black', 'blue', 'orange'],
  view: ['day', 'week', 'month', 'year'],
  viewDay: function(){
    console.log(calendar.view[0]);
  },
  colorBlue: function(){
    console.log(calendar.color[1]);
  }
}; 
console.log(calendar);
calendar.viewDay();
calendar.colorBlue();

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
let some_animal= {
  name: 'Felicia',
  species: 'Dog',
  weight: '60',
  origin: 'California',
  foodsEaten: ['Beef', 'Corn', 'Chicken'],
  sleepNeeds: '12',
  noise: 'Woof',
  makeNoise: function(){
    console.log(some_animal.noise);
  },
  eat: function(food){
    some_animal.foodsEaten.push('Celery')
},
  sleepGets: function(){
    console.log(some_animal.sleepNeeds - 3);
  },
}
console.log(some_animal);
some_animal.eat('Celery');
some_animal.makeNoise();
some_animal.sleepGets();
// Answer Ends Here