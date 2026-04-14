import dt from '/Users/aravindanathdm/Documents/PlaywrightAutomationClass/PlaywrightTs_Mar_Apr2026/tests/testData.json';


const jsonString = '{"name": "Aravind", "age": 25}';

const data = JSON.parse(jsonString);

console.log(data.name); // Aravind
console.log(data.age); // 25

console.log(dt.token); // Aravind
console.log(dt.user.firstName); // 25