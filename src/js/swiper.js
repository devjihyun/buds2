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

var swiper = new Swiper(
    '.pod-swiper-container', {
	direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' +  (menu[index]) + '</span>';
        }
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