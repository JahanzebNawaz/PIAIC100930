// Write a program to take input color of road traffic signal from the user
// & show the message according to this table:

let lightColor = prompt("Please enter traffic signal color: \n Red, \n Yellow \n or Green");
  
if (!lightColor) {
  alert("Please enter color name");
} else if ((lightColor === "RED") || (lightColor === "Red") || (lightColor === "red")) {
  alert("Must Stop");
} else if (((lightColor === "YELLOW") || (lightColor === "Yellow") || (lightColor === "yellow"))) {
  alert("Read to move");
} else if (((lightColor === "GREEN") || (lightColor === "Green") || (lightColor === "green"))) {
  alert("Move Now");
}