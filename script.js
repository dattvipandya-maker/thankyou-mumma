
// ===== OPEN SCRAPBOOK =====

const startBtn = document.getElementById("startBtn");
const hero = document.getElementById("hero");
const scrapbook = document.getElementById("scrapbook");

startBtn.addEventListener("click", function () {

    hero.classList.add("hero-hide");

    setTimeout(function () {
        hero.style.display = "none";
        scrapbook.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createHearts(20);
    }, 500);

});


// ===== NAVIGATION MENU =====

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});


// ===== FLOATING HEARTS =====

const heartsContainer = document.getElementById("hearts");

function createHearts(amount) {

    const symbols = ["♡", "♥", "✿", "💕"];

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("span");

        heart.className = "heart-particle";
        heart.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 10000);
    }
}


// ===== PHOTO LIGHTBOX =====

const memoryImages = document.querySelectorAll(".memory-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

memoryImages.forEach(function (photo) {

    photo.addEventListener("click", function () {

        lightboxImage.src = photo.src;
        lightbox.classList.add("active");

    });

});

closeLightbox.addEventListener("click", function () {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});


// ===== CLOSE LIGHTBOX WITH ESCAPE =====

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});


// ===== BACK TO TOP =====

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", function () {

    scrapbook.classList.add("hidden");
    hero.style.display = "flex";
    hero.classList.remove("hero-hide");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===== PERIODIC DECORATIVE HEARTS =====

setInterval(function () {

    if (!scrapbook.classList.contains("hidden")) {
        createHearts(2);
    }

}, 3500);

