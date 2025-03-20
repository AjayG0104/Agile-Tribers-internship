//  1: Print Numbers from 1 to 10
function printNumbers1To10() {
    console.log("1: Print Numbers from 1 to 10");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    console.log("-----------------------------");
}

//  2: Print Even Numbers from 1 to 20
function printEvenNumbers1To20() {
    console.log("2: Print Even Numbers from 1 to 20");
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    console.log("-----------------------------");
}

//  3: Print Odd Numbers from 1 to 20
function printOddNumbers1To20() {
    console.log("3: Print Odd Numbers from 1 to 20");
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
    console.log("-----------------------------");
}

//  4: Calculate the Factorial of a Number
function calculateFactorial(num) {
    console.log("4: Calculate the Factorial of a Number");
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${num} is ${factorial}`);
    console.log("-----------------------------");
}

//  5: Sum of Numbers from 1 to 100
function sumNumbers1To100() {
    console.log("5: Sum of Numbers from 1 to 100");
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(`Sum of numbers from 1 to 100 is ${sum}`);
    console.log("-----------------------------");
}

//  6: Calculate the Average of Numbers in an Array
function calculateAverage(numbers) {
    console.log("6: Calculate the Average of Numbers in an Array");
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    console.log(`Average of the numbers is ${average}`);
    console.log("-----------------------------");
}

//  7: Draw Patterns Using Nested For Loops
function drawSquarePattern(size) {
    console.log("7: Draw Patterns Using Nested For Loops");
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += '* ';
        }
        console.log(row);
    }
    console.log("-----------------------------");
}

//  8: Print Numbers from 1 to 5
function printNumbers1To5() {
    console.log("8: Print Numbers from 1 to 5");
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    console.log("-----------------------------");
}

//  9: Print the First 10 Natural Numbers
function printFirst10NaturalNumbers() {
    console.log("9: Print the First 10 Natural Numbers");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    console.log("-----------------------------");
}

//  10: Check if the First and Last Number of a List Are the Same
function checkFirstAndLastNumber(numbers) {
    console.log("10: Check if the First and Last Number of a List Are the Same");
    let result = numbers[0] === numbers[numbers.length - 1];
    console.log(`Are the first and last numbers the same? ${result}`);
    console.log("-----------------------------");
}

//  11: Print Numbers Divisible by 5
function printNumbersDivisibleBy5(numbers) {
    console.log("11: Print Numbers Divisible by 5");
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 === 0) {
            console.log(numbers[i]);
        }
    }
    console.log("-----------------------------");
}

//  12: Check Whether a Character is a Vowel or Consonant
function checkVowelOrConsonant(char) {
    console.log("12: Check Whether a Character is a Vowel or Consonant");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char.toLowerCase())) {
        console.log(`${char} is a vowel.`);
    } else {
        console.log(`${char} is a consonant.`);
    }
    console.log("-----------------------------");
}

//  13: Count Occurrences of Even and Odd Numbers Between 10 and 55
function countEvenAndOddNumbers() {
    console.log("13: Count Occurrences of Even and Odd Numbers Between 10 and 55");
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 10; i <= 55; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    console.log(`Even numbers: ${evenCount}`);
    console.log(`Odd numbers: ${oddCount}`);
    console.log("-----------------------------");
}

//  14: Print Numbers from 1 to 25, Excluding Multiples of 5
function printNumbersExcludingMultiplesOf5() {
    console.log("14: Print Numbers from 1 to 25, Excluding Multiples of 5");
    for (let i = 1; i <= 25; i++) {
        if (i % 5 !== 0) {
            console.log(i);
        }
    }
    console.log("-----------------------------");
}

//  15: Calculate the Factorial of Each Element in an Array
function calculateFactorialOfArrayElements(numbers) {
    console.log("15: Calculate the Factorial of Each Element in an Array");
    function factorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    for (let i = 0; i < numbers.length; i++) {
        console.log(`Factorial of ${numbers[i]} is ${factorial(numbers[i])}`);
    }
    console.log("-----------------------------");
}

//  16: Product or Sum of Two Integers
function productOrSum(num1, num2) {
    console.log("16: Product or Sum of Two Integers");
    let product = num1 * num2;
    if (product > 500) {
        console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
    } else {
        console.log(`Product of ${num1} and ${num2} is ${product}`);
    }
    console.log("-----------------------------");
}

//  17: Print the Greatest of Two Numbers
function printGreatestOfTwoNumbers(num1, num2) {
    console.log("17: Print the Greatest of Two Numbers");
    if (num1 > num2) {
        console.log(`The greatest number is ${num1}`);
    } else {
        console.log(`The greatest number is ${num2}`);
    }
    console.log("-----------------------------");
}

//  18: Print the Greatest of Three Numbers
function printGreatestOfThreeNumbers(num1, num2, num3) {
    console.log("18: Print the Greatest of Three Numbers");
    let greatest = Math.max(num1, num2, num3);
    console.log(`The greatest number is ${greatest}`);
    console.log("-----------------------------");
}


// 19: Separate Positive and Negative Numbers from a List
function separatePositiveAndNegativeNumbers(numbers) {
    console.log("19: Separate Positive and Negative Numbers from a List");
    let positiveNumbers = [];
    let negativeNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            positiveNumbers.push(numbers[i]);
        } else {
            negativeNumbers.push(numbers[i]);
        }
    }
    console.log("Positive numbers:", positiveNumbers);
    console.log("Negative numbers:", negativeNumbers);
    console.log("-----------------------------");
}

// ==================================================
// Main Execution With Inputs and Outputs
// ==================================================

// 1
printNumbers1To10();

// 2
printEvenNumbers1To20();

// 3
printOddNumbers1To20();

// 4
calculateFactorial(5);

// 5
sumNumbers1To100();

// 6
calculateAverage([10, 20, 30, 40, 50]);

// 7
drawSquarePattern(5);

// 8
printNumbers1To5();

// 9
printFirst10NaturalNumbers();

// 10
checkFirstAndLastNumber([10, 20, 30, 40, 10]);

// 11
printNumbersDivisibleBy5([10, 15, 20, 25, 30, 35, 40]);

// 12
checkVowelOrConsonant('a');

// 13
countEvenAndOddNumbers();

// 14
printNumbersExcludingMultiplesOf5();

// 15
calculateFactorialOfArrayElements([1, 2, 3, 4, 5]);

// 16
productOrSum(20, 25);

// 17
printGreatestOfTwoNumbers(10, 20);

// 18
printGreatestOfThreeNumbers(10, 20, 30);

// 19
separatePositiveAndNegativeNumbers([23, 4, -6, 23, -9, 21, 3, -45, -8]);

// ==================================================
// Completed
// ==================================================


