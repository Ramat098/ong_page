// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      // Animate hamburger to X
      const spans = mobileMenuBtn.querySelectorAll("span");
      spans.forEach((span) => span.classList.toggle("active"));
    });
  }
});

// Contact Form Handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    console.log("Form submitted:", data);

    // Show success message
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");

    // Reset form
    contactForm.reset();
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

function effectuerDon() {
  let montant = document.getElementById("montant").value;
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;
  let telephone = document.getElementById("telephone").value;

  if (montant === "" || nom === "" || email === "" || telephone === "") {
      alert("Veuillez remplir tous les champs avant de continuer.");
      return;
  }

  alert(`Merci ${nom}, votre don de ${montant} a été enregistré avec succès !`);
}
