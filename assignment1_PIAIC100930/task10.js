
let number;
document.getElementById("result1").innerHTML = "Value after variable declaration is " + number;


number = 5;
document.getElementById("result2").innerHTML = "Initial value " + number;

number = ++number;
document.getElementById("result3").innerHTML = "Value after increment is " + number;

number = number + 7;
document.getElementById("result4").innerHTML = "Value after addition is " + number;

number = --number;
document.getElementById("result5").innerHTML = "Value after decrement is " + number;

number = number /3;
document.getElementById("result6").innerHTML = "The remainder is " + number;

