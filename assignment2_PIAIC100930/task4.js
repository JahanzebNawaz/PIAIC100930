// Write a program to take input the marks obtained in three subjects &
// total marks. Compute & show the resulting percentage on your page.
// Take percentage & compute grade as per following table:

let grade = ""; 
let result = ""; 

let engMarks = parseInt(prompt("Enter English Marks Obtained: "));
let mathsMarks = parseInt(prompt("Enter Maths Marks Obtained: "));
let scienceMarks = parseInt(prompt("Enter Science Marks Obtained: "));


document.write("<b>=====================================</b> <br>" );
document.write("<b> English Marks: " + engMarks + "<br> </b>");
document.write("<b> Maths Marks: " + mathsMarks + "</br>");
document.write("<b> Science Marks: " + scienceMarks + "<br> </b>");
document.write("<b>=====================================</b> <br> <br>");

let totalMarks = 300;
let totalMarksObt = engMarks + mathsMarks + scienceMarks;

let percentage = ((totalMarksObt / totalMarks) * 100).toFixed(0);

let gradeNo = 0;
if (percentage > 80 && percentage <= 100){
  gradeNo = 1
}else if (percentage > 70 && percentage < 80){
  gradeNo = 2
} else if (percentage > 60 && percentage < 70){
  gradeNo = 3
}else{
  gradeNo = 0
}

switch (gradeNo) {
  case 1:
    grade = "A-One";
    result = "Excellent";
    break;
  case 2:
    grade = "A";
    result = "Good";
    break;
  case 3:
    grade = "B";
    result = "You Need To Improve";
    break;
  case 0:
    grade = "Fail";
    result = "Sorry";
    break;
}

document.write("<b>=====================================</b> <br> <br>");
document.write("<b> Total Marks: " + totalMarks + "<br> </b>");
document.write("<b> Marks Obtain: " + totalMarksObt + "<br> </b>");
document.write("<b> Percentage: " + percentage + "%<br> </b>");
document.write("<b> Grade: " + grade + "<br> </b>");
document.write("<b> Result: " + result + "<br> </b>");
document.write("<b>=====================================</b> <br> <br>");