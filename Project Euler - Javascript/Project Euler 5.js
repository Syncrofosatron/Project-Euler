// Bruteforce method.
// Smallest multiple from 1 - 20.
// One will be going from 1 - 20, other will be going to check  smallest possible number.

var number = 1;
var flag = 0;
var array = [];

for (var i = 1; i < 21; ++i) { // i = 1 - 20
  if (number % i == 0) {
    array.push(1);
  } else {
    ++number; // If number didn't divide, increment it.
    i = 1; // Also, set the value of i to 1 again so we can start process again for the new number.
  }
  array.length = 0; // Set the length as 0 of array if the array length is not 10.
}

console.log(number);
