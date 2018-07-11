// Create a customizable survey form. The index.html file includes a form, which contains 2 sample questions as illustrations.

// A user should be able to type a survey question into the text box with the id "question", click the Submit button, and the question should be added to the survey. (append "li" and "form-group padout" classes when submit button is clicked)

//create references to the button, input box, and list
let addQuestion = document.querySelector("#addQuestion");
console.log("add question: ", addQuestion);
let questionInput = document.querySelector("#question");
console.log("question input: ", questionInput);
let finalSurvey = document.querySelector("#finalSurvey");
console.log("final survey ", finalSurvey);

// CREATE EVENT LISTENER - Submit Button
addQuestion.addEventListener("click", function() { //adds an event when user clicks on addQuestion button
    let text = questionInput.value; //text value entered by user into questionInput gets stored
    console.log("text: ", text); //text entered by user appears in console, but disappears immediately?
    let questionItem = document.createElement("li"); //li element is created, referred to as "questionItem"
    questionItem.className = "form-group padout"; //questionItem gets class "form-group padout"
    //create text node
    let questionText = document.createTextNode(text);//text entered by user appears on page, but disappears immediately?
    //attach text node to list
    questionItem.appendChild(questionText);
    finalSurvey.appendChild(questionItem);

    console.log()

    //reset value to empty string
    questionInput.value = '';
}, false);
//END FUNCTION



//LIZ

// //select the input field, input value, button 
// let $question = $('input');
// console.log('input field:', $question);

// let $addQuestion = $('#addQuestion');
// console.log('add question:', $addQuestion);

// function values(){
//     console.log($('#question').val());
// };
// // add new sample question to DOM 
// $addQuestion.on('click', function(event) {
//     event.preventDefault();
//     const newQuestion = $question.val();
//     $('#surveyList').append('<li>'+newQuestion+'</li>');
//     $('li').append('<label></label');
//   });

//add label, input type, and button 
//LIZ

// When the user adds the question to the survey, it should be automatically numbered and a text box should be added below it. ("li")

// Each survey question should also include a "Remove question" button that a user can click to remove the question from the survey. 

// 1. Write jQuery code that uses DOM manipulation to add a new sample question
//    to the DOM.
// 2. Create an event listener that executes this code when a user enters text
//    in the Enter question box and clicks the Add to survey button.
// 3. Create an event listener for all Remove question buttons that removes the
//    button's parent li element when the button is clicked. 
//    (Hint: Research the jQuery .remove() method.)
// 4. Create an event listener for all survey questions that adds the bg-warning
//    class value to the element in response to the mouseenter event, and
//    removes it in response to the mouseleave event. When the mouseenter event
//    happens, the bg-warning class should also be removed from all sibling
//    elements.
// 5. Once your code is complete, identify at least one instance of event
//    delegation in your code and one instance of chaining.
//    Add comments to your code identifying each of theses.

// Note: This project uses Bootstrap, which is a CSS framework that provides 
// prebuilt styles using class names. Make sure the new questions you add to the 
// survey use the same class names as in the sample form questions to take 
// advantage of Bootstrap styles.
