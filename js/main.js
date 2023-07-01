$(function () {



  $('.header__button, .header__button--small, .modal__cross, .overlay').on('click', function (e) {
    e.preventDefault()
    if ($('.modal__wrapper').hasClass('modal--open')) {
      $('.modal__wrapper').removeClass('modal--open')
      $('.overlay').removeClass('overlay--visible')
      $('body').css('overflow', "auto");  
      // $(".modal__input_tel").val('');
    } else {
      $('body').css('overflow', "hidden");  
      if ($(this).hasClass('header__button--small')) {
        $('.modal__wrapper_contacts').toggleClass('modal--open')
        $('.overlay').toggleClass('overlay--visible')
      } else if ($(this).hasClass('header__button')) {
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

  // $(".modal__input").keyup(function (e) {
  //   $("#contact_form").validate({
  //     onkeyup: true,
  //     rules: {
  //       name: {
  //         minlength: 2,
  //         required: true,
  //       },
  //       tel: {
  //         required: true,
  //         number: true,
  //         rangelength: [11, 11]
  //       }
  //     },
  //     messages: {
  //       name: {
  //         required: "Укажите имя",
  //         minlength: "Введите не менее 2 символов"
  //       },
  //       tel: {
  //         required: "Укажите телефон",
  //         rangelength: "Неверная длина номера",
  //         number: "Для ввода доступны только цифры"
  //       },
  //     },

  //     // invalidHandler: function () {
  //     //   console.log(validator.numberOfInvalids())
  //     // }
  //     submitHandler: function (form) {
  //       form.submit();
  //       // $("input:filled").css("background-color", "#bbbbff");
  //     }
  //   });
  // })






  // var digitsMask = IMask($('.modal__input_tel'), {
  //   mask: '+{7}(000)000-00-00'
  // });
  // $(".modal__input").keyup(function (e) {
  //   var $name = $('.modal__input_name');
  //   var $tel = $('.modal__input_tel');
  //   var $caption_name = $('.modal__caption_name');
  //   var $caption_tel = $('.modal__caption_tel');
  //   // console.log($name.val())
  //   // console.log(!$tel.val().includes('_') && ($len > 1))


  //   if ($name.val().length > 1) {
  //     $caption_name.css('display', 'none');
  //   } else {
  //     $caption_name.css('display', 'block');
  //   }

  //   if ($tel.val().length >= 11) {
  //     $caption_tel.css('display', 'none');
  //   } else {
  //     $caption_tel.css('display', 'block');
  //   }

  // })

  
  // $(".modal__input").focus(function (e) {
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

      $.mask.definitions['h'] = "[0|1|3|4|5|6|9]"
      $tel.focus(function () {
        $(this).setCursorPosition(3);
      }).mask("+7h999999999", {
        placeholder: "",
        autoclear: false,
      });


      $.mask.definitions['h'] = '[А-Яа-я]'
      $name.focus(function () {
        $(this).setCursorPosition(1);

      }).mask("hh?hhhhhhhhhhhhhhhhhhhhh", {
        placeholder: "",
        autoclear: false,
      });

    // })
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

    $.mask.definitions['h'] = "[0|1|3|4|5|6|9]"
    $tel.focus(function () {
      $(this).setCursorPosition(3);
    }).mask("+7h999999999", {
      placeholder: "",
      autoclear: false,
    });


    $.mask.definitions['h'] = '[А-Яа-я]'
    $name.focus(function () {
      $(this).setCursorPosition(1);

    }).mask("hh?hhhhhhhhhhhhhhhhhhhhh", {
      placeholder: "",
      autoclear: false,
    });

  // })
})



  // if ($('.modal__input_tel').find("").val() === "") {
  //   $('.modal__input_tel').find("input[name=firstname]")
  //   $('.modal__caption').css('display', 'block');
  //   return false;
  // }

  // $.mask.definitions['h'] = "[0|1|3|4|5|6|9]"
  // $(".modal__input_tel").mask("+7h999999999", {placeholder: " ", autoclear: false});

  // $('.modal__caption').css('display', 'block');
  // console.log(bgHeader)
  // var replaced = $('.modal__caption_name').html().replace('', 'The new string');
  // $('.modal__caption_name').html(replaced);

  // $('.modal__input').on('click', function (e) {
  // console.log($('.modal__input').val())
  // $('.modal__input').val()
  // console.log($('modal__body').validate())
  // }) +79511373890
  // }) 89511373890




  // $(".modal__input").keyup(function (e) {
  //   // console.log('Не в фокусе :(')


  //   var $name = $('.modal__input_name');
  //   var $tel = $('.modal__input_tel');
  //   var $caption_name = $('.modal__caption_name');
  //   var $caption_tel = $('.modal__caption_tel');
  //   var $len = $name.val().length;
  //   var $inc = $tel.val().includes('_');
  //   // console.log($name.val())
  //   // console.log(!$tel.val().includes('_') && ($len > 1))
  //   console.log($len)
  //   console.log($len>1 && !$inc)


  //   if ($name.val().length > 1) {
  //     $caption_name.css('display', 'none');
  //   } else {
  //     $caption_name.css('display', 'block');
  //   }

  //   if ($tel.val().includes(' ')) {
  //     $caption_tel.css('display', 'block');
  //   } else {
  //     $caption_tel.css('display', 'none');
  //   }





  //   if (($name.val().length > 1) && (!$tel.val().includes('_'))) {
  //     $('.modal__button').removeClass('button--inactive')

  //     // if ($name.val().length > 1) {
  //     //   $caption_name.css('display', 'none');
  //     // }

  //     // if (!$tel.val().includes(' ')) {
  //     //   $caption_tel.css('display', 'block');
  //     // }
  //   }
  // })


  // $(".modal__input").change(function (e) {
  //   e.preventDefault()
  //   // для читаемости кода
  //   var $form = $(this);
  //   // вы же понимаете, о чём я тут толкую?
  //   // это ведь одна из ипостасей AJAX-запроса 
  //   if ($form.val().length > 1) {
  //     $('.modal__caption_name').css('display', 'none');
  //     if ($form.val().includes(' ')) {
  //       $('.modal__caption_tel').css('display', 'block');
  //     } else {
  //       $('.modal__caption_tel').css('display', 'none');
  //     }
  //   } else {
  //     $('.modal__caption_name').css('display', 'block');
  //   }

  // })



  // console.log($form.val().includes(' '))
  // $.post(
  // $form.attr("action"), // ссылка куда отправляем данные
  // $form.serializeArray(),     // данные формы
  // console.log($form.val()),
  // );
  // отключаем действие по умолчанию
  // return false;
  // });
  // console.log($('.modal__input_tel').find("11").val() === '11')

  // $(window).scroll(function(e) {

  //     console.log('fff')

  
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

})