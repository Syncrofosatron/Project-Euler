// Using root to reduce the times we loop for performance.

// Step 1: Starting from 1, loop through all the numbers before square root of the number provided.
// Step 2: If the number is divisible by the looping numbers, it means those numbers are the factors of the number provided.
// Step 3: Check if the factors are prime numbers, and store in an array.
// Step 4: Find the last element and that will be the largest factor.

function IsPrime(n) {
    if (n <= 1) {
        return 0;
    }

    if (n == 2) {
        return 1;
    }

    if (n % 2 == 0) {
        return 0;
    }

    var sqrt_number = Math.floor(Math.sqrt(n));

    for (let i = 3; i <= sqrt_number; i += 2) {
        if (n % i == 0) {
            return 0;
        }
    }
    return 1;
}

var number = 600851475143;
var prime_factors = [];

for (let i = 1; i < Math.sqrt(number); ++i) {
    if (number % i == 0) {
        if (IsPrime(i) == 1) {
            prime_factors.push(i);
        }
    }
}

prime_factors.sort((a, b) => b - a);
console.log(prime_factors[0]);
