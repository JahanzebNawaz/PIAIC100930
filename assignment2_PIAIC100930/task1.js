// Write a program to take “city” name as input from user. If user enters
// “Karachi”, welcome the user like this: “Welcome to city of lights”

let city = prompt('Enter City name');

if(!city){
    alert("No city name provided!");
}else if ((city === "Karachi") || (city === "Karachi") || (city === "KARACHI")){
    alert("Welcome to city of lights");
}else {
    alert(`${city} is not a Karachi City`);
}
