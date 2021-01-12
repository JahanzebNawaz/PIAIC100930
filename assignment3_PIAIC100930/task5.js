// Write a JavaScript program to remove all duplicate items from an
// array
// Sample array: var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output: [3, ‘a’, 2, 4, 9]


let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


function checkUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var arr2 = arr1.filter(checkUnique);

console.log(arr2);
document.write(arr2)