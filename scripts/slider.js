import zones from '../data/zonas.json' assert { type: 'json'}

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const container = document.querySelector('.slider-container');

function showSlide(index) {
    currentIndex = index;
    const translateValue = -index * 100 + '%';
    container.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}