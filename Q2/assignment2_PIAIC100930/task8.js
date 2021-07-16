// Write a program that takes input a number from user & state whether
// the number is positive, negative or zero.

let number = parseInt(prompt("Enter Number"));


if(number === 0){
    alert("Number is 0")
}else if (number > 0){
    alert("Number is Positive Number")
}else if (number < 0) {
    alert("Number is negative number")
}