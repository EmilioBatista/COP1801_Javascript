// Function to verify valid service quality
function isValidServiceQuality(serviceQuality) {
    return serviceQuality === "great" || serviceQuality === "ok" || serviceQuality === "poor";
}

// Function to verify service amount is between $5.00 and $500.00
function isValidServiceAmount(amount) {
    return amount >= 5 && amount <= 500;
}

// Function to calculate the tip amount
function calculateTip(amount, serviceQuality) {
    let tipPercentage = 0;
    switch (serviceQuality) {
        case "great":
            tipPercentage = 0.20;
            break;
        case "ok":
            tipPercentage = 0.15;
            break;
        case "poor":
            tipPercentage = 0.10;
            break;
    }
    return amount * tipPercentage;
}

// Prompting the user for the service amount and service quality
let serviceAmount = parseFloat(prompt("Enter the dollar amount of the service:"));
let serviceQuality = prompt("Was the service quality great, ok, or poor?").toLowerCase();

// Validating service amount and service quality
if (!isValidServiceAmount(serviceAmount)) {
    alert("Invalid service amount. Please enter a value between $5.00 and $500.00.");
} else if (!isValidServiceQuality(serviceQuality)) {
    alert("Invalid service quality. Please enter great, ok, or poor.");
} else {
    // Calculating and displaying the tip
    let tipAmount = calculateTip(serviceAmount, serviceQuality);
    alert(`For a service amount of $${serviceAmount.toFixed(2)}, a ${serviceQuality} service quality ` +
          `suggests a tip of $${tipAmount.toFixed(2)}.`);
}
