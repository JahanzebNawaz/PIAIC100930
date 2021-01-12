// Generate the following series in your browser.See example output.
// a.Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b.Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c.Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d.Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e.Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



document.write( 'Counting: ');

for(var a = 1; a <= 15; a++){
    document.write(a + ', ');
}

document.write('<br>');
document.write('Reverse Counting: ');

for (var a = 10; a >= 1; a--) {
    document.write(a + ', ');
}


document.write('<br>');
document.write('Even: ');

for (var a = 0; a < 20; a++) {
    if(a%2 == 0){
        document.write(a + ', ');
    }
}

document.write('<br>');
document.write('Odd: ');

for (var a = 0; a < 20; a++) {
    if (a % 2 == 1) {
        document.write(a + ', ');
    }
}


document.write('<br>');
document.write('Series: ');

for (var a = 1; a <= 20; a++) {
    if (a % 2 == 0) {
        document.write(a + 'k, ');
    }
}