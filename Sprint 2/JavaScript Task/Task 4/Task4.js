// 1. Identify if a Number is Positive or Negative
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// 2. Identify if a Number is Even or Odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 3. Calculate the Power of a Number
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

// 4. Compare Two Numbers
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`;
    } else if (num2 > num1) {
        return `${num2} is greater than ${num1}`;
    } else {
        return "Both numbers are equal";
    }
}

// 5. Determine if a Year is a Leap Year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}

// 6. Grade Calculator
function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// 7. How Old Are You? (Age-Based Messages)
function ageMessage(age) {
    if (age < 16) {
        return "You can't drive.";
    } else if (age >= 16 && age <= 17) {
        return "You can drive but not vote.";
    } else if (age >= 18 && age <= 24) {
        return "You can vote but not rent a car.";
    } else {
        return "You can do pretty much anything.";
    }
}

// 8. FizzBuzz Challenge
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// 9. Leap Year Checker (Same as Task 5)
function leapYearChecker(year) {
    return isLeapYear(year); // Reusing the function from Task 5
}

// ============================================
// Testing all JavaScript Challenge with input
// ============================================

console.log("\n 1: Identify if a Number is Positive or Negative");
console.log(checkNumber(-10));
console.log(checkNumber(10));

console.log("\n 2: Identify if a Number is Even or Odd");
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(8));

console.log("\n 3: Calculate the Power of a Number");
console.log(calculatePower(5, 2)); 
console.log(calculatePower(6, 2));

console.log("\n 4: Compare Two Numbers");
console.log(compareNumbers(10, 20)); 
console.log(compareNumbers(100,50));

console.log("\n 5: Determine if a Year is a Leap Year");
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2012));

console.log("\n 6: Grade Calculator");
console.log(calculateGrade(85));
console.log(calculateGrade(60));
console.log(calculateGrade(90));
console.log(calculateGrade(25));

console.log("\n 7: How Old Are You? (Age-Based Messages)");
console.log(ageMessage(15));
console.log(ageMessage(25)); 
console.log(ageMessage(20)); 


console.log("\n 8: FizzBuzz Challenge");
fizzBuzz(); 

console.log("\n 9: Leap Year Checker");
console.log(leapYearChecker(2024)); 

// ============================================
// Completed
// ============================================