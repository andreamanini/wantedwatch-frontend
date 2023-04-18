$(document).ready(function () {
    const navbarContainer = $('.smart-scroll');

    // detect scroll top or down
    if (navbarContainer.length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            var scroll_top = $(this).scrollTop();

            if (scroll_top < last_scroll_top) {
                navbarContainer.removeClass('scrolled-down').addClass('scrolled-up').removeClass('navbar-transparent');
            } else if(scroll_top > 100){
                navbarContainer.removeClass('scrolled-up').addClass('scrolled-down');
                navbarContainer.removeClass('sub-menu-open');
                closeSubMenu();
                closeLangDropdown();
            }
            if (scroll_top == 0){
                navbarContainer.addClass('navbar-transparent');
                navbarContainer.removeClass('sub-menu-open');
                closeSubMenu();
                closeLangDropdown();
            }
            last_scroll_top = scroll_top;
        });
    }


    $('.menu-item-toggle').on('click', function () {
        if ( ! navbarContainer.hasClass('sub-menu-open')){
            if (navbarContainer.hasClass('navbar-transparent')) {
                navbarContainer.removeClass('navbar-transparent');
            }

            $(this).next('.menu-dropdown').show();
            $(this).addClass('sub-menu-open');
            navbarContainer.addClass('sub-menu-open');
        } else {
            $(this).next('.menu-dropdown').hide();
            navbarContainer.removeClass('sub-menu-open');
            $(this).removeClass('sub-menu-open');

            if ($(window).scrollTop() === 0 && ! navbarContainer.hasClass('menu-open')){
                navbarContainer.addClass('navbar-transparent');
            }
        }
    });


    // JS used to open and close the mobile menu
    var mobileMenu = $('.item-list');
    var navbar = $('.navbar-container');
    $('.mobile-menu-btn').on('click', function () {
        $(this).toggleClass('open');
        if ( ! mobileMenu.hasClass('show')) {
            if (navbarContainer.hasClass('navbar-transparent')) {
                navbarContainer.removeClass('navbar-transparent');
            }
            mobileMenu.css('display', 'flex');
            mobileMenu.addClass('show');
            navbar.addClass('menu-open');
            $('body').addClass('overflow-hidden');
        } else {
            if ($(window).scrollTop() === 0){
                navbarContainer.addClass('navbar-transparent');
            }
            mobileMenu.css('display', 'none');
            mobileMenu.removeClass('show');
            navbar.removeClass('menu-open');
            $('body').removeClass('overflow-hidden');
        }
    });


    // Scroll to the element with the "scroll_to" class,
    if ($('.scroll_to').length){
        $('.scroll_down_btn').click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $('.scroll_to').offset().top
            }, 100);
        });
    }

    // Scroll the page to the top when click on the "top" link
    $('#back_to_top').on('click', function () {
        window.scrollTo(0, 0);
    });



    // Inizialize the hero-swiper in the header of the page
    if ($('.hero-swiper').length > 0) {
        var swiper = new Swiper('.hero-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // Inizialize the latest-arrivals-swiper in the homepage
    if ($('.latest-arrivals-swiper').length > 0) {
        var swiper = new Swiper('.latest-arrivals-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,

            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 768px
                576: {
                    slidesPerView: 2.6,
                    spaceBetween: 27,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 3.6,
                    spaceBetween: 27,
                },
                // when window width is >= 992px
                991: {
                    slidesPerView: 4.6,
                    spaceBetween: 27,
                },
                // when window width is >= 992px
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 27,
                },
            },
        });
    }

    // Inizialize the About-swiper in the about-page
    if ($('.about-swiper').length > 0) {
        var aboutSwiper = new Swiper('.about-swiper', {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: true,
            enabled: true,
            loop: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 992px
                991: {
                    slidesPerView: 1.2,
                    spaceBetween: 24,
                },
                // when window width is >= 1440px
                1440: {
                    slidesPerView: 1.6,
                    spaceBetween: 24,
                },
            },
        });
    }

    if (typeof AOS !== "undefined") {

        AOS.init();

        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 365, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    };

});

function closeLangDropdown() {
    $('.lang-dd').removeClass('show');
}

function closeSubMenu() {
    $('.menu-item-toggle').removeClass('sub-menu-open');
    $('.menu-dropdown').hide();
}