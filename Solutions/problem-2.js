/* Problem 2: Even Fibonacci Numbers */

function fiboEvenSum(n) {
    let fibo = [1, 2];

    let i = 3;
    while (i <= n) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
        i++;
    }

    return fibo.filter(num => num % 2 === 0 && num < n).reduce((a, b) => a + b);
}

fiboEvenSum(10);        // Returns 10
fiboEvenSum(60);        // Returns 44
fiboEvenSum(1000);      // Returns 798
fiboEvenSum(100000);    // Returns 60696
fiboEvenSum(4000000);   // Returns 4613732