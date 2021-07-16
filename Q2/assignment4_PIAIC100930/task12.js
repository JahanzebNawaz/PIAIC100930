// Write a program that shows the message “First fifteen days of themonth” if the date is less than the 16th of the month else shows “Lastdays of the month”.



let date = new Date();

day = date.getDate();

if(day < 16){
    document.write('First fifteen days of themonth')
}else if(day >= 16){
    document.write('Lastdays of the month')
}