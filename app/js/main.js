  var mySwiper = new Swiper('.product__container', {
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

  var mySwiper = new Swiper('.products-feed__container', {
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

  var mySwiper = new Swiper('.feedback__container', {
    // Optional parameters
    keyboard: {
      enabled: true,
    },
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mixer = mixitup('.products__inner');

  $('.rate-star').rateYo({
    starWidth: "12px",
    normalFill: "#ffffff",
    ratedFill: "#ffa726",
    readOnly: true,
    rating: 4.5
  });


  $(".products__filter").on("click", function (e) {
    e.preventDefault();
    $(".products__options").slideToggle(200);
    $(document).mouseup(function (e) {
      // событие клика по веб-документу
      let div = $(".products__filter"); // тут указываем ID элемента
      if (
        !div.is(e.target) && // если клик был не по нашему блоку
        div.has(e.target).length === 0
      ) {
        $(".products__options").hide(200); // скрываем его
      }
    });

  });