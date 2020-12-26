let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")

let _sum = parseInt(num1) + parseInt(num2);
let _sub = parseInt(num1) - parseInt(num2);
let _mul = parseInt(num1) * parseInt(num2);
let _div = parseInt(num1) / parseInt(num2);

document.getElementById("sum").innerHTML = "Sum of " + num1 + " and " + num2 + " is equal to " + _sum;
document.getElementById("sub").innerHTML = "Subtraction of " + num1 + " and " + num2 + " is equal to " + _sub;
document.getElementById("mul").innerHTML = "Multiplication of " + num1 + " and " + num2 + " is equal to " + _mul;
document.getElementById("div").innerHTML = "Division of " + num1 + " and " + num2 + " is equal to " + _div;
