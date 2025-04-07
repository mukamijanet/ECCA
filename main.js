var navLinks = document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right ="0";
    }
    function hideMenu(){
        navLinks.style.right ="-200px";
    }
    document.addEventListener("DOMContentLoaded", function (){
    var typed = new Typed(".first-text", {
        strings: ["mentorship programs", " community service", "charitable donations", "environmental conservation"],
        typeSpeed: 100,
        backSpeed: 100,
        startDelay: 200,
        backDelay: 500,
        loop: true
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let slideInterval;

    function updateSlider(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    document.querySelector(".next").addEventListener("click", function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    document.querySelector(".prev").addEventListener("click", function () {
        stopAutoSlide();
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider(currentIndex);
        startAutoSlide();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            stopAutoSlide();
            currentIndex = parseInt(this.getAttribute("data-index"));
            updateSlider(currentIndex);
            startAutoSlide();
        });
    });

    startAutoSlide();
});




