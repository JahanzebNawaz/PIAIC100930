// Write a program that determines the minutes since midnight, Jan1, 1970 and assigns it to a variable that hasn't been declaredbeforehand. Use any variable you like to represent the Date object.



let newdate = new Date();

let milliseconds = newdate.getTime();
let todayMin = newdate.getMinutes();
let diff = milliseconds - todayMin;
let diffMin = diff / (1000 * 60);
let accurateMin = Math.floor(diffMin);


document.write(`Current Date: ${newdate} <br>`)
document.write(`Elapsed milliseconds since midnight, Jan 1, 1970: ${milliseconds} <br>`)
document.write(`Elapsed minutes since midnight, Jan 1, 1970:  ${accurateMin} <br>`)
