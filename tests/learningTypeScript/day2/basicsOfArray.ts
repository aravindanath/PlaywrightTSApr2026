let numbers: number[] = [1, 2, 3, 4];

console.log(`Numbers: ${numbers}`); // Output: Numbers: 1,2,3,4

let names: string[] = ["Aravind", "John", "Doe"];
console.log(`Names: ${names}`); // Output: Names: Aravind,John,Doe

let mixed: (number | string)[] = [1, "Two", 3, "Four"];
console.log(`Mixed: ${mixed}`); // Output: Mixed: 1,Two,3,Four

// Accessing array elements
console.log(`First number: ${numbers[0]}`); // Output: First number: 1
console.log(`Second name: ${names[1]}`); // Output: Second name: John
console.log(`Third mixed element: ${mixed[2]}`); // Output: Third mixed element: 3

// Array of Objects

let users: { name: string; age: number }[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
console.log(`Users: ${JSON.stringify(users)}`); // Output: Users: [{"name":"Alice","age":30},{"name":"Bob","age":25},{"name":"Charlie","age":35}]

console.log(`First user name: ${users[0].name}`); 
console.log(`First user age: ${users[0].age}`); // Output: First user age: 30

let myname: string = "Aravind";
let characters: string[] = [...myname];
console.log(`Characters in my name: ${characters}`); // Output: Characters in my name: A,r,a,v,i,n,d


names.push("Smith");
console.log(`Updated Names: ${names}`);
names.pop();
console.log(`Updated Names after pop: ${names}`);
names.unshift("Smith");
console.log(`Updated Names after unshift: ${names}`);
names.shift();
console.log(`Updated Names after shift: ${names}`);
names.map(name => console.log(`Name: ${name}`)); // Output: Name: Aravind, Name: John, Name: Doe

// names.map(name => name.toUpperCase()); // Output: ["ARAVIND", "JOHN", "DOE"]
console.log(`Names in uppercase: ${names.map(name => name.toUpperCase())}`); // Output: Names in uppercase: ARAVIND,JOHN,DOE