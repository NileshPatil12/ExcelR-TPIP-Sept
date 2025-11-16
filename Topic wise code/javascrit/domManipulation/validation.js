function validateName() {
    const name = document.getElementById("name").value;
    if (name.length < 3 || !/^[A-Za-z\s]+$/.test(name)) {
      showError("name", "Name must be at least 3 characters long and contain only letters.");
    } else {
      showValid("name");
    }
  }
  
  function validateEmail() {
    const email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
      showError("email", "Please enter a valid email address.");
    } else {
      showValid("email");
    }
  }
  
  function validatePassword() {
    const password = document.getElementById("password").value;
    if (password.length < 6) {
      showError("password", "Password must be at least 6 characters long.");
    } else {
      showValid("password");
    }
  }
  
  function validateGender() {
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      showError("gender", "Please select your gender.");
    } else {
      showValid("gender");
    }
  }
  
  function validatePhone() {
    const phone = document.getElementById("phone").value;
    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      showError("phone", "Phone number must be exactly 10 digits.");
    } else {
      showValid("phone");
    }
  }
  
  function validateAddress() {
    const address = document.getElementById("address").value;
    if (address.trim() === "") {
      showError("address", "Please enter your address.");
    } else {
      showValid("address");
    }
  }
  
  function validateZipCode() {
    const zipCode = document.getElementById("zipCode").value;
    if (zipCode.length !== 6 || !/^\d{5}$/.test(zipCode)) {
      showError("zipCode", "Zip code must be exactly 6 digits.");
    } else {
      showValid("zipCode");
    }
  }
  
  // Display error message
  function showError(field, message) {
    const feedback = document.getElementById(field + "Feedback");
    const input = document.getElementById(field);
    feedback.innerHTML = message;
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  
  // Display valid message (clear error)
  function showValid(field) {
    const feedback = document.getElementById(field + "Feedback");
    const input = document.getElementById(field);
    feedback.innerHTML = "";
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  