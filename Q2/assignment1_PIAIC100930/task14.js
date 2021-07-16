
 var a = 2, b = 1;
 var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br>");

document.write("<br>");

document.write("At stage --a will decrement 1 and stores the value 1 in result <br> then it will subtract 1 from result and then value of result will be 0 after that it will increment 1 and stores in result the value of result will be 2  then + b will increment 1 in result and the b-- decrement of postfix will not effect the value of result thus result is 3 ");
