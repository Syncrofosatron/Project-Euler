// Find all the fibonacci sequence till 4 million, and get the sum for even-valued terms.


// Brute-force method.

var limit = 4000000;

var first = 1;
var second = 2;

var sum = 0;
var even_sum = 2;

sum = first + second; // sum = 2;

while (sum <= limit) {
    if (sum % 2 === 0) {
        even_sum += sum;
    }

    first = second; // first = 1, first = 2, first = 3, first = 5, ...
    second = sum; // second = 2, second = 3, second = 5, second = 8, ...
    sum = first + second; // sum = 1 + 2 = 3, sum = 2 + 3 = 5, sum = 3 + 5 = 8, sum = 5 + 8 = 13, ...
}

console.log(even_sum);

// Mathematical method.

// Using Binet's formula to find the even-valued Fibonacci sequence sum.

var phi = (1 + Math.sqrt(5)) / 2;
var even_term = Math.floor(Math.log(Math.sqrt(5) * limit) / (3 * Math.log(phi)));
var numerator = phi ** ((3 * even_term) + 2);
var denominator = 2 * Math.sqrt(5);
var phi_diff = numerator / denominator;
var phi_sum = Math.round(phi_diff - 0.5);

console.log(phi_sum);

