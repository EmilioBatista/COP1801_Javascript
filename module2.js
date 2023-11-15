// Asking the user for their first name and storing it in the variable Fname
let Fname = prompt("Please enter your first name:");

// Displaying a welcome message that contains the name they entered
alert(`Hello ${Fname}, welcome!`);

// Creating a constant piValue to store the value of Pi to 7 significant digits
const piValue = 3.1415926;

// Asking the user to input their favorite number and storing the value in myFavNum
let myFavNum = prompt("Please enter your favorite number:");
myFavNum = parseFloat(myFavNum); // Ensuring that the input is treated as a number

// Validating the favorite number to ensure it's a numeric value
while (isNaN(myFavNum)) {
    myFavNum = parseFloat(prompt("That's not a number. Please enter your favorite number:"));
}

// Calculating the area of a circle using the user’s favorite number as the radius
// The formula to find the area of a circle is A = πr^2
let myArea = piValue * myFavNum * myFavNum;

// Displaying the contents of each variable to the webpage
// The message includes each variable with a description
document.body.innerHTML = `Hello ${Fname}, you entered ${myFavNum} as your favorite number. ` +
                          `If that was the radius of a circle, the circle's area would be ${myArea.toFixed(6)}.`;
