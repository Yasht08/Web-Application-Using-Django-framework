document.addEventListener('DOMContentLoaded', () => {
    const fullNameInput = document.getElementById('full-name');
    const fullNameStatus = document.getElementById('full-name-status');
  
    fullNameInput.addEventListener('input', () => {
      const fullName = fullNameInput.value;
      if (/^[a-zA-Z\s]{3,}$/.test(fullName)) {
        fullNameStatus.textContent = '✓';
        fullNameStatus.style.color = 'green';
      } else {
        fullNameStatus.textContent = '✕';
        fullNameStatus.style.color = 'red';
      }
    });
  
    const emailInput = document.getElementById('email');
    const emailStatus = document.getElementById('email-status');
  
    emailInput.addEventListener('input', () => {
      const email = emailInput.value;
      if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
        emailStatus.textContent = '✓';
        emailStatus.style.color = 'green';
      } else {
        emailStatus.textContent = '✕';
        emailStatus.style.color = 'red';
      }
    });
  
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordMatchStatus = document.getElementById('password-match-status');
  
    confirmPasswordInput.addEventListener('input', () => {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      if (password === confirmPassword) {
        passwordMatchStatus.textContent = 'Passwords match';
        passwordMatchStatus.style.color = 'green';
      } else {
        passwordMatchStatus.textContent = 'Passwords do not match';
        passwordMatchStatus.style.color = 'red';
      }
    });
  
    const dobInput = document.getElementById('dob');
    const ageStatus = document.getElementById('age-status');
    const submitButton = document.getElementById('submit-button');
  
    dobInput.addEventListener('input', () => {
      const dob = new Date(dobInput.value);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - dob.getFullYear();
  
      if (age < 18) {
        ageStatus.textContent = 'Must be 18 or older';
        ageStatus.style.color = 'red';
        submitButton.disabled = true;
      } else {
        ageStatus.textContent = 'Age is valid';
        ageStatus.style.color = 'green';
        submitButton.disabled = false;
      }
    });
  
    const registrationForm = document.getElementById('registration-form');
  
    registrationForm.addEventListener('submit', (e) => {
      if (!validateForm()) {
        e.preventDefault();
      }
    });
  
    function validateForm() {
      const isValidFullName = /^[a-zA-Z\s]{3,}$/.test(fullNameInput.value);
      const isValidEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(emailInput.value);
      const isValidPassword = passwordInput.value.length >= 8 && passwordInput.value === confirmPasswordInput.value;
      const dob = new Date(dobInput.value);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - dob.getFullYear();
      const isValidAge = age >= 18;
  
      if (!isValidFullName) {
        fullNameStatus.textContent = '✕';
        fullNameStatus.style.color = 'red';
      }
  
      if (!isValidEmail) {
        emailStatus.textContent = '✕';
        emailStatus.style.color = 'red';
      }
  
      if (!isValidPassword) {
        passwordMatchStatus.textContent = 'Passwords do not match';
        passwordMatchStatus.style.color = 'red';
      }
  
      if (!isValidAge) {
        ageStatus.textContent = 'Must be 18 or older';
        ageStatus.style.color = 'red';
      }
  
      return isValidFullName && isValidEmail && isValidPassword && isValidAge;
    }
  });