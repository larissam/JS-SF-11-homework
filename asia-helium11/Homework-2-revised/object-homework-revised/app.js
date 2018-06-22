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

  'calendar'
  description: our app manages car sales.
  every 'calendar' has
  - a user
  - days,
  - memos,
  every 'calendar' can
  - record,
  - remind,
  - reschedule,

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
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  description: "A calendar: so you don't have to.",
  makeMemo: function() {
    console.log("Whatever the user needs to remember");
  }
};



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

some_animal = {
  name: 'Panda',
  species: 'Panda?',
  weight: 300,
  origin: "Panda Town",
  food: "bamboo",
  sleepTime: "always",
  noise: "nomnomnom",
  eatFood: function() {
    console.log(some_animal.food);
  }
  sleepTime: function() {
    console.log(some_animal.sleep);
  }
  makeNoise: function() {
    console.log(some_animal.noise);
  }
};




// Answer Ends Here