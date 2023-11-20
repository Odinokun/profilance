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
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        loop: false,
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },

  });

  const heroSlider = new Swiper("#hero-slider", {
    direction: "vertical",
    effect: "fade",
    autoplay: {
      delay: 4000,
    },
    loop: true,
    pagination: {
      el: ".hero-slider__pagination",
      clickable: true,
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

  // const clinicThumb = new Swiper("#clinic-slider-sm", {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   loop: true,
  //   watchSlidesProgress: true,
  //   breakpoints: {
  //     576: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     992: {
  //       centeredSlides: true,
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //     },
  //   },
  // });
  //
  // const clinicMain = new Swiper("#clinic-slider-lg", {
  //   thumbs: {
  //     swiper: clinicThumb,
  //   },
  //   effect: "fade",
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   loop: true,
  //   watchSlidesProgress: true,
  // });
  //
  // const whyWeSlider = new Swiper('#why-we-slider', {
  //   spaceBetween: 20,
  //   grabCursor: false,
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   freeModeMomentum: false,
  //   loop: true,
  //   speed: 4000,
  //   mousewheelControl: false,
  //   keyboardControl: false,
  //   autoplay: {
  //     delay: 1,
  //     disableOnInteraction: true
  //   },
  // });
  //
  // const reviewSlider = new Swiper('#review-slider', {
  //   loop: true,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   slidesPerView: 1.1,
  //   centeredSlides: false,
  //   autoplay: {
  //     delay: 3000,
  //     pauseOnMouseEnter: true,
  //     disableOnInteraction: false,
  //   },
  //   breakpoints: {
  //     576: {
  //       spaceBetween: 40,
  //       slidesPerView: 1.2,
  //     },
  //     768: {
  //       spaceBetween: 40,
  //       slidesPerView: 2.2,
  //     },
  //     992: {
  //       centeredSlides: true,
  //       spaceBetween: 20,
  //       slidesPerView: 3,
  //     }
  //   }
  // });
  //
  // const teamSlider = new Swiper('#team-slider', {
  //   loop: true,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   slidesPerView: 1.1,
  //   autoplay: {
  //     delay: 3000,
  //     pauseOnMouseEnter: true,
  //     disableOnInteraction: false,
  //   },
  //   breakpoints: {
  //     576: {
  //       slidesPerView: 2,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //     },
  //     1200: {
  //       slidesPerView: 4,
  //     }
  //   }
  // });
  //
  //
  // const thankSlider1 = new Swiper('#thank-slider-01', {
  //   spaceBetween: 10,
  //   grabCursor: false,
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   freeModeMomentum: true,
  //   loop: true,
  //   speed: 6000,
  //   mousewheelControl: false,
  //   keyboardControl: false,
  //   autoplay: {
  //     delay: 1,
  //     disableOnInteraction: true
  //   },
  //   breakpoints: {
  //     768: {
  //       direction: "vertical",
  //     }
  //   }
  // });
  //
  // const thankSlider2 = new Swiper('#thank-slider-02', {
  //   spaceBetween: 10,
  //   grabCursor: false,
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   freeModeMomentum: true,
  //   loop: true,
  //   speed: 6000,
  //   mousewheelControl: false,
  //   keyboardControl: false,
  //   autoplay: {
  //     delay: 1,
  //     disableOnInteraction: true,
  //     reverseDirection: true
  //   },
  //   breakpoints: {
  //     768: {
  //       direction: "vertical",
  //     }
  //   }
  // });
  //
  // const aboutSlider = new Swiper('#about-slider', {
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   spaceBetween: 20,
  //   slidesPerView: 1,
  // });

};