let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")

let _sum = parseInt(num1) + parseInt(num2);
let _sub = parseInt(num1) - parseInt(num2);
let _mul = parseInt(num1) * parseInt(num2);
let _div = parseInt(num1) / parseInt(num2);

document.write(" Sum of " + num1 + " and " + num2 + " is equal to " + _sum  + "<br/>>");
document.write("Subtraction of " + num1 + " and " + num2 + " is equal to " + _sub + "<br/>");
document.write("Multiplication of " + num1 + " and " + num2 + " is equal to " + _mul + "<br/>");
document.write("Division of " + num1 + " and " + num2 + " is equal to " + _div.toFixed(2) + "<br/>");
