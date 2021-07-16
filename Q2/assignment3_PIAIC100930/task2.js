// Write a program to store 3 student names in an array.Take another
// array to store score of these three students.Assume that total marks
// are 500 for each student, display the scores & percentages of
// students like:



let studentsList = ['Micheal', 'John', 'Tony'];
let marksList = [320, 230, 480];

for(var i=0; i < studentsList.length; i++){
    document.write('Score of ' + (studentsList[i]) + ' is '+ (marksList[i]) + ' Percentage ' + ((marksList[i]/500)*100) + '% <br>')
}