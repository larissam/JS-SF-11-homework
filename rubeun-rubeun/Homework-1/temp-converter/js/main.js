// 1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
//    Note: Equation to convert F to C:
//    C = (F - 32) / 1.8
//    Test your function.
function convertToCelsius(temp) {
    return Math.round((temp - 32) / 1.8);
}



// 2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
//    Note: Equation to convert C to F:
//    F = 1.8 * C + 32
//    Test your function.
function convertToFahrenheit(temp) {
    return Math.round((1.8 * temp) + 32);
}


function outputConverted(temp, unit) {
    let outputUnit = "";
    if (unit === "F") {
        outputUnit = " &#8457;";
    } else if (unit === "C") {
        outputUnit = " &#8451;";
    } else {
        console.error("Invalid Unit to outputConverted");
    }
    $("#result").html("Result: " + temp + outputUnit);
    $("#temperature").val("").focus(); // clear input box contents & focus cursor to it
}

function outputError(message) {
    $("#result").html(message);
    $("#temperature").val("").focus(); // clear input box contents & focus cursor to it    
}


// BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
// 	1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.   
// 	    (Hint: use jQuery)
// 	2.  Set the appropriate function to run when each button is clicked.
// 	    (Hint: use jQuery)

// BONUS 2: Display the result of each calculation in the browser window rather than in the console:
// 	1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.

// BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)

// On DOM ready
$(document).ready(function(){

    // click handler for F to C button
    $("#fahrenheit_to_celsius").click(function(){
        if ($("#temperature").val() === '') { // checks if no input given
            outputError("Please enter temperature to be converted");
        } else {
            let inputTemp = $("#temperature").val();
            let outputTemp = convertToCelsius(inputTemp);
            outputConverted(outputTemp, "C");
        }
    });
    // click handler to C to F button
    $("#celsius_to_fahrenheit").click(function(){
        if ($("#temperature").val() === '') { // checks if no input given
            outputError("Please enter temperature to be converted");
        } else {
            let inputTemp = $("#temperature").val();
            let outputTemp = convertToFahrenheit(inputTemp);
            outputConverted(outputTemp, "F");
        }        
    });

});
