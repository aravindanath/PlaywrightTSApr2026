



for(let i: number = 0; i < 5; i++) {
    console.log(`For Loop Iteration: ${i}`);
}


let stdNames: string[] = ["Aravind", "John", "Doe"];

for(let i: number = 0; i < stdNames.length; i++) {
    console.log(`Student Name: ${stdNames[i]}`);
}


let count: number = 0;
while(count < 5) {
    console.log(`While Loop Count: ${count}`);
    count++;
}


let num: number = 0;
do {
    console.log(`Do-While Loop Count: ${num}`);
    num++;
} while(num < 5);


let nums : string[] = ["One", "Two", "Three", "Four", "Five"];

for(let num of nums) {
    console.log(`For-Of Loop Number: ${num}`);
}

for(let index in nums) {
    console.log(`For-In Loop Index: ${index}, Value: ${nums[index]}`);
}

let rollNumbers: number[] = [101, 102, 103, 104, 105];
// roll is ref variable that holds the current element of the array during each iteration
rollNumbers.forEach((roll, index) => {
    if(roll === 103) {
        console.log(`First Roll Number: ${roll} : Index: ${index}`);
       // This will not work as expected because forEach does not support break
      } 
  console.log(`Roll Number at index ${index}: ${roll}`);
});


for(let roll of rollNumbers) {
    if(roll === 103) {
        console.log(`First Roll Number: ${roll}`);
        continue ; // This will exit the loop when roll is 103
    }
    console.log(`Roll Number: ${roll}`);
}