/* =========================================
   AJWA BAKERS & RESTAURANT
   JavaScript
========================================= */


/* =========================================
   1. MENU FILTER
========================================= */

const filterButtons = document.querySelectorAll(".menu-buttons button");
const menuItems = document.querySelectorAll(".menu-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state to clicked button
        button.classList.add("active");


        // Get selected category
        const category = button.textContent
            .trim()
            .toLowerCase();


        // Show / hide menu items
        menuItems.forEach(item => {

            const itemCategory = item
                .querySelector("span")
                .textContent
                .trim()
                .toLowerCase();


            if (category === "all") {

                item.style.display = "block";

            } 
            else if (itemCategory === category) {

                item.style.display = "block";

            } 
            else {

                item.style.display = "none";

            }

        });

    });

});



/* =========================================
   2. SMOOTH NAVIGATION
========================================= */

const navigationLinks = document.querySelectorAll(
    '.navbar a[href^="#"]'
);


navigationLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();


        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);


        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



/* =========================================
   3. HEADER SHADOW ON SCROLL
========================================= */

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.08)";

    } 
    else {

        header.style.boxShadow = "none";

    }

});



/* =========================================
   4. HERO TEXT ANIMATION
========================================= */

const heroContent =
    document.querySelector(".hero-content");


window.addEventListener("load", () => {

    heroContent.style.opacity = "0";

    heroContent.style.transform =
        "translateY(30px)";


    setTimeout(() => {

        heroContent.style.transition =
            "all 1s ease";

        heroContent.style.opacity = "1";

        heroContent.style.transform =
            "translateY(0)";

    }, 200);

});



/* =========================================
   5. MENU ITEMS ANIMATION
========================================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


menuItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(25px)";

    item.style.transition =
        "all 0.6s ease";

    observer.observe(item);

});



/* =========================================
   6. CURRENT YEAR
========================================= */

const yearElement =
    document.querySelector("footer p:last-child");


if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} Ajwa Bakers & Restaurant`;

}