// Create a customizable survey form.

// The index.html file includes a form, which contains 2 sample questions as 
// illustrations.
// A user should be able to type a survey question into the text box with the id 
// "question", click the Submit button, and the question
// should be added to the survey.
// When the user adds the question to the survey, it should be automatically 
// numbered and a text box should be added below it.
// Each survey question should also include a "Remove question" button that a user 
// can click to remove the question from the survey.

// 1. Write jQuery code that uses DOM manipulation to add a new sample question
//    to the DOM.

const newQuestionButton = $('#addQuestion');
const questionBox = $('#question');
const questionList = $('#surveyList');

// 2. Create an event listener that executes this code when a user enters text
//    in the Enter question box and clicks the Add to survey button
    // let newQuestion = questionBox.value;
    // var newQuestion = $('#question').val();

newQuestionButton.on('click', function(event) {
    event.preventDefault();
    let newQuestion = questionBox.val();
    let survey = {
        "question" : newQuestion,
      };
    let template;
    template = `
    <li class="form-group padout">
                <label>${survey.question}</label>
                <input type="text" class="form-control">
                <button>Remove question</button>
            </li>
`;
questionList.append(template)
});

// 3. Create an event listener for all Remove question buttons that removes the
//    button's parent li element when the button is clicked. 
//    (Hint: Research the jQuery .remove() method.)

    // $('form-group padout button').on('click', function {
    //     this(questionList.remove(template))

    let $remove = $('#surveyList button');
    
    $remove.on('click', function(e) {
        e.preventDefault();
        // let $questionSelect = $(this);
        $(this).parent().remove();
        $(this).siblings().remove();
        // $(this).removeClass('form-group padout')
        // $(this).siblings('li').remove();
        // $questionSelect.removeClass('li.form-group')
        console.log('does this work?')
    });

// 4. Create an event listener for all survey questions that adds the bg-warning
//    class value to the element in response to the mouseenter event, and
//    removes it in response to the mouseleave event. When the mouseenter event
//    happens, the bg-warning class should also be removed from all sibling
//    elements.

//   $('.form-group padout').on('mouseenter', function(e) {
//      e.preventDefault();
//       $(this).addClass('bg-warning');
//       console.log('supposed to turn yellow')
// //   }).on('mouseleave', function () {
// //     $(this).removeClass('bg-warning');
//   });
const $questionSelecter = $('#surveyList')

$questionSelecter.on('mouseenter', 'li', function(){
    $(this).addClass('bg-warning')
    $(this).siblings().removeClass('bg-warning');
    ////////////////////////////////////// CHAiNiNG EXAMPLE: line 79
    console.log('mouseenter event')
   }).on('mouseleave', 'li', function () {
     $(this).removeClass('bg-warning');
  });

// 5. Once your code is complete, identify at least one instance of event
//    delegation in your code and one instance of chaining.
//    Add comments to your code identifying each of theses.
//Line 79
// $(this).siblings();
// $(this).removeClass('bg-warning');

// Note: This project uses Bootstrap, which is a CSS framework that provides 
// prebuilt styles using class names. Make sure the new questions you add to the 
// survey use the same class names as in the sample form questions to take 
// advantage of Bootstrap styles.

