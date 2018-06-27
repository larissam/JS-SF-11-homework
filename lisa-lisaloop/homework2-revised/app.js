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
// When creating my browser-based calendar program I'd probably want:
// A calendar with properties
//   - day
//   - month
//   - year 
//   - current day
// and methods
//   - 
//   - schedule an event
// An event with properties
//    - day
//    - time
//    - event title
//    - send notifications
// and method
//    - send notification alert



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
// let calendar {
//     day: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"],
//     month: ["January","February","April","May"], //etc...
//     currentMonth: "June",
//     numDaysOfCurrentMonth: 30,
//     dayOfMonth: [1, 2, 3, 4, 5, 6], //to end of numDaysOfCurrentMonth (30)
//     counter: function(){
      //counts days and increments by 1 every 24 hours
      // when numDaysOfCurrentMonth === dayOfMonth 
      // start counting again on next month
//     }

// }


// let event {
//   eventTitle: "JavaScript Class", // string
//   isRecurring: true,
//   days: ["Tuesday","Thursday"],
//   time: "6:30pm",
//   sendNotification: true,
//   notification: function() {
//     //if event is upcoming alert user
//   }
// }

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

// Answer Starts Here
// let some_animal {
//  name: 'Paul',
//  species: 'Dik dik',
//  weight: 150,
//  placeOfOrigin: 'Africa',
//  foods: ["grass","bark","leaves"],
//  hoursOfSleepNeededPerDay: 10,
//  noise: "grunt grunt",
//  eat: function(){
//    console.log("nom nom nom")
//}, 
// sleep: function(){
//  console.log("zZZzz")
//},
// makeNoise: function(){
//  console.log(some_animal.noise);
//}
//  
//}




// Answer Ends Here