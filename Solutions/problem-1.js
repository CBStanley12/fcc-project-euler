/* Problem 1: Multiples of 3 and 5 */

function multiplesOf3and5(number) {
    let multiples = [];

    let i = 1;
    while (i < number) {
        if (i % 3 === 0 || i % 5 === 0) { multiples.push(i); }

        i++;
    }

    return multiples.reduce((a, b) => a + b);
}

multiplesOf3and5(10);
multiplesOf3and5(49);
multiplesOf3and5(1000);
multiplesOf3and5(8456);
multiplesOf3and5(19564);