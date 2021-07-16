// You have a string “The quick brown fox jumps over the lazy dog”.Write a program to count the number of occurrences of the word “the”in given string



let sentance = "The quick brown fox jumps over the lazy dog";

let count = 0;
let words = sentance.split(" ");

for (let a = 0; a <= words.length; a++){
    if ((words[a] === "The") || (words[a] === "the")){
        count += 1;
    }
}

document.write(`${sentance} <br>`);
document.write(`There are ${count} occurrence(s) of word The.`);
