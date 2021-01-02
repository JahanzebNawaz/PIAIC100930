// Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let firstNumber = parseInt(prompt("Enter First Number"));
let secondNumber = parseInt(prompt("Enter Second Number"));


document.write("<b>=====================================</b> <br>" );
document.write("<b> Addition: " + (firstNumber + secondNumber) + "<br> </b>");
document.write("<b> Subtraction: " + (firstNumber - secondNumber) + "</br>");
document.write("<b> Multiplication: " + (firstNumber * secondNumber) + "<br> </b>");
document.write("<b> Division: " + (firstNumber / secondNumber) + "<br> </b>");
document.write("<b> Moduls: " + (firstNumber % secondNumber) + "<br> </b>");
document.write("<b>=====================================</b> <br> <br>");
