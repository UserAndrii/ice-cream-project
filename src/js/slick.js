$(document).ready(function () {
  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    speed: 500,
    easing: 'ease',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: false,
    fade: false,
  });

  $('.gallery__slider').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    speed: 500,
    easing: 'ease',
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: false,
    centerMode: true,
    fade: true,
    cssEase: 'linear',
  });
});
