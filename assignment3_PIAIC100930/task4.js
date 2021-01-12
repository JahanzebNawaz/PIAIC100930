// Write a program to initialize an array with city names.Copy 3 array
// elements from cities array to selected cities array.

let cities = ['Karachi', 'Lahore', 'Islamabad','Quetta', 'Peshawar'];

document.write("Cities List: <br>");
document.write(cities);

document.write('<br>');


document.write("Selected Cities: <br>");
document.write(cities.slice(1, 4));
