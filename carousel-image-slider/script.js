//get element html
const carouselSlide = document.querySelector(".carousel-slide"); // container for all image

const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0; //state current index
const totalImages = carouselImages.length;

let autoSlideInterval; // variabel to save interval for auto slide

function updateCarousel() {
  carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`;

  //update indicators
  indicators.forEach((indicators, index) => {
    indicators.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
  resetAutoSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
  resetAutoSlide();
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);

  autoSlideInterval = setInterval(nextSlide, 5000);
}

// add event listeber for next
nextBtn.addEventListener("click", nextSlide);

// add event listeber for prev
prevBtn.addEventListener("click", prevSlide);

autoSlideInterval = setInterval(nextSlide, 5000);

// addEventListener for indicators
indicators.forEach((indicators, index) => {
    indicators.addEventListener('click', () => {
        currentIndex = index
        updateCarousel()
        resetAutoSlide()
    })
})