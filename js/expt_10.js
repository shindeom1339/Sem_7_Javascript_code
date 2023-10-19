// Import the 'readline' module for reading user input 
const readline = require('readline');

// Create an interface for reading user input 
    const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

// Function to generate and print the multiplication table 
function printTable(number) {
console.log(`Multiplication Table for ${number}:`); 
for (let i = 1; i <= 10; i++) {
console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Ask the user to enter a number 
rl.question('Enter a number: ', (input) => {
const number = parseInt(input);

// Check if the input is a valid number 
if (isNaN(number)) {
console.log('Please enter a valid number.');
} else {
// Generate and print the multiplication table 
printTable(number);
}

// Close the readline interface
rl.close();
});

