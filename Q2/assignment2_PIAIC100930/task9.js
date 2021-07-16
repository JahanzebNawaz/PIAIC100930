// Write a program that takes a character (i.e. string of length 1) and
// returns true if it is a vowel, false otherwise


let character = parseInt(prompt("Enter Character"));

let vowelList = "AEIOUaeiou";
let vowelsCount = 0;

if (vowelList.indexOf(character[0]) !== -1) {
  alert("Vowel found!");
} else {
  alert("Not a vowel");
}