$(document).ready(function () {

    if ($('.product-image-thumb').length > 0) {
        var galleryThumbs = new Swiper('.product-image-thumb', {
            loop: false,
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
        });
    }

    // Inizialize the product image
    if ($('.product-image-swiper').length > 0) {
        var swiper = new Swiper('.product-image-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                // el: '.fb-swiper-pay-thumb',
                // slidesPerView: 5,
                swiper: galleryThumbs
            }
        });
    }






});