$(function () {

  $('.header__logo, .header__nav-item a').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top - 114
    }, {
      duration: 800,   // по умолчанию «400» 
      easing: "swing" // по умолчанию «swing» 
    });

    return false;
  });

  $('.header__button, .header__button--small, .comfort__button, .modal__cross, .overlay').on('click', function (e) {
    e.preventDefault()
    if ($('.modal__wrapper').hasClass('modal--open')) {
      $('.modal__wrapper').removeClass('modal--open')
      $('.overlay').removeClass('overlay--visible')
      $('html').css('overflow', "auto");
    } else {
      $('html').css('overflow', "hidden");
      if ($(this).hasClass('button--small')) {
        $('.modal__wrapper_contacts').toggleClass('modal--open')
        $('.overlay').toggleClass('overlay--visible')
      } else if ($(this).hasClass('button')) {
        $('.modal__wrapper_form').toggleClass('modal--open')
        $('.overlay').toggleClass('overlay--visible')
      }
    }
  })

  $('.services__filter-button').on('click', function (e) {
    e.preventDefault()
    $('.services__filter-button').toggleClass('button--active')
    $('.services__body-inner').toggleClass('services__filter-body--invisible')
  })

  $('.burger-menu__wrapper, .header__nav-link').on('click', function (e) {
    e.stopPropagation(); 
    $('.header__top').toggleClass('header__top--open')
    $('html').toggleClass('html__hidden')
  })

  $(".modal__input").keyup(function (e) {

    var $name = $(".modal__input_name")
    var $tel = $(".modal__input_tel");
    console.log($name.val())
    console.log($tel.val())
    console.log($name.val().length)
    console.log($tel.val().length)

    $(".input_name").keyup(function (e) {
      if ($name.val().length < 2) {
        $(".modal__caption_name").css('display', 'block');
      } else {
        $(".modal__caption_name").css('display', 'none');
      }
    })
    $(".modal__input_tel").keyup(function (e) {
      if ($tel.val().length < 12) {
        $(".modal__caption_tel").css('display', 'block');
      } else {
        $(".modal__caption_tel").css('display', 'none');
      }
    })

    if ($name.val().length >= 2 && $tel.val().length == 12) {
      $('.modal__button').removeClass('button--inactive')
    } else {
      $('.modal__button').addClass('button--inactive')
    }

    $.fn.setCursorPosition = function (pos) {
      if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
      } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

    $tel.mask.definitions['h'] = "[0|1|3|4|5|6|9]"
    $tel.focus(function () {
      $(this).setCursorPosition(3);
    }).mask("+7h999999999", {
      placeholder: "",
      autoclear: false,
    });


    $name.mask.definitions['h'] = '[А-Яа-я]'
    $name.focus(function () {
      $(this).setCursorPosition(1);

    }).mask("hh?hhhhhhhhhhhhhhhhhhhhh", {
      placeholder: "",
      autoclear: false,
    });

  })

  $(".contact__input").keyup(function (e) {

    var $name = $(".contact__input_name")
    var $tel = $(".contact__input_tel");
    console.log($name.val())
    console.log($tel.val())
    console.log($name.val().length)
    console.log($tel.val().length)

    $(".input_name").keyup(function (e) {
      if ($name.val().length < 2) {
        $(".contact__caption_name").css('display', 'block');
      } else {
        $(".contact__caption_name").css('display', 'none');
      }
    })
    $(".contact__input_tel").keyup(function (e) {
      if ($tel.val().length < 12) {
        $(".contact__caption_tel").css('display', 'block');
      } else {
        $(".contact__caption_tel").css('display', 'none');
      }
    })

    if ($name.val().length >= 2 && $tel.val().length == 12) {
      $('.contact__button').removeClass('button--inactive')
    } else {
      $('.contact__button').addClass('button--inactive')
    }

    $.fn.setCursorPosition = function (pos) {
      if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
      } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

    $tel.mask.definitions['h'] = "[0|1|3|4|5|6|9]"
    $tel.focus(function () {
      $(this).setCursorPosition(3);
    }).mask("+7h999999999", {
      placeholder: "",
      autoclear: false,
    });


    $name.mask.definitions['h'] = '[А-Яа-я]'
    $name.focus(function () {
      $(this).setCursorPosition(1);

    }).mask("hh?hhhhhhhhhhhhhhhhhhhhh", {
      placeholder: "",
      autoclear: false,
    });

  })

  // $(window).on('scroll', function () {
  //   if (($(window).scrollTop() > 0) && ($(window).width() > 992)) {
  //     $(".header__top").css('background-color', "#d9fadd");
  //     $(".header__btn-box--small").css('background-color', "#78c08240");
  //   } else {
  //     $(".header__top").css("background-color", "transparent");
  //     $(".header__btn-box--small").css("background-color", "#ffffff73");
  //   }
  // });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $(".header__top").css('background-color', "#d9fadd");
      $(".header__btn-box--small").css('background-color', "#78c08240");
    } else {
      $(".header__top").css("background-color", "transparent");
      $(".header__btn-box--small").css("background-color", "#ffffff73");
    }
  });

    var swiper1 = new Swiper('.portfolio__slider', {
      slidesPerView: 'auto',
      speed: 1000,
      spaceBetween: 30,
      slidesPerView: 1,
      loop: true,
      // effect: 'fade',
      // parallax: true,

      breakpoints: {
        1500: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 3.4,
        },
        // 700: {
        //   slidesPerView: 2.5,
        // },
        750: {
          slidesPerView: 3,
        },
        // 500: {
        //   slidesPerView: 1,
          
        //   spaceBetween: 28,
        // },
        700: {
          // width: 500,
          slidesPerView: 2.5,
          // centeredSlides: true,
          // spaceBetween: 28,
        },
        600: {
          slidesPerView: 2,
        },
        577: {
          slidesPerView: 2,
        },
        200: {
          slidesPerView: 1,
          spaceBetween: 28,
          // centeredSlides: true,
        },
      },
      navigation: {
        nextEl: '.portfolio__slider .portfolio__arrow--next',
        prevEl: '.portfolio__slider .portfolio__arrow--prev',
      },
    });
    var swiper2 = new Swiper('.customers__slider', {
      speed: 1000,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 2.5,
      breakpoints: {
        1330: {
          slidesPerView: 2.3,
        },
        1201: {
          slidesPerView: 2,
        },
        1150: {
          slidesPerView: 1.6,
        },
        1050: {
          slidesPerView: 1.5,
        },
        993: {
          slidesPerView: 1.2,
        },
        769: {
          // centeredSlides: true,
          slidesPerView: 3,
        },
        670: {
          slidesPerView: 2.5,
        },
        515: {
          slidesPerView: 2,
        },
        400: {
          slidesPerView: 1.5,
        },
        350: {
          slidesPerView: 1.2,
        },
        200: {
          slidesPerView: 1,
        },

      },
      navigation: {
        nextEl: '.customers__slider .customers__arrow--next',
        prevEl: '.customers__slider .customers__arrow--prev',
      },
    });

  })