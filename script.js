// Validate Login Form
function validateLogin() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields!");
        return false;
    } else {
        alert("Login Successful!");
        window.location.href = "index.html";
        return true;
    }
}

// Validate Signup Form
function validateSignup() {
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields!");
        return false;
    } else {
        alert("Signup Successful! Please login.");
        window.location.href = "login.html";
        return true;
    }
}
