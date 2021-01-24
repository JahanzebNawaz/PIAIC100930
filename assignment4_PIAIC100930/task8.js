// Convert number in words.

// Example
// Input 
// 23
// 123

// Output
// Twenty Three
// One Hundred and Twenty Three


let number = parseInt(prompt("Enter Number"));


function valueInWords(value) {
    let ones = ['', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let digit = 0;
    if (value < 20) return ones[value];
    if (value < 100) {
        digit = value % 10; //remainder     
        return tens[Math.floor(value / 10) - 2] + " " + (digit > 0 ? ones[digit] : "");
    }
    if (value < 1000) {
        return ones[Math.floor(value / 100)] + " hundred " + (value % 100 > 0 ? valueInWords(value % 100) : "");
    }
    if (value < 100000) {
        return valueInWords(Math.floor(value / 1000)) + " thousand " + (value % 1000 > 0 ? valueInWords(value % 1000) : "");
    }
    if (value < 10000000) {
        return valueInWords(Math.floor(value / 100000)) + " lac " + (value % 100000 > 0 ? valueInWords(value % 100000) : "");
    }
    return valueInWords(Math.floor(value / 10000000)) + " crore " + (value % 10000000 > 0 ? valueInWords(value % 10000000) : "");
}

document.write(`<b>OUTPUT: </b>  ${valueInWords(number)}`)
