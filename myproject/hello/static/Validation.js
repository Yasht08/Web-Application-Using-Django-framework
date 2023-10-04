    // Form validation function
function validateForm() {
  // Get the form elements
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var dateOfBirth = document.getElementById("dateOfBirth").value;

  // Validate the name field
  if (name.length < 3) {
    document.getElementById("nameError").innerHTML = "Name must be at least 3 characters long.";
    return false;
  }

  // Validate the email field
  var emailRegex = /^\w+@\w+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
    return false;
  }

  // Validate the password field
  if (password.length < 8) {
    document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long.";
    return false;
  }

  // Validate the confirm password field
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
    return false;
  }

  // Calculate the user's age
  var today = new Date();
  var birthDate = new Date(dateOfBirth);
  var age = today.getFullYear() - birthDate.getFullYear();

  // Disable the submit button if the user is not yet 18 years old
  if (age < 18) {
    document.getElementById("submitButton").disabled = true;
    return false;
  }

  // The form is valid, so return true
  return true;
}

// Real-time validation function
function validateInput(input) {
  // Get the input element's value
  var value = input.value;

  // Validate the input based on its type
  switch (input.type) {
    case "text":
      if (value.length < 3) {
        input.setCustomValidity("This field must be at least 3 characters long.");
      } else {
        input.setCustomValidity("");
      }
      break;
    case "email":
      var emailRegex = /^\w+@\w+\.[a-z]{2,3}$/;
      if (!emailRegex.test(value)) {
        input.setCustomValidity("Please enter a valid email address.");
      } else {
        input.setCustomValidity("");
      }
      break;
    case "password":
      if (value.length < 8) {
        input.setCustomValidity("Password must be at least 8 characters long.");
      } else {
        input.setCustomValidity("");
      }
      break;
  }
}

document.getElementById("form").addEventListener("submit", validateForm);
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", validateInput);
});
