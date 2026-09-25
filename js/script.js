/* ==========================================
   PORTFOLIO IMAGE LIGHTBOX
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const galleryImages =
        document.querySelectorAll(".gallery-image");

    const lightbox =
        document.getElementById("imageLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxCaption =
        document.getElementById("lightboxCaption");

    const closeButton =
        document.querySelector(".lightbox-close");

    const previousButton =
        document.querySelector(".lightbox-prev");

    const nextButton =
        document.querySelector(".lightbox-next");


    let currentIndex = 0;


    /* ------------------------------------------
       OPEN IMAGE
    ------------------------------------------ */

    function openLightbox(index) {

        currentIndex = index;

        const image = galleryImages[currentIndex];

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightboxCaption.textContent = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";
    }


    /* ------------------------------------------
       CLOSE IMAGE
    ------------------------------------------ */

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";
    }


    /* ------------------------------------------
       NEXT IMAGE
    ------------------------------------------ */

    function showNext() {

        currentIndex++;

        if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }

        openLightbox(currentIndex);
    }


    /* ------------------------------------------
       PREVIOUS IMAGE
    ------------------------------------------ */

    function showPrevious() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = galleryImages.length - 1;
        }

        openLightbox(currentIndex);
    }


    /* ------------------------------------------
       CLICK GALLERY IMAGES
    ------------------------------------------ */

    galleryImages.forEach(function (image, index) {

        image.addEventListener("click", function () {

            openLightbox(index);

        });

    });


    /* ------------------------------------------
       BUTTONS
    ------------------------------------------ */

    closeButton.addEventListener("click", closeLightbox);

    nextButton.addEventListener("click", showNext);

    previousButton.addEventListener("click", showPrevious);


    /* ------------------------------------------
       CLICK BACKGROUND TO CLOSE
    ------------------------------------------ */

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });


    /* ------------------------------------------
       KEYBOARD CONTROLS
    ------------------------------------------ */

    document.addEventListener("keydown", function (event) {

        if (!lightbox.classList.contains("active")) {
            return;
        }

        if (event.key === "Escape") {

            closeLightbox();

        }

        if (event.key === "ArrowRight") {

            showNext();

        }

        if (event.key === "ArrowLeft") {

            showPrevious();

        }

    });

});
