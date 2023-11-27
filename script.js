// For loop that iterates from 0 to 10
for (let i = 0; i <= 10; i++) {
    // Determination and display of odd/even for each number
    let type = i % 2 === 0 ? 'even' : 'odd';
    document.write(`Count ${i} is ${type}<br>`);
}

// Prompt user for a number between 5 and 20, store in myNum
let myNum = parseInt(prompt("Enter a number between 5 and 20:"));
while (myNum < 5 || myNum > 20 || isNaN(myNum)) {
    myNum = parseInt(prompt("Invalid input. Please enter a number between 5 and 20:"));
}

// Do While loop until loop counter equals myNum
let counter = 1;
do {
    document.write(`Counter: ${counter}<br>`);
    counter++;
} while (counter <= myNum);

// Subjects stored in an array
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display array contents using forEach()
document.write("Subjects:<br>");
subjects.forEach(subject => {
    document.write(`${subject}<br>`);
});

// Display array contents separated by commas in one statement 
document.write("Subjects (Comma Separated):<br>");
document.write(subjects.join(", "));
