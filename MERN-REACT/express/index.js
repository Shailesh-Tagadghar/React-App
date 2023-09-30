console.log("Hello World");

var x = 5;
var y = 10;
var z = x + y;

console.log(x + " + " + y + " = " + z);

//write a program to accept number from user and print factorial of it.

function fact(n) {
  let initial = 1;
  if (n == 0 || n == 1) {
    return initial;
  } else if (n > 1) {
    for (var i = n; i >= 1; i--) {
      initial = initial * i;
    }
    return initial;
  } else {
    return "number has to be positive.";
  }
}
let n = 5;
initial = fact(n);
console.log("Factorial of " + n + " is " + initial);

//write to a program to accept 2 numbers and print its substraction

function sub(a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
}

sub(5, 2);

var subfunction = (a,b) => {
    console.log(`${a} - ${b} = ${a - b}`);
}

subfunction(9,7)


