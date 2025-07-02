// Portfolio Images
const portfolioImages = [
    { src: 'images/portfolio-1.jpg' },
    { src: 'images/portfolio-2.jpg' },
    { src: 'images/portfolio-3.jpg' },
    { src: 'images/portfolio-4.jpg' },
    { src: 'images/portfolio-5.jpg' },
    { src: 'images/portfolio-6.jpg' },
    { src: 'images/portfolio-7.jpg' }
];

// Populate Portfolio Grid
const portfolioGrid = document.querySelector('.portfolio-grid');

portfolioImages.forEach(image => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    
    portfolioItem.appendChild(img);
    portfolioGrid.appendChild(portfolioItem);
});

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lightbox Functionality
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;

// Open lightbox
portfolioGrid.addEventListener('click', (e) => {
    const clickedItem = e.target.closest('.portfolio-item');
    if (clickedItem) {
        const img = clickedItem.querySelector('img');
        currentImageIndex = Array.from(portfolioGrid.children).indexOf(clickedItem);
        showImage(currentImageIndex);
        lightbox.classList.add('active');
    }
});

// Close lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Previous image
lightboxPrev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length;
    showImage(currentImageIndex);
});

// Next image
lightboxNext.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % portfolioImages.length;
    showImage(currentImageIndex);
});

function showImage(index) {
    const image = portfolioImages[index];
    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
}

// Close lightbox with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
    }
});

// Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Sticky Header
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});
