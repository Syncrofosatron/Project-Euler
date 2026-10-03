// 1. Sum of numbers formula = n (n + 1) / 2
// 2. Sum of squares of numbers = n(n + 1) (2n + 1) / 6

var n = 10;

sum_first_n_numbers = (n * (n + 1)) / 2;
squares_sum_first_n_numbers = (n * (n + 1) * ((2 * n) + 1)) / 6;

var difference = (sum_first_n_numbers ** 2) - squares_sum_first_n_numbers;

console.log(difference);
