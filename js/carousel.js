const images = document.querySelectorAll(".carousel-image");

const previousButton = document.querySelector(".carousel-button.previous");
const nextButton = document.querySelector(".carousel-button.next");
const dotsContainer = document.querySelector(".carousel-dots");

let currentImage = 0;


/* Create the dots */

images.forEach((image, index) => {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    
    // Add the thumbnail image
    dot.style.backgroundImage = `url('${image.src}')`;
    
    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        showImage(index);
    });

    dotsContainer.appendChild(dot);
});


const dots = document.querySelectorAll(".carousel-dot");


/* Show an image */

function showImage(index) {

    images[currentImage].classList.remove("active");
    dots[currentImage].classList.remove("active");

    currentImage = index;

    images[currentImage].classList.add("active");
    dots[currentImage].classList.add("active");
}


/* Next */

nextButton.addEventListener("click", () => {

    let nextImage = currentImage + 1;

    if (nextImage >= images.length) {
        nextImage = 0;
    }

    showImage(nextImage);
});


/* Previous */

previousButton.addEventListener("click", () => {

    let previousImage = currentImage - 1;

    if (previousImage < 0) {
        previousImage = images.length - 1;
    }

    showImage(previousImage);
});
```
