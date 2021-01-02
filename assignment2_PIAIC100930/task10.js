// Write a program that
//   a. Store correct password in a JS variable.
//   b. Asks the user to enter his/her password
//   c. Validate the two passwords:
//     i. Check if user has entered password. If not, then give the
//         message “ Please enter your password”
//     ii. Check if both passwords are the same. If they are the

// same, show message “Correct! The password you
// entered matches the original password”. Show “Incorrect
// password” otherwise.



let userPwd = prompt("Enter password: ");
let pwd = "javascript";

if (!userPwd) {
  alert("Password should not be blank");
} else if (userPwd === pwd) {
  alert("Correct! The password you entered matches the original password !!!");
} else {
  alert("Incorrect password");
}