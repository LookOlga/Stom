$(function() {
    const owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 0,
      loop: true,
      nav: true,
      autoplay: true,
      touchDrag: true,
      autoplayTimeout: 5000,
      smartSpeed: 4000,
      slideTransition: 'linear',
      responsive: {
        320: {
          items: 1,
          nav: false,
        },
        560: {
          items: 2,
          nav: false

        },
        992: {
          items: 3,
        },
        1200: {
            items: 4
        }
      }
    });
  });