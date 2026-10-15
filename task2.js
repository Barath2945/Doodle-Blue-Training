const students = ["Priya", "Arun", "Divya", "Rahul", "Sneha"]; 

console.log("First student:", students[0]); 
console.log("Last student:", students[students.length - 1]); 

students.push("Karthik");
console.log("After push:", students);

students.pop();
console.log("After pop:", students);

const slicedArray = students.slice(1, 4);
console.log("Sliced array:", slicedArray);

students.splice(2, 1);
console.log("After splice:", students);

const includesPriya = students.includes("Priya");
console.log("Includes 'Priya':", includesPriya);