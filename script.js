// Function to display the calculator overlay
function overlay() {
    // Get the popup-overlay element
    let po = document.querySelector('.popup-overlay');

    // Set z-index and opacity to make the overlay visible
    po.style.zIndex = 1;
    po.style.opacity = 1;

    // Add show-overlay class to apply transition effect
    document.querySelector('.popup-overlay').classList.add('show-overlay');

    // Add p-c-show class to the popup-content for transition effect
    document.querySelector('.popup-content').classList.add('p-c-show');
    console.log("Overlay displayed");
}

// String to store the input expression
let string = "";

// Get all the calculator buttons
let buttons = document.querySelectorAll('.num');

// Add click event listener to each button
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        // Check if the clicked button is the "=" button
        if (event.target.innerHTML == '=') {
            // Call the calculate function
            calculate();
        }
        // Check if the clicked button is the "AC" button
        else if (event.target.innerHTML == 'AC') {
            // Call the clearAll function
            clearAll();
        }
        // Check if the clicked button is the "C" button
        else if (event.target.innerHTML == 'C') {
            // Call the clearLast function
            clearLast();
        }
        // Otherwise, append the button value to the input string
        else {
            console.log(event.target);
            // Append the button value to the string
            string = string + event.target.innerHTML;

            // Display the updated string on the screen
            document.querySelector('#screen').value = string;
        }
    });
});

// Function to evaluate and display the result
function calculate() {
    // Evaluate the expression stored in the string
    result = eval(string);

    // Display the result on the screen
    document.getElementById('screen').value = result;
    string = String(result);
}

// Function to clear all entries
function clearAll() {
    // Reset the string to an empty value
    string = "";

    // Clear the screen input
    document.getElementById('screen').value = "";
}

// Function to clear the last digit
function clearLast() {
    // Remove the last character from the string
    string = string.slice(0, -1);

    // Display the updated string on the screen
    document.getElementById('screen').value = string;
}
