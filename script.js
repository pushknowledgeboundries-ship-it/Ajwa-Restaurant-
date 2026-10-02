// =========================================
// DEPILEX WEBSITE JAVASCRIPT
// =========================================


// ---------- MOBILE MENU ----------

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Close mobile menu when a link is clicked

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});


// ---------- HEADER ON SCROLL ----------

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ---------- SCROLL REVEAL ----------

const revealElements = document.querySelectorAll(
    ".service-card, .gallery-item, .bridal-content, .training-content, .contact-grid"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// ---------- CURRENT YEAR ----------

const yearElement = document.querySelector(".footer p:last-child");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} Depilex Best Beauty Salon. Demo website concept.`;

}