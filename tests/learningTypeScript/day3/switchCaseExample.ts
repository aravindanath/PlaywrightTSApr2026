
let day : number = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;          
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}


enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Red;
console.log(`Selected Color: ${Color[color]}`); // Output: Selected Color: Green