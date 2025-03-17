//Task 1:

//1 . Print Hello,World!
console.log("Hello, World!");

//2. Print Your Name
console.log("Ajay.G"); 

//3 . . Print Name and Age on Separate Lines
console.log("Ajay.G"); 
console.log(25); 

//4. Declare and Use Different Data Types
let stringVar = "Good Morning"; // String
let numberVar = 1999; // Number
let booleanVar = false; // Boolean

console.log(stringVar);
console.log(numberVar);
console.log(booleanVar);

//5 . String Concatenation
let name = "Ajay.G"; 
let age = 25; 
console.log("Name: " + name + ", Age: " + age);

//6. Declare and Print Variables
let yourName = "Ajay.G"; 
let yourAge = 25; 
console.log(yourName);
console.log(yourAge);

//7. Perform Mathematical Operations
let num1 = 100;
let num2 = 50;

console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));

//8. Declare and Print an Array
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));

// 9: Print a Simple Pattern
for (let i = 1; i <= 4; i++) {
    console.log('*'.repeat(i));
}
// Example(Pyramid Pattern)
let rows = 5;
for (let i = 1; i <= rows; i++) {
    // Print spaces
    let spaces = ' '.repeat(rows - i);
    // Print stars
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}

//10. Declare and Modify Variables
let nameVar = "Ajay.G"; 
let ageVar = 25; 
let isStudent = true; 

console.log(nameVar);
console.log(ageVar);
console.log(isStudent);

//11. Print and Modify Variable Values
let nameVara = "Ajay.G";
let ageVara = 25;
let isStudenta = true;

console.log(nameVara);
console.log(ageVara);
console.log(isStudenta);

// Modify values
nameVara = "Jaya.G";
ageVara += 1;
isStudenta = !isStudent;

console.log(nameVara);
console.log(ageVara);
console.log(isStudenta);

//12. Store and Print Personal Details
// Step 1: Store details in an object
let personalDetails = {
    name: "Ajay.G", // String
    age: 25, // Integer
    dob: "1999-04-01", // String (Date of Birth in YYYY-MM-DD format)
    height: 165.5, // Decimal number (height in cm)
    weight: 63.2, // Decimal number (weight in kg)
    degree: "B.E, Computer Science and Engineering", // String
    gender: "Male" // String
};

console.log("Name: " + personalDetails.name);
console.log("Age: " + personalDetails.age);
console.log("Date of Birth: " + personalDetails.dob);
console.log("Height: " + personalDetails.height + " cm");
console.log("Weight: " + personalDetails.weight + " kg");
console.log("Degree: " + personalDetails.degree);
console.log("Gender: " + personalDetails.gender);