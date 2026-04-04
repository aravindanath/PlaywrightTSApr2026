console.log("Hello, TypeScript!");

// this is a comment

// let message: string = "Welcome to TypeScript!";
// console.log(message);

/*
 This is a multi-line comment
 @aravindanath 
 Learning TypeScript is fun!
 1.2.3
 28-06-2024
*/

let  stdName: string = "Aravindanath"; // TypeScript infers the type as string
console.log(stdName);
stdName = "Adarsh"; // Reassigning a new string value
console.log(stdName);
stdName = "123" ; // This will cause a type error because stdName is inferred as a string  
console.log(stdName);

var age: number = 25; // TypeScript infers the type as number
console.log(age);
age = 30; // Reassigning a new number value
console.log(age);
age = "thirty"; // This will cause a type error because age is inferred as a number
console.log(age);

const city = "Bangalore"; // TypeScript infers the type as string
console.log(city);
 // This will cause an error because city is a constant and cannot be reassigned
// city = "Mumbai"; // This will cause an error because city is a constant and cannot be reassigned