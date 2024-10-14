// index.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to handle validation

    // Get form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation flags
    let isValid = true;

    // Validate Name (Required, Alphabetic only)
    const nameError = document.getElementById('nameError');
    const namePattern = /^[A-Za-z]+$/;  // Regex for alphabetic characters only
    if (!name) {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else if (!namePattern.test(name)) {
        nameError.textContent = 'Name should contain only letters.';
        isValid = false;
    } else {
        nameError.textContent = '';  // Clear error message
    }

    // Validate Email (Required, Email format)
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex for email validation
    if (!email) {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';  // Clear error message
    }

    // Validate Password (Required, at least 8 characters)
    const passwordError = document.getElementById('passwordError');
    if (!password) {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password should be at least 8 characters long.';
        isValid = false;
    } else {
        passwordError.textContent = '';  // Clear error message
    }

    // If the form is valid, submit it or handle the data
    if (isValid) {
        alert('Form submitted successfully!');
        // You can proceed with actual form submission (e.g., send data to a server)
        // document.getElementById('registrationForm').submit();
    }
});
