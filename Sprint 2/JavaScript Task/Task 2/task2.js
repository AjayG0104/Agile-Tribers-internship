// 1: Declare variables with meaningful names using camelCase and under_score_case
let firstName = "Ajay.G"; 
let id_email = "aj0104@gmail.com"; 
console.log("1 Output:", firstName, id_email); 

// 2: Declare a constant and try to reassign it (will throw an error)
const pi = 3.14;
// pi = 3.14159; 
console.log("2 Output:", pi); 

//3: Declare an array, access elements, and perform basic array operations
let fruits = ["Apple", "Banana", "Cherry"];
console.log("3 Output - First Fruit:", fruits[0]); 
fruits.push("Orange"); 
console.log("3 Output - After Push:", fruits);
fruits.pop(); 
console.log("3 Output - After Pop:", fruits); 

// 4: Sum of Two Numbers
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("4 Output - Sum:", sum); 

//  5: Program to find the Area of a Circle
let radius = 5;
let areaCircle = pi * radius * radius;
console.log("5 Output - Area of Circle:", areaCircle); 

// 6: Program to find the Area of a Rectangle
let length = 10;
let width = 5;
let areaRectangle = length * width;
console.log("6 Output - Area of Rectangle:", areaRectangle);

// 7: Program to find the Area of a Triangle
let base = 10;
let height = 5;
let areaTriangle = (base * height) / 2;
console.log("7 Output - Area of Triangle:", areaTriangle); 

// 8: Simple Calculator
let calcNum1 = 10;
let calcNum2 = 5;
let addition = calcNum1 + calcNum2;
let subtraction = calcNum1 - calcNum2;
let multiplication = calcNum1 * calcNum2;
let division = calcNum1 / calcNum2;
console.log("8 Output - Addition:", addition); 
console.log("8 Output - Subtraction:", subtraction);
console.log("8 Output - Multiplication:", multiplication); 
console.log("8 Output - Division:", division); 

// 9: Use assignment operators to modify the value of a variable
let x = 10;
x += 5; 
console.log("9 Output - After +=:", x); 
x -= 3; 
console.log("9 Output - After -=:", x); 
x *= 2; 
console.log("9 Output - After *=:", x); 
x /= 4; 
console.log("9 Output - After /=:", x);


// 10: Use increment (++) and decrement (--) operators
let count = 5;
count++;
console.log("10 Output - After Increment:", count); 
count--; 
console.log("10 Output - After Decrement:", count); 

// 11: Use comparison operators
let a = 10;
let b = 20;
console.log("11 Output - a == b:", a == b); 
console.log("11 Output - a != b:", a != b); 
console.log("11 Output - a === b:", a === b); 
console.log("11 Output - a !== b:", a !== b);
console.log("11 Output - a > b:", a > b); 
console.log("11 Output - a < b:", a < b); 
console.log("11 Output - a >= b:", a >= b); 
console.log("11 Output - a <= b:", a <= b); 

// 12: Use logical operators
let isTrue = true;
let isFalse = false;
console.log(" 12 Output - isTrue && isFalse:", isTrue && isFalse);
console.log(" 12 Output - isTrue || isFalse:", isTrue || isFalse); 
console.log(" 12 Output - !isTrue:", !isTrue); 

// Task 13: Program to swap two variables
let swapA = 5;
let swapB = 10;
let temp = swapA;
swapA = swapB;
swapB = temp;
console.log(" 13 Output - After Swap:", swapA, swapB); 

// Task 14: Program to find the average of given numbers
let numbers = [10, 20, 30, 40, 50];
let sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
let averageNumbers = sumNumbers / numbers.length;
console.log(" 14 Output - Average:", averageNumbers); 

// 15: Program to add two numbers, multiply by a third, and divide by a fourth
let A = 10;
let B = 30;
let C = 12;
let D = 3;
let result = ((A + B) * C) / D;
console.log("15 Output - Result:", result); 

// 16: Program to calculate total marks, average, and print them
let tamil = 85;
let english = 90;
let maths = 95;
let science = 80;
let social = 88;
let totalMarks = tamil + english + maths + science + social;
let averageMarks = totalMarks / 5;
console.log("16 Output - Total Marks:", totalMarks); 
console.log(" 16 Output - Average Marks:", averageMarks); 