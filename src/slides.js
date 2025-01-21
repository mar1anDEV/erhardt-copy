const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;

let intervalID = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(next, 5000);

        const sliderContainer = document.querySelector('.slider');
        sliderContainer.addEventListener('mouseover', () => clearInterval(intervalID));
        sliderContainer.addEventListener('mouseout', () => intervalID = setInterval(next, 5000));
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prev() {
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
    intervalID = setInterval(next, 5000);
}

function next() {
    clearInterval(intervalID);
    slideIndex++;
    showSlide(slideIndex);
    intervalID = setInterval(next, 5000);
}
