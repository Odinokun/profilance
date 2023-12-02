module.exports = function () {

  const PartnersSlider = new Swiper("#partners-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      580: {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

  });

  const heroSlider = new Swiper("#hero-slider", {

    effect: "fade",
    autoplay: {
      delay: 4000,
    },
    loop: true,
    pagination: {
      el: ".hero-slider__pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        direction: "vertical",
      },
    },
  });

  const TreatmentsSlider = new Swiper("#treatments-slider", {
    slidesPerView: 1.2,
    spaceBetween: 8,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1024: {
        slidesPerView: 1.4,
      },
      1200: {
        slidesPerView: 1.7,
      },
    },
    navigation: {
      nextEl: '.treatments-slider__next',
    },
    pagination: {
      el: ".treatments-slider__pagination",
      clickable: true,
    },
  });

  const TeamSlider = new Swiper("#team-slider", {
    slidesPerView: 1.2,
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".team-slider__pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,

      },
    },

  });

};