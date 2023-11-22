let currentIndex = 0;
const container = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;
let slidesPerPage = calculateSlidesPerPage();

function calculateSlidesPerPage() {
    const containerWidth = container.offsetWidth;
    const slideWidth = 240;
    return Math.floor(containerWidth / slideWidth);
}

function showSlide(index) {
    currentIndex = index;
    let translateValue = -index * (100 / slidesPerPage) + '%';
    if (index > totalSlides - slidesPerPage) {
        translateValue = '0%'
        currentIndex = 0
    }
    container.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % (totalSlides - slidesPerPage + 1) ;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % (totalSlides - slidesPerPage + 1);
    showSlide(currentIndex);
}

window.addEventListener('resize', function() {
    slidesPerPage = calculateSlidesPerPage();
    showSlide(currentIndex);
    slides.forEach(slide => {
        slide.style.width = (container.offsetWidth / slidesPerPage) + 'px';
    });
});

window.addEventListener('load', function() {
    slides.forEach(slide => {
        slide.style.width = (container.offsetWidth / slidesPerPage) + 'px';
    });
});