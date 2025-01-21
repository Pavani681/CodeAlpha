const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function changeImage(src) {
  mainImage.src = src;
  currentIndex = images.indexOf(src);
}

function navigateImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  mainImage.src = images[currentIndex];
}

prevBtn.addEventListener("click", () => navigateImage(-1));
nextBtn.addEventListener("click", () => navigateImage(1));
