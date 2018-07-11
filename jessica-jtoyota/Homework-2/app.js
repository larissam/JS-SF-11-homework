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

  // 'holidays'
  // description: manages holidays date
  // every holiday has
  // - name
  // - date
  // - type (international, national, local)
  // every holiday can
  // - be asigned to a date

  // 'to do list'
  // description: tracks tasks
  // every 'to do' has
  // - description
  // - due date
  // - priority
  // - status
  // every 'to do' can
  // - be created
  // - be deleted
  // - be edited
  // - be duplicated

  // 'meeting'
  // description: manages scheduled meetings
  //every guet has
  // - name
  // - description
  // - date
  // - time
  // - participants
  // - location
  // every meeting can
  // - be created
  // - be deleted
  // - be added
  // - be duplicated


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

  // 'holidays'
  // description: manages holidays date
  // every holiday has
  // - name
  // - date
  // - type (international, national, local)

  // let holiday = {
  //   name: 'Christmas',
  //   day: 25,
  //   month: 12,
  //   type: 'national',
  // };

  // 'to do list'
  // description: tracks tasks
  // every 'to do' has
  // - description
  // - due date
  // - priority
  // - status

// let to_do =  {
//   description: 'Send status report',
//   due_day: 5,
//   due_month: 7,  
//   due_year: 2018,
//   priority: 1,
//   status: 'not started',
// }

  // 'meeting'
  // description: manages scheduled meetings
  //every guet has
  // - name
  // - description
  // - date
  // - time
  // - duration
  // - participants
  // - location

  // let meeting = {
  //   name: 'design review',
  //   description: 'groups discussion of works in progress',
  //   day: 20,
  //   month: 7,
  //   year: 2018,
  //   duration: 1,
  //   participants: ['John', 'Jane', 'Alex'],
  //   location: '225 Bush St.',
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




// Answer Starts Here
//  let some_animal = {
//    name: 'Kawaii',
//    species: 'canine',
//    weight: 15,
//    origin: 'Cuba',
//    foods: ['kibble', 'treats'],
//    sleep_hours: 14,
//    noise: 'bark',
//    makeNoise: function () {
//      console.log(bark);
//    }
//  };

// Answer Ends Here