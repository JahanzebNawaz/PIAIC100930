// Write a program that takes a positive integer from user & display thefollowing in your browser
  // a.number
  // b.round off value of the number
  // c.floor value of the number
  // d.ceil value of the number


let number = parseFloat(prompt("Enter Positive Number"));

if(number <0){
  alert("Enter positive number")
}


document.write(` <b>Number: ${number} </b> <br> `);
document.write(` <b>Round of value: ${Math.round(number)} </b> <br> `);
document.write(` <b>Floor value: ${Math.floor(number)} </b> <br> `);
document.write(` <b>Ceil value: ${Math.ceil(number)} </b> <br> `);

