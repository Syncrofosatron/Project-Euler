// 1. Store all natural numbers which are multiple of 3 or 5 below 1000.
// 2. Find the sum of those numbers and print.

// Brute-force approach.
var sum = 0;
for (var i = 1; i <= 1000; ++i) {
    if ((i%3 == 0) || (i%5 == 0)) {
        sum += i;
    }
}

console.log(sum);

// ================================
// Using mathematics approach.

var first_3 = 3;
var last_3 = 999;

var first_5 = 5;
var last_5 = 1000;

var first_15 = 15;
var last_15 = 990;

var sum_3 = ((last_3 / first_3) * (first_3 + last_3)) / 2;
var sum_5 = ((last_5 / first_5) * (first_5 + last_5)) / 2;
var sum_15 = ((last_15 / first_15) * (first_15 + last_15)) / 2;

console.log((sum_3 + sum_5) - sum_15);