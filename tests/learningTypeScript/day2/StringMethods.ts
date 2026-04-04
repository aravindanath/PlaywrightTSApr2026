let city : string = " New York ";

console.log(`City: ${city}`); // Output: City: New York
console.log(`City length: ${city.length}`); // Output: City length: 8
console.log(`First character: ${city[0]}`); // Output: First character: N
console.log(`Last character: ${city[city.length - 1]}`); // Output: Last character: k

console.log(city.replace("York","Y0rk"));
console.log(city)
console.log(city.toUpperCase());
console.log(city.toLowerCase());
console.log(city.includes("York")); // Output: true
console.log(city.startsWith("New")); // Output: true
console.log(city.endsWith("York")); // Output: true
console.log(city.indexOf("o"));
console.log(city.split(" ")[0]); // Output: ["New", "York"]
console.log(city.split(" ")[1]); // Output: ["New", "York"]
console.log(city.trim().length); // Output: 8

let otp : string = "Hi Aravind, your OTP is 12356. Please do not share it with anyone.";

let otpCode = otp.match(/\d{5}/);
console.log(`Extracted OTP: ${otpCode ? otpCode[0] : "No OTP found"}`); // Output: Extracted OTP: 123456