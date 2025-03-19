//1: sayHello function
function sayHello(name = "World") {
    console.log(`Hello, ${name}!`);
}

//2: add function
function add(a, b) {
    return a + b;
}

//3: multiply function (function expression)
const multiply = function(x, y) {
    return x * y;
};

//4: multiply function (function declaration)
function multiplyDeclaration(a, b) {
    return a * b;
}

//5: divide function
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

//6: factorial function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

//7: square function
function square(number) {
    return number * number;
}

// ============================================
// Testing all functions with input
// ============================================

console.log(" 1: sayHello");
sayHello(); // without name
sayHello("Ajay.G"); //with name

console.log("\n 2: add");
console.log(add(5, 5)); 
console.log(add(11, 21)); 

console.log("\n 3: multiply (function expression)");
console.log(multiply(4, 5)); 
console.log(multiply(7, 3)); 

console.log("\n 4: multiply (function declaration)");
console.log(multiplyDeclaration(6, 7)); 
console.log(multiplyDeclaration(8, 9)); 

console.log("\ 5: divide");
console.log(divide(10, 2)); 
console.log(divide(100, 0)); //division by zero is not allowed.

console.log("\n 6: factorial");
console.log(factorial(5)); 
console.log(factorial(10)); 

console.log("\n 7: square");
console.log(square(4)); 
console.log(square(99));