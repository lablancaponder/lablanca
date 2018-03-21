
$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
    });
	
    // 3. navigation
    $('a[href*="#"]:not([href="#"])').on("click", function() {
        console.log("click");
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=" + this.hash.slice(1) + "]');
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
	
    $(window).on("scroll", function() {
        // 4. switchers
        // 4.1. header navigation mobile and logo color switch
        if ($(this).scrollTop() > 5) {
            $(".header-navigation-xs").addClass("header-navigation-xs-dark");
            $(".header-navigation-xs .logo-holder").addClass("logo-holder-dark");
        } else {
            $(".header-navigation-xs").removeClass("header-navigation-xs-dark");
            $(".header-navigation-xs .logo-holder").removeClass("logo-holder-dark");
        }
        // 4.2. header color switch, header navigation desktop color switch, link menu color switch
        if ($(this).scrollTop() > 100) {
            $("header").addClass("navigation-bg-light");
            $(".header-navigation").addClass("header-navigation-dark");
            $(".link-underline-menu").addClass("link-underline-menu-dark");
        } else {
            $("header").removeClass("navigation-bg-light");
            $(".header-navigation").removeClass("header-navigation-dark");
            $(".link-underline-menu").removeClass("link-underline-menu-dark");
        }
        // 4.3. header logo switch
        if ($(this).scrollTop() > 500) {
            $("header .header-navigation .logo-holder").removeClass("closed");
        } else {
            $("header .header-navigation .logo-holder").addClass("closed");
        }
		
        // 5. to top arrow animation
        if ($(this).scrollTop() > 400) {
            $(".to-top-arrow").addClass("show");
        } else {
            $(".to-top-arrow").removeClass("show");
        }
		
        // 6. home fadeOut animation
        $(
            "h1.home-page-title, h2.home-page-title, .sign-up-button, .timeline .swiper-slide-content, .timeline .swiper-pagination, .timeline .swiper-button-prev, .timeline .swiper-button-next, .typed-effect"
        ).css("opacity", 1 - $(window).scrollTop() / 500);
        $(".home-page-img-gallery-carousel-text").css("opacity", 1 - $(window).scrollTop() / 700);
    })
	
	
    // 8. forms
    // 8.1. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
    
    // 9. modals
    // 9.1. sign up modal
    $(".sign-up-modal-launcher, .sign-up-modal-closer").on("click", function() {
        if ($(".sign-up-modal").hasClass("open")) {
            $(".sign-up-modal").removeClass("open");
            $(".sign-up-modal").addClass("close");
        } else {
            $(".sign-up-modal").removeClass("close");
            $(".sign-up-modal").addClass("open");
        }
    });
    // 9.1.1. sign up modal additional CLOSER
    $(".header-navigation a, .header-navigation-xs a").on("click", function() {
        $(".sign-up-modal").removeClass("open");
        $(".sign-up-modal").addClass("close");
    });
    // 9.2. contact modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function() {
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open");
            $(".contact-modal").addClass("close");
        } else {
            $(".contact-modal").removeClass("close");
            $(".contact-modal").addClass("open");
        }
    });
    // 9.2.1. contact modal additional CLOSER
    $(".header-navigation a, .header-navigation-xs a").on("click", function() {
        $(".contact-modal").removeClass("open");
        $(".contact-modal").addClass("close");
    });
	
    
	
    // 11. slick slider
    // 11.1. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	// 11.2. slick fullscreen slider TYPED text
    $(".slick-fullscreen").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 800,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });

	
    // 13. swiper slider
    // 13.1. swiper parallax slider
    var swiper = new Swiper(".parallax .swiper-container", {
        autoplay: 4000,
        speed: 800,
        parallax: true,
        mousewheelControl: false,
        keyboardControl: false,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true
    });
    // 13.2. swiper timeline slider
    var timelineSwiper = new Swiper(".timeline .swiper-container", {
        direction: "vertical",
        autoplay: false,
        speed: 1600,
        spaceBetween: 0,
        loop: false,
        mousewheelControl: false,
        keyboardControl: true,
        pagination: ".swiper-pagination",
        paginationBulletRender: function(swiper, index, className) {
            var year = document.querySelectorAll(".swiper-slide")[index].getAttribute("data-year");
            return '<span class="' + className + '">' + year + '</span>';
        },
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true,
        breakpoints: {
            768: {
                direction: "horizontal",
            }
        }
    });
    // 13.3. swiper thumbnail slider horizontal thumbs
    var swipersliderTop = new Swiper(".swiper-slider-top", {
        direction: "vertical",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        autoplay: 4000,
        speed: 1600,
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: false,
        keyboardControl: false
    });
    var swipersliderBottom = new Swiper(".swiper-slider-bottom", {
        direction: "horizontal",
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: false,
        keyboardControl: false
    });
    swipersliderTop.params.control = swipersliderBottom;
    swipersliderBottom.params.control = swipersliderTop;
	
    // 14. magnificPopup
    // 14.1. magnificPopup image gallery
    $(".popup-gallery-slider").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade"
        });
    });
	
	// 15. typed text
    $(".typed-title").typed({
        strings: ["Fully Responsive", "Coming Soon Page", "Made for KINGS"],
        typeSpeed: 25,
        backDelay: 3500,
        loop: true
    });


});