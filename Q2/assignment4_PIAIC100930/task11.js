// Write a program to take input of a Number and find a Mean of AllDigits

// E.g: 
// 666 = 6 + 6 + 6 = 18 / 3 = 6
// 1246 = 1 + 2 + 4 + 5 = 12 / 4 = 3


let number = prompt('Enter numbber');

let nums = number.split('');

function arrayAverage(arr) {
    var sum = 0;
    for (var i in arr) {
        sum += parseInt(arr[i]);
    }
    var numbersCnt = arr.length;
    
    return (sum / numbersCnt); 
}

document.write(`Mean of ${number} is ${arrayAverage(nums)}`);