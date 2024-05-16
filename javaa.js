const images = document.querySelectorAll('.grid-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImageIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        currentImageIndex = index;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    lightboxImg.src = images[currentImageIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    lightboxImg.src = images[currentImageIndex].src;
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
