// Bruteforce method.

// Step 1: Store the results of 3 digits multiplication in an array.
// Step 2: Check all the possible palindrome numbers.
// Step 3: Sort the array in descending order and print the first number of the array.

function reverse(number) {
    var reversed = 0;
    while (number > 0) {
        const last = number % 10;
        reversed = (reversed * 10) + last;
        number = Math.floor(number / 10);
    }
    return reversed;
}

var n = 100;
var n_array = [];
for (var i = 100; i <= 999; ++i) {
    for (var j = 100; j <= 999; ++j) {
        n_array.push(i * j);
    }
}

var n1_array = [];

n_array.sort((a, b) => b - a);

for (var i = 0; i < n_array.length; ++i) {
    if (n_array[i] == reverse(n_array[i])) {
        n1_array.push(n_array[i]);
    }
}

console.log(n1_array[0]);

// Optimized version of code.
// 1. Removed array and sorting.
// 2. No duplication of multiplication as it is commutative operation. A x B = B x A.
// 3. Exiting early - if we get a result value of multiplication which is less than palindrome or equal.

function reverse(number) {
    var reversed = 0;
    while (number > 0) {
        const last = number % 10;
        reversed = (reversed * 10) + last;
        number = Math.floor(number / 10);
    }
    return reversed;
}

var largest_palindrome = 0;
var n = 100;
var result = 0;

for (var i = 999; i > 99; --i) {
    for (var j = i; j > 99; --j) {
        result = i * j;
        if (result == reverse(result) && largest_palindrome < result) {
            largest_palindrome = result;
            break;
        }
    }
}

console.log(largest_palindrome);
