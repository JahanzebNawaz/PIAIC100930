// Store a secret number (ranging from 1 to 10) in a variable. Prompt
// user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show “Close
// enough to the correct answer”.


let randomNo = Math.floor(Math.random() * 11);

let number = parseInt(prompt("Guess number between 1 and 10: "));

if (randomNo === number) {
  alert("CONGRATULATIONS! YOU GUESSED IT RIGHT IN");
} else if ((randomNo === number + 1) || (randomNo === number - 1)) {
  alert("Close enough to the correct answer");
} else {
  alert("OOPS Sorry! Wrong Answer");
}
