// JavaScript code to make the navbar responsive and full-screen
const toggleButton = document.getElementById("toggleButton");
const navLinks = document.querySelector(".nav-links");
const primaryNavigation = document.querySelector(".primary-navigation");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  primaryNavigation.classList.toggle("full-screen");
});
