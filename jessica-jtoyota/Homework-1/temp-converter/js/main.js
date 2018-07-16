// 1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
//    Note: Equation to convert F to C:
//    C = (F - 32) / 1.8
//    Test your function.

function convertF(f) {
    c = (f-32)/1.8;
    return c;
}

console.log(convertF(96));

// 2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
//    Note: Equation to convert C to F:
//    F = 1.8 * C + 32
//    Test your function.

function convertC(c) {
    f = 1.8 * c+32
    return f;
}

console.log(convertC(32));

// BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
// 	1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.   
// 	    (Hint: use jQuery)
// 	2.  Set the appropriate function to run when each button is clicked.
// 	    (Hint: use jQuery)

// BONUS 2: Display the result of each calculation in the browser window rather than in the console:
// 	1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.

// BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)

$('#fahrenheit_to_celsius').on('click', function(){
    let f = $('#temperature').val();
    $('#result').text(convertF(f));
    $('#temperature').val('');
});

$('#celsius_to_fahrenheit').on('click', function(){
    let c = $('#temperature').val();
    $('#result').text(convertC(c));
    $('#temperature').val('');
});