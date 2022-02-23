const swiper = new Swiper(".swiper", {
  // loop: true,
  spaceBetween: 16,
  slidesPerView: 1.1,
  initialSlide: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  centeredSlides: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },
  },
});

feather.replace();
