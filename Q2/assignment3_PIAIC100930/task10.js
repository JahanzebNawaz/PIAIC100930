// Sort an Aay from smallest to largest value
// A = [20, 53, 78, 4, 91, 12]
// Output should be: [4, 12, 20, 53, 78, 91]



let A = [20, 53, 78, 4, 91, 12];

for (var i = 1; i < A.length; i++){
  for (var j = 0; j < i; j++)
    if (A[i] < A[j]) {
      var x = A[i];
      A[i] = A[j];
      A[j] = x;
    }
}
  

document.write(A)
