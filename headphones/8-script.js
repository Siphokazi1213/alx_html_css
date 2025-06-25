// Basic JavaScript for responsive navigation menu (toggle)
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Check if both elements exist before adding event listeners
  if (menuToggle && navLinks) {
    // Event listener to toggle the 'active' class on navLinks when menuToggle is clicked
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Close mobile menu when a navigation link is clicked
  // This ensures the menu collapses after a user selects a destination
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      // If the navLinks currently has the 'active' class (meaning the menu is open)
      if (navLinks.classList.contains("active")) {
        // Remove the 'active' class to close the menu
        navLinks.classList.remove("active");
      }
    });
  });
});
