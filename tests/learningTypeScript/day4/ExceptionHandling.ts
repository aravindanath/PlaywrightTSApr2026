

let x = 10;
let y = 0;

let city = "0";

try {
    if (y === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    let result = x / y;
    console.log(`The result of ${x} divided by ${y} is: ${result}`);
} catch (error) {

    console.error(`An error occurred: ${(error as Error).message}`);
} finally {
    console.log("This block will always execute.");
}


if(city === 0){
    console.log("City is New york.");
} else {
    console.log("City is not New York.");
} 