// ===HEADER_SCROLL===
var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});





$('.header__menu-link').on('click', function (e) {
    e.preventDefault();


    $('.header__menu-link').removeClass('open');
    $('.header__menu-link-dropdown__content').removeClass('open');


    $(this).toggleClass('open');
    $($(this).attr('href')).toggleClass('open');
});


$('#header__btn').click(function () {
    $('.form__poppup').fadeIn();
    $('body').toggleClass('lock');
    return false;

});
$('.close__btn').click(function () {
    $(this).parents('.form__poppup').fadeOut();
    $('body').toggleClass('lock');
    return false;
});

$(document).keydown(function (e) {
    if (e.keyCode === 27) {
        e.stopPropagation();
        $('.form__poppup').fadeOut();
    }
    $('body').toggleClass('lock');
});
$('.form__poppup').click(function (e) {
    if ($(e.target).closest('.form__body').length == 0) {
        $(this).fadeOut();
        $('body').toggleClass('lock');
    }
});




$('#burger__menu-icon').click(function () {
    $('.burger__menu-body').toggleClass('open');
    $('.burger__menu-bg').toggleClass('open');
    $('body').toggleClass('lock');
    return false;
});





$('.header__contacts-search_svg-box').on('click', function (e) {
    e.preventDefault();
    $('.search').toggleClass('open');
});


$('.burger__menu-icon-inner').on('click', function (e) {
    e.preventDefault();
    $('.burger__menu-icon').toggleClass('close');
});

const swiper_progect = new Swiper('.section__progect-slider', {

    slidesPerView: 'auto',
    witchOverflow: true,
    spaceBetween: 24,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    loopedSlides: 3,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


$('.accordion__body').hide();

$('.accordion__item').click(function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".accordion__body").slideUp();
    } else {
        $(".accordion__item.active .accordion__body").slideUp();
        $(".accordion__item.active").removeClass("active");
        $(this).addClass("active").find(".accordion__body").slideDown();
    }
    return false;
});

// Маска для телефона
if ($('.input__phone').length !== 0) {
    $('.input__phone').mask('+7 (999) 999-99-99');
};

// ===FOOTER_LINK_SKROLL===
$('#footer__logo').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
    return false;
});


// ===SCROLL TO TOP=== 
$(function scrollToTop() {

    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 700) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    });

});

if ($(window).width() < 500) {
    const swiper_about = new Swiper('.section__block-slider', {

        slidesPerView: 1.1,
        witchOverflow: true,
        slidesPerGroup: 1,
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        loopedSlides: 1,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 8,
            },

            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        }
    });
};

