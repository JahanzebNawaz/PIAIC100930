// You have an array

// Write a program to enable "search by user input" in an array.After
// searching, prompt the user whether the given item is found in the list
// or not.Example:


let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let word = prompt("Enter word to search.");

if(word){
  for (var a = 0; a < A.length; a++) {
    if (word === A[a]) {
      document.write(word + ' is <b> available </b> at index ' + (a));
    }else if ((a+1 == A.length) && (word !== A[a])){
      document.write('We are sorry ' + (word) + 'is <b> not available </b> ');
    }
  }
}