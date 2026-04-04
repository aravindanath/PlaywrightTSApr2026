function addTwoNumbers(n1: number, n2: number): number {
    console.log(`Addition of two numbers: ${n1 + n2}`); // Addition
    return n1 + n2;
}

function addTwoNumbersAndReturn(n1: number, n2: number): number { 
    return n1 + n2;
}

let x = addTwoNumbers(10, 20);
console.log(`Value of x: ${x}`); // This will print undefined since the function does not return anything
addTwoNumbers(130, 230);

let result = addTwoNumbersAndReturn(10, 202);
console.log(`Result: ${result/2}`);