// Run this script, & check whether alert message would be displayed or
// not. Record the outputs.


// a.
let a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
// output, condition is True


// b. 
let b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
// output, condition is false, no output 


// c.
let c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
// output,  condition is true, c === 13


// d.
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
// output cost is equals

// e
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
// output, result True

// f. 
if ("car" < "cat") {
  alert("car is smaller than cat");
}
// output car is smaller than cat.