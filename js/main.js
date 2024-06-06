document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You should validate inputs here

    // Simulating login authentication
    if (username === "your_username" && password === "your_password") {
        // Save user details to localStorage
        localStorage.setItem("username", username);

        // Redirect to a logged-in page or perform any other action
        window.location.href = "loggedin.html";
    } else {
        // Display error message
        document.getElementById("error").innerText = "Invalid username or password.";
    }
});

// Check if user is logged in on index.html page
window.onload = function() {
    var loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
        document.getElementById("welcomeMessage").innerText = "Welcome back, " + loggedInUser + "!";
    }
};
