// Create a Date object for the current date and time.Extract the
// hours, reset the date object an hour ahead and finally display the
// date object in your browser.


let newdate = new Date();

document.write(`Current Date: ${newdate} <br>`)

let hours = newdate.getHours();
newdate.setHours(hours - 1);

document.write(`1 hour ago, it was: ${newdate} <br>`)

