// Portfolio Images
const portfolioImages = [
    { src: 'https://instagram.fbom3-2.fna.fbcdn.net/v/t51.2885-15/498303278_18505021609015982_6926953925796694688_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fbom3-2.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QHjRtOixhy13TX2g8muc7z1OVHOsaWhVi9T3DcCGZt1S4gWWMTtadAMfhB-tFUUXTCyddFtMw13aSojd65LmK-S&_nc_ohc=-Zcb-FeNgcYQ7kNvwHPcGEi&_nc_gid=oY2rMSAHO94jKyvxkJ0I1g&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzYzNDYzMTc2OTY0MTAwNDM1Nw%3D%3D.3-ccb7-5&oh=00_AfMygybfx5NepAz1Pj_LZn5_L4B76MTQtzex7yJgHFykGA&oe=686A713D&_nc_sid=22de04' },
    { src: 'https://instagram.fbom3-3.fna.fbcdn.net/v/t51.29350-15/462969645_517017084622299_1906958634121408856_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fbom3-3.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QHNNGimfDlnxGEbJlT24zj9s-Ae8k8h-4mkujI8IBTju4vDoLeSoyyNQFXVeR2JHOhXzc7tf49k4WoXzapcBKoP&_nc_ohc=oc4HZdqx9EsQ7kNvwG5XakO&_nc_gid=znivZXAOZDx6UyigSSINdA&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQ3NzM4ODg2MzM4MjQxNjY3MA%3D%3D.3-ccb7-5&oh=00_AfM8tPRSyWejVmwYMG-tzm9rvzGSFDz6Tz3lnyUQqBClAg&oe=686A7D1E&_nc_sid=22de04' },
    { src: 'https://instagram.fbom3-3.fna.fbcdn.net/v/t51.29350-15/452642213_1221102022461531_9130079493821442626_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fbom3-3.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QFJvcDe6Oy9cCPFAHdp_VgRkSlKpqQp8MSLcRUX1klVP-spCA2tTrRJeBDzy9RjvV5Ebc2ASuE9aEhvpLVHm7KY&_nc_ohc=ItaAnY0rPSsQ7kNvwH9kHRh&_nc_gid=GIiiDvUKry9j4PrQZfaPJw&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQxNzkxMDY0OTc2Mzk5MDgxMA%3D%3D.3-ccb7-5&oh=00_AfOSaJcg2Ap-Ihn4cgrUg_5JuSNZg6vbrLHOdS1Lz77WYg&oe=686A8C31&_nc_sid=22de04' },
    { src: 'https://instagram.fbom3-2.fna.fbcdn.net/v/t51.29350-15/336511875_950705483041226_8658047423483205667_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fbom3-2.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QEKemFLCsTtLvtfa1Z3jUFT9blKrLhydNUqXokR-L6sxnR29Bjqk-2_kkFk9Wlf-ECT-EZ7DGnscColcYnefWIe&_nc_ohc=sj9EYP_mY9wQ7kNvwFZhYj0&_nc_gid=_iu2nlr_fWp9DASPltRFEA&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzA2MzQ4NTY2NjYwMDMxMjA0Nw%3D%3D.3-ccb7-5&oh=00_AfNMO9ovWX-xA0r3i_gd157bmLBlnLTF3y14lflJzO2vMw&oe=686A7F43&_nc_sid=22de04' },
    { src: 'https://instagram.fbom3-3.fna.fbcdn.net/v/t51.29350-15/316182770_143395978475955_346717397587504812_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTIzMS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fbom3-3.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QEe_Sr1Td8J-mnmzdIiSF2T1DWhh1LkhScAe6ImKIMwWZbhENkuw5yKOfNOG4Y14tcKFF57G5STb7L8FQ4zhr8o&_nc_ohc=hs_yUOndjWoQ7kNvwFg5Yvc&_nc_gid=2dt7B9F3HbuQdZKAThSc7w&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=Mjk3NTc4NjMyNjgwNTY5MzEwOQ%3D%3D.3-ccb7-5&oh=00_AfNfTNHq3__8wXd36NNeh_OqEpT1lWztSrt9HfWs0c8Bog&oe=686A9722&_nc_sid=22de04' },
    { src: 'https://instagram.fbom3-2.fna.fbcdn.net/v/t51.29350-15/314994923_854464269238216_4236601646411062506_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fbom3-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QG4kkn1dZsuaZt-bW4tFzta5WRXx8N1Rx5oWkbz1Etd8EfV_pBmBWZL4U0BKZvL8CQg30Xd6DEo1JEH9W_WMLW8&_nc_ohc=zDoAdKJPTMYQ7kNvwHqKkDD&_nc_gid=LPP3176oE5-uoD-nf4Zp9Q&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=Mjk3MjEyMTU1MjQ3ODk0Mzk5OA%3D%3D.3-ccb7-5&oh=00_AfMReBC5x4IxUyjmwU8nQUH6yEEB3r-TuiaYYxz26Q70Pg&oe=686A9F26&_nc_sid=22de04' },
    { src: 'https://instagram.fbom3-3.fna.fbcdn.net/v/t51.29350-15/306440512_159377556746807_7606540013890162335_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fbom3-3.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QFp-aehifKpQgzf7wOLtx5O1g4PBgrOM-Bt-EndxeWTD9S6iojMRP6keQJn99Qdgchbrf6JysMCCiWcB4AyEV2k&_nc_ohc=qBbnleJScdkQ7kNvwFo4uWp&_nc_gid=TT8F4NZ2nDSG_lLGI-RLzA&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MjkyNjEyNTYzNjA1MzQ1ODg2Mg%3D%3D.3-ccb7-5&oh=00_AfO_6HyH_Wz04-vnmcPej8m2imMbB9pCtzAjfK5yVeNb5Q&oe=686A9952&_nc_sid=22de04' }
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
