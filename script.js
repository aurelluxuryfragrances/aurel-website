// =========================================
// AUREL - MAIN JAVASCRIPT
// =========================================


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

if (glow) {

    document.addEventListener("mousemove", function (e) {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}


// HEADER SCROLL EFFECT

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}