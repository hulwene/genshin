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
  window.open("login.html", "_blank");
}

function navtoMondtastPage() {
  window.location.href = "mondast.html";
}

function navtoLiyuePage() {
  window.location.href = "liyue.html";
}

function navtoInazumaPage() {
  window.location.href = "inazuma.html";
}

function navtoSumeruPage() {
  window.location.href = "sumeru.html";
}

// Modify this function in your script.js file
function toggleMute() {
  var backgroundMusic = document.getElementById("backgroundMusic");

  // Check if the background music is currently muted
  if (backgroundMusic.muted) {
    // If muted, unmute the background music
    backgroundMusic.muted = false;
  } else {
    // If not muted, mute the background music
    backgroundMusic.muted = true;
  }
}
