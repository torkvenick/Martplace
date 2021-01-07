  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: false,
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
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mixer = mixitup('.products__inner');



