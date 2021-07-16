// Initialize an array with color names.Display the array elements in
//   your browser.


// A. Ask the user what color he/she wants to add to the beginning &
// add that color to the beginning of the array.Display the updated
// array in your browser.

let colors = new Array();

let color = prompt("Enter a color")

colors.push(color)
document.write(colors);
document.write('<br>');


// Ask the user what color he / she wants to add to the end & add
// that color to the end of the array.Display the updated array in
// your browser.
let endcolor = prompt("Enter a color");
colors.push(endcolor)

document.write(colors);
document.write('<br>');



// C.Add two more colors to the beginning of the array.Display the
// updated array in your browser.

let start1color = prompt("Enter a color in start");
colors.unshift(start1color);

let start2color = prompt("Enter a color in start");
colors.unshift(start2color);

document.write(colors);
document.write('<br>');

// D.Delete the first color in the array.Display the updated array in
// your browser


colors.shift();
document.write(colors);
document.write('<br>');


// E.Delete the last color in the array.Display the updated array in
// your browser.

colors.pop();
document.write(colors);
document.write('<br>');

// F.Ask the user at which index he / she wants to add a color & color
// name.Then add the color to desired position / index.Display the
// updated array in your browser.

let indexNo = parseInt(prompt("Enter Index no you want to add color to?"));
let indexColor = prompt("Enter Color Name to add?");

colors[indexNo] = indexColor;
document.write(colors);
document.write('<br>');


// G.Ask the user at which index he / she wants to delete color(s) &
// how many colors he / she wants to delete.Then remove the
// same number of color(s) from user - defined position / index. .
// Display the updated array in your browser

let indexNum = parseInt(prompt("Enter Index no to delete color?"));
let numbColors = parseInt(prompt("how many colors to delete?"));

for(var i = 0; i < numbColors; i++){
  delete colors[indexNum];
}

document.write(colors);
document.write('<br>');