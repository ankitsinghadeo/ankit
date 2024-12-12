// Hardcoded username and password
const correctUsername = "BSE1875";
const correctPassword = "20500502";

// Access the login form and error message
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error");
const loginPage = document.getElementById("loginPage");
const mainContent = document.getElementById("mainContent");

// Handle login form submission
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate username and password
    if (username === correctUsername && password === correctPassword) {
        // Show main content and hide login page
        loginPage.style.display = "none";
        mainContent.style.display = "block";
    } else {
        // Show error message if login fails
        errorMessage.style.display = "block";
    }
});