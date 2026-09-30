const images = document.querySelectorAll(".carousel-image");
const previousButton = document.querySelector(".carousel-button.previous");
const nextButton = document.querySelector(".carousel-button.next");
const dotsContainer = document.querySelector(".carousel-dots");

if (!images.length || !previousButton || !nextButton || !dotsContainer) {
    console.warn("Carousel not initialized");
} else {
    let currentImage = 0;

    images.forEach((image, index) => {
        const dot = document.createElement("div");
        dot.classList.add("carousel-dot");

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

    function showImage(index) {
        if (index < 0 || index >= images.length) {
            return;
        }

        images[currentImage].classList.remove("active");
        dots[currentImage].classList.remove("active");

        currentImage = index;

        images[currentImage].classList.add("active");
        dots[currentImage].classList.add("active");
    }

    nextButton.addEventListener("click", () => {
        showImage((currentImage + 1) % images.length);
    });

    previousButton.addEventListener("click", () => {
        showImage((currentImage - 1 + images.length) % images.length);
    });
}
