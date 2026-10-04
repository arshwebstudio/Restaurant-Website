/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("show-menu");

}


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu")
            .classList.remove("show-menu");

    });

});


/* =========================
   CURRENT YEAR
========================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} Ember & Spice. All rights reserved.`;

}


/* =========================
   SIMPLE SCROLL ANIMATION
========================= */

const animatedElements = document.querySelectorAll(
    ".food-card, .review-card, .menu-column, .gallery-item, .about-content"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});