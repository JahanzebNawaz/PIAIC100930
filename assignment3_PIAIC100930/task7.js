// Write a JavaScript program to compute the union of two arrays.
// (Merge two arrays by removing all duplicates)


var a = [10, 20, 4, 40, 60, 70]
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Output should be:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 40, 60, 70]

let result = a.concat(b);

document.write(result.sort(function (a, b) { return a - b }))