// Declare and Initialize an array and store available education
// qualifications in Pakistan(e.g.SSC, HSC, BCS, BS, BCOM, MS, M.
//     Phil., PhD).Show the listed qualifications in your browser like:


let educationLevel = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];

const printList = (value, index) =>{
    document.write(`${index + 1} ) ${value} <br>`);
}

educationLevel.forEach(printList)

// 2nd method 

// educationLevel.forEach(function(value, index) {
//     document.write(`${index + 1} ${value} <br>`);
// })