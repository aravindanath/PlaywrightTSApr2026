

// Basic function to add two numbers
function add(a: number, b: number): number {
    return a + b;
}

let x = add(5, 10); // Output: 15
console.log(`The sum of 5 and 10 is: ${x}`);


// Function with default parameter
function greet(name: string = "Arvind"): string {
    return `Hello, ${name}!`;
}

console.log(greet("Adarsh")); // Output: Hello, Adarsh!

// Function with out return type (void)
function multiply(a: number, b: number): void {
    console.log(`The product of ${a} and ${b} is: ${a * b}`);
}

multiply(4, 5); // Output: The product of 4 and 5 is: 20

// Arrow function to calculate the area of a rectangle
const areaOfRectangle = (length: number, width: number): number => {
    return length * width;
};

console.log(`The area of the rectangle is: ${areaOfRectangle(5, 3)}`); // Output: The area of the rectangle is: 15


// Optional parameters in a function
function createUser(name: string, age?: number): string {
    if (age) {
        return `User ${name} is ${age} years old.`;
    } else {
        return `User ${name} has an unknown age.`;
    }
}

console.log(createUser("Alice", 30)); // Output: User Alice is 30 years old.
console.log(createUser("Bob")); // Output: User Bob has an unknown age.

// Function with Object type parameter
interface User {
    name: string;
    age: number;
}

function displayUserInfo(user: User): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const user1: User = { name: "Charlie", age: 25 };
displayUserInfo(user1); // Output: Name: Charlie, Age: 25 

console.log(user1.name); // Output: Charlie
console.log(user1.age); // Output: 25