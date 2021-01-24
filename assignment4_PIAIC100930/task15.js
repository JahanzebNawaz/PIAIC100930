// Write a program to ask the user about his age.Calculate and show
// his birth year in your browser



let age = prompt("Enter your age");

document.write(`Your Age is: ${age} <br>`)
let date = new Date();

let dateYear = date.getFullYear();
let year = (dateYear - age)

document.write(`Your Birth Year Is: ${year} <br>`)


