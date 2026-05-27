// DOM elements
const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".strength-bar");
const strengthLabel = document.getElementById("strength-label");
const alertContainerEl = document.querySelector(".alert-container");

// Character sets
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

// Update slider display
lengthSlider.addEventListener("input", () => {
  lengthDisplay.textContent = lengthSlider.value;
});

// Generate password
generateBtn.addEventListener("click", () => {
  passwordInput.value = generatePassword();
  updateStrength(); // update bar after generation
});

// Generate password function
function generatePassword() {
  const length = Number(lengthSlider.value);
  let chars = "";
  if (uppercaseCheckbox.checked) chars += uppercaseLetters;
  if (lowercaseCheckbox.checked) chars += lowercaseLetters;
  if (numbersCheckbox.checked) chars += numberCharacters;
  if (symbolsCheckbox.checked) chars += symbolCharacters;

  if (!chars) {
    alert("Please select at least one option.");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  alertContainerEl.innerText = `${password} + copied!`;
  return password;

}

// Copy to clipboard
copyButton.addEventListener("click", () => {
  if (!passwordInput.value) {
    alert("No password to copy");
    return;
  }
  if (passwordInput.value) {
    alertContainerEl.classList.remove("active");//active is a class here of alert container//
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

// Update strength bar live
passwordInput.addEventListener("input", updateStrength);

// Strength bar function
function updateStrength() {
  const password = passwordInput.value;
  let score = 0;

  if (!password) {
    strengthBar.style.width = "0%";
    strengthBar.style.background = "red";
    strengthLabel.textContent = "Weak";
    return;
  }

  // Scoring
  if (password.length >= 6) score += 1;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  // Set width and color based on score
  switch (score) {
    case 1:
      strengthBar.style.width = "20%";
      strengthBar.style.background = "red";
      strengthLabel.textContent = "Very Weak";
      break;
    case 2:
      strengthBar.style.width = "40%";
      strengthBar.style.background = "orange";
      strengthLabel.textContent = "Weak";
      break;
    case 3:
      strengthBar.style.width = "60%";
      strengthBar.style.background = "yellow";
      strengthLabel.textContent = "Fair";
      break;
    case 4:
      strengthBar.style.width = "80%";
      strengthBar.style.background = "green";
      strengthLabel.textContent = "Strong";
      break;
    case 5:
      strengthBar.style.width = "100%";
      strengthBar.style.background = "#0cf";
      strengthLabel.textContent = "Very Strong";
      break;
    default:
      strengthBar.style.width = "0%";
      strengthBar.style.background = "red";
      strengthLabel.textContent = "Weak";
  }
}