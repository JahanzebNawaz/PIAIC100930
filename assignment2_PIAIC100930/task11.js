// Write a program that take time as input from user in 24 hours clock
// format like: 1900 = 7pm. Implement the following case using if, else &
// else if statements


var start = prompt("Enter start time");

if (start.indexOf(":") === -1) {
  start = start.substring(0, 2) + ":" + start.substring(2, start.length);
}

start = start.split(":");
var startDate = new Date(0, 0, 0, start[0], start[1], 0);

console.log(startDate);
var hours = startDate.getHours();
if (hours > 0 && hours <= 12) {
  alert("Good Morning");
} else if (hours > 12 && hours <= 17) {
  alert("Good Afternoon");
} else {
  alert("Good Evening");
}