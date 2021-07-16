// We have the following arrays:
// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th", "st", "nd", "rd"];
// Write a JavaScript program to display in the following way:
// 1st choice is Karachi
// 2nd choice is Lahore
// 3rd choice is Islamabad


var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];

var ctype = '';
var no = 1;

for(var a = 1; a <= aCities.length; a++){
  if(a == 1){
    ctype = o[1];
  }else if(a == 2){
    ctype = o[2];
  } else if (a == 3) {
    ctype = o[3];
  } else {
    ctype = o[0];
  }

  document.write( (no) + (ctype) +  ' choice is ' + (aCities[a-1]) + '<br>');
  no++;
}
