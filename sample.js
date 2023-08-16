/ Prompt the user for their name
var userName = prompt("Please enter your name:");

// Check if the user provided a name
if (userName) {
    // Display a personalized greeting
    var greeting = "Hello, " + userName + "! Welcome to our website.";
    alert(greeting);
} else {
    // Display a generic greeting if no name was provided
    alert("Hello there! Welcome to our website.");
}
