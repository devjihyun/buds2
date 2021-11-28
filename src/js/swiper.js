import Swiper from "./swiper-bundle";

var swiper = new Swiper(
    '.buy-swiper-container', {
	direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    a11y: {
        prevSlideMessage: "이전 슬라이드로",
        nextSlideMessage: "다음 슬라이드로",
        paginationBulletMessage: "{{index}}번 슬라이드로 이동",
        slideLabelMessage: "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드",
    },

    on: {
        slideChangeTransitionStart: function() {
            $(".swiper-pagination .swiper-pagination-bullet")
            .attr("aria-current", "false")
            .filter(".swiper-pagination-bullet-active")
            .attr("aria-current", "true")
        }
    }
});

let names = ['디자인', '착용감', '사운드', '통화품질'];

var swiper = new Swiper(
    '.pod-swiper-container', {
	direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + '<span class="page-name">' + (names[index]) + '</span>' +
            '<div class="progress-bar">' + '<div class="progress-bar-inner">' + '</div>' + '</div>' + '</div>';
        },
    },
    

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    a11y: {
        prevSlideMessage: "이전 슬라이드로",
        nextSlideMessage: "다음 슬라이드로",
        paginationBulletMessage: "{{index}}번 슬라이드로 이동",
        slideLabelMessage: "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드",
    },

    on: {
        slideChangeTransitionStart: function() {
            $(".swiper-pagination .swiper-pagination-bullet")
            .attr("aria-current", "false")
            .filter(".swiper-pagination-bullet-active")
            .attr("aria-current", "true")
        }
    }
});

var swiper = new Swiper(
    '.others-swiper-container', {
	direction: 'horizontal',
    slidesPerView: "auto",

    a11y: {
        slideLabelMessage: null,
    },
});



$( ".swiper-pagination-wrap" ).click(function() {
    $( this ).toggleClass( "pause" );
    if( $(".ico-control").html() == '슬라이드 재생' ) {
        $(".ico-control").html('슬라이드 정지');
    }
    else {
        $(".ico-control").html('슬라이드 재생');
    }
});

$(".swiper-pagination-wrap").hasClass("pause")(function() {
    $(this).swiper.autoplay.stop();
}, function() {
    $(this).swiper.autoplay.start(); 
});




