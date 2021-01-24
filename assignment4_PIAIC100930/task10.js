// Write a program that round a number to a given decimal places.




let number = parseFloat(prompt('Enter number: '));
let number2 = parseFloat(prompt('Enter number: '));
let number3 = parseFloat(prompt('Enter number: '));

document.write(`${number}  ----->   ${number.toFixed(2)} <br>`);
document.write(`${number2}  ----->   ${number2.toFixed(2)} <br>`);
document.write(`${number3}  ----->   ${number3.toFixed(4)} <br>`);