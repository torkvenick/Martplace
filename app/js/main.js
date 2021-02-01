  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper = new Swiper('.swiper-container--multi', {
    // Optional parameters
    keyboard: {
      enabled: true,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.rate-star').rateYo({
    starWidth: "15px",
    normalFill: "#ffffff",
    ratedFill: "#ffa726",
    readOnly: true,
    rating: 4.5
  });

  var mixer = mixitup('.products__inner');

  $('.filter-btn').on('click', function () {
    $('.filter-choice').slideToggle();

  });