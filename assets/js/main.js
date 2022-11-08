// navbar 
const body = document.querySelector("body")
const navbar = document.querySelector(".navigation-bar")

const topBtn = document.querySelector(".scroll-top")
window.onscroll = () => {
    // navbar 
    this.scrollY > 50 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
    this.scrollY > 900 ? navbar.classList.add("hide") : navbar.classList.remove("hide")
    // scroll top show 
    this.scrollY > 900 ? topBtn.classList.add("show") : topBtn.classList.remove("show")
}


$(document).ready(function ($) {

    $("#search-btn").click(function () {
        $(".search-box").toggleClass("show")
    })
    $(".menu-btn").click(function () {
        $(".menu-items").addClass("show");
        $(this).addClass("hide")
    })
    $(".cancel-btn").click(function () {
        $(".menu-items").removeClass("show");
        $(".menu-btn").removeClass("hide")
    })
    // menu item

    // header 

    $('.header.owl-carousel').owlCarousel({
        autoHeight: true,
        autoWidth: false,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        margin: 10,
        // nav: true,
        // dot: true,
        items: 1,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        responsiveClass: true,
        responsive: {

            0: {
                autoplay: false,
                dots: false,
                nav: false

            },
            650: {
                nav: true,
                dots: false,
                autoplay: false,

            },

            1000: {
                nav: true,
                dot: true,
            }
        }
    })
    // project section

    /*Iso Tope */
    $(".gallery-btn li").on("click", function () {
        var selector = $(this).attr("data-filter");
        //alert(selector);
        $(".project-gallery").isotope({
            filter: selector,
        });
    });
    $(".project-list").isotope();

    // iso tope active classes
    var projectTitle = $(".gallery-btn li");
    if (projectTitle.length) {
        $(".gallery-btn li").on("click", function (event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
        });
    }


    $('.show-image').magnificPopup({
        type: 'image',
        preloader: true,
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title">Something</div>' +
                '<div class="mfp-counter"></div>' +
                '</div>' +
                '</div>',

            cursor: 'mfp-zoom-out-cur',

            titleSrc: 'Something',

            verticalFit: true,

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
        // isotope and Magnific Popup both wasn't working at the same place properly, that's why I created single image type gellery instead of multiple type gallery
    });

    /*For client Section */
    $(".clients.owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        autowidth: true,
        responsive: {
            0: {
                items: 1,
            },
            783: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        }
    });
    // for member
    $(".members.owl-carousel").owlCarousel({
        // autoWidth: true,
        items: 3,
        loop: false,
        margin: 10,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            783: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    });
    // video popup
    $('.play-video').magnificPopup({
        type: 'iframe',
        preloader: true,
        removalDelay: 300,
        mainClass: 'mfp-fade',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close "></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',

            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',

                    src: 'https://www.youtube.com/embed/_A7_tfvt0UY'
                },
            }
        }
    });
    // for Aos
    AOS.init();
    // Animate the scroll to top
    $(".scroll-top svg").on("click", function (event) {
        event.preventDefault();

        $("html, body").animate({
            scrollTop: 0,
        },
            200
        );
    });

});

// for counter  counter
let visibilityIds = ['#counters_1', '#counters_2', '#counters_3', '#counters_4'];
let defaultSpeed = 3000;


// for wow
if ($(".wow").length) {
    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true,
    });
    wow.init();
}

// Preloader JS
// function preloader() {
// if ($("#preloader").length) {
$(window).on("load", function () {
    $("#preloader").fadeOut();
    $("#preloader").delay(0).fadeOut("slow");
});
// }
// }
// preloader();