// 9. Write a program to identify the largest number in the given array.



let  A = [24, 53, 78, 91, 12]

document.write("Array Items: " + A)
document.write("<br>")

let max = 0;

for(var a =0; a< A.length; a++){
    if(A[a] > max ){
      max = A[a];
    }
}
document.write("<br>")
document.write("Largest No : " + (max));

