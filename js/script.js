const logregBox = document.querySelector(".logreg-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  logregBox.classList.add("active");
});

loginLink.addEventListener("click", () => {
  logregBox.classList.remove("active");
});

function validateAndRedirect() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Trim the values
  email = email.trim();
  password = password.trim();

  // Check if all fields are filled
  if (email === "" || password === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  // If validation passes, redirect to the homepage
  window.location.href = "index.html";
  return false;
}

function navtoLoginPage() {
  window.location.href = "login.html";
}
