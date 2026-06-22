/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
jQuery('img.svg').each(function () {
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  jQuery.get(imgURL, function (data) {
    var $svg = jQuery(data).find('svg');

    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }

    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    $svg = $svg.removeAttr('xmlns:a');

    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
    }

    $img.replaceWith($svg);
  }, 'xml');
});
$('.popup-wrap, .close, .sizes-choose-item, .added-to-cart__continue, .added-to-cart-close').on('click', function (e) {
  if (e.target == this) {
    $(this).closest('.popup').fadeOut();
  }
});
$('.menu-tab[data-tab]').on('click', function (e) {
  $('.menu-tab, .menu-content').removeClass('active');
  $(this).addClass('active');
  $('.menu-content[data-tab="' + $(this).data('tab') + '"]').addClass('active');
});
$('.sizes-tab[data-stab]').on('click', function (e) {
  $('.sizes-tab, .sizes-cont').removeClass('active');
  $(this).addClass('active');
  $('.sizes-cont[data-stab="' + $(this).data('stab') + '"]').addClass('active');
});
$('[data-popup]').on('click', function (e) {
  $('#' + $(this).data('popup')).fadeIn();
});
$('[data-menu]').on('click', function (e) {
  e.preventDefault();
  $('#menu-p').fadeIn();
  $('.menu-tab[data-tab="' + $(this).data('menu') + '"]').click();
});
$('.header-b').on('click', function (e) {
  e.preventDefault();
  $('#menu-p').fadeIn();
});
var swiper = new Swiper('.main-banner', {
  speed: 800,
  spaceBetween: 0,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.main-banner-dots',
    type: 'bullets'
  },
  loop: true
});
var swiper2 = new Swiper('.sec-arrivals', {
  speed: 800,
  spaceBetween: 0,
  slidesPerView: 2.2,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3.2
    },
    // when window width is >= 640px
    720: {
      slidesPerView: 4.5
    }
  }
});
var swiper4 = new Swiper('.sec-arrivals--gap', {
  speed: 800,
  spaceBetween: 10,
  slidesPerView: 2.2,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3.2
    },
    // when window width is >= 640px
    720: {
      slidesPerView: 4.5
    }
  }
});
var swiper3 = new Swiper('.sec-product', {
  speed: 800,
  spaceBetween: 8,
  slidesPerView: 2,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4
    }
  }
});
var swiper5 = new Swiper('.catalog-block--slider', {
  speed: 800,
  spaceBetween: 10,
  slidesPerView: 2.5,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3.6
    },
    720: {
      slidesPerView: 4.6
    },
    // when window width is >= 640px
    1050: {
      slidesPerView: 6,
      spaceBetween: 16
    }
  }
});
var swiper6 = new Swiper('.catalog-block--slider-c', {
  speed: 800,
  spaceBetween: 10,
  slidesPerView: 2.5,
  // или 'auto', если нужно
  breakpoints: {
    480: {
      slidesPerView: 3
    },
    640: {
      slidesPerView: 4
    },
    1050: {
      slidesPerView: 7,
      spaceBetween: 16
    }
  },
  on: {
    init: function init() {
      checkSlidesCount(this);
    },
    resize: function resize() {
      checkSlidesCount(this);
    },
    // Если есть ленивая загрузка:
    lazyImageReady: function lazyImageReady() {
      checkSlidesCount(this);
    }
  }
}); // Проверяем, нужно ли центрировать слайды

function checkSlidesCount(swiper) {
  var wrapper = swiper.el.querySelector('.swiper-wrapper');
  var slidesCount = swiper.slides.length;
  var currentSlidesPerView = swiper.params.slidesPerView; // Включаем/выключаем центрирование через CSS класс

  if (slidesCount <= currentSlidesPerView) {
    wrapper.classList.add('centered-slides');
  } else {
    wrapper.classList.remove('centered-slides');
  }
} // Функция для обновления centeredSlides


function updateCenteredSlides(swiper) {
  var slidesCount = swiper.slides.length;
  var currentSlidesPerView = swiper.params.slidesPerView; // Если слайдов меньше или равно slidesPerView, центрируем

  swiper.params.centeredSlides = slidesCount <= currentSlidesPerView; // Обновляем Swiper

  swiper.update();
}

var swiper7 = new Swiper('.catalog-block--four-gap', {
  speed: 800,
  spaceBetween: 10,
  slidesPerView: 1.3,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5
    },
    // when window width is >= 640px
    1050: {
      slidesPerView: 4
    }
  }
});
var swiper8 = new Swiper('.catalog-block--three-gap', {
  speed: 800,
  spaceBetween: 10,
  slidesPerView: 1.3,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5
    },
    // when window width is >= 640px
    1050: {
      slidesPerView: 3
    }
  }
});
var swiper9 = new Swiper('.catalog-block--three', {
  speed: 800,
  spaceBetween: 0,
  slidesPerView: 2.3,
  breakpoints: {
    // when window width is >= 480px
    640: {
      slidesPerView: 3
    }
  }
});
var swiper11 = new Swiper('.lk-order-item-products', {
  speed: 800,
  spaceBetween: 5,
  slidesPerView: 'auto'
});
var swiper12 = new Swiper('.sec-care-other-slider', {
  speed: 800,
  spaceBetween: 10,
  slidesPerView: 1.2,
  breakpoints: {
    // when window width is >= 480px
    720: {
      slidesPerView: 3
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3.6,
      spaceBetween: 20
    }
  }
});
$('.item-card-img-overlay-nav-item').on('mouseover', function () {
  var id = $(this).data('item');
  var item = $(this).closest('.item-card-img');
  $(item).find('.item-card-img-list-item, .item-card-img-nav-item').removeClass('active');
  $(item).find('.item-card-img-list-item[data-item="' + id + '"], .item-card-img-nav-item[data-item="' + id + '"]').addClass('active');
});
$('.has-child').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active').next().slideToggle();
});
$('body').on('click', '.header-pc-open, .header-pc-close', function (e) {
  $('.header-s-pc').toggleClass('active');
});
$('body').on('click', '.header-m-open, .header-m-close', function (e) {
  $('.header-m-form').toggleClass('active');
});
$('.footer-menu-title').on('click', function (e) {
  if (window.innerWidth <= 1400) {
    $(this).next().slideToggle();
  }
});
$(document).on('scroll', function () {
  var documentScroll = $(document).scrollTop();

  if (documentScroll >= 1) {
    $('header, .header-catalog').addClass('scrolled');
  } else {
    $('header, .header-catalog').removeClass('scrolled');
  }
});
$(window).on('load resize', function () {// if ($(window).width() <= 480) {
  //   $('.lk-order-item-products:not(.slick-initialized)').slick({
  //     centerMode: false,
  //     dots: false,
  //     arrows: false,
  //     infinite: false,
  //     slidesToShow: 2,
  //     variableWidth: true,
  //     swipeToSlide: true,
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           variableWidth: true
  //         }
  //       },
  //     ]
  //   });
  // } else {
  //   $(".lk-order-item-products.slick-initialized").slick("unslick");
  // }
  //   if ($(window).width() <= 1280) {
  //     $('.item-pg-img-wrap:not(.slick-initialized)').slick({
  //       centerMode: false,
  //       dots: true,
  //       arrows: false,
  //       infinite: true,
  //       slidesToShow: 1,
  //       swipeToSlide: true,
  //     });
  //   } else {
  //     $(".item-pg-img-wrap.slick-initialized").slick("unslick");
  //   }
  // })
});
var mySwiper = undefined;
var mySwiper2 = undefined;

function initSwiper() {
  var screenWidth = $(window).width();

  if (screenWidth < 1050 && mySwiper == undefined) {
    mySwiper = new Swiper('.item-card-img-list--slider', {
      speed: 800,
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.s-pagination',
        type: 'bullets'
      }
    });
  } else if (screenWidth > 1050 && mySwiper != undefined) {
    $('.item-card-img-list--slider').each(function () {
      this.swiper.destroy();
    });
    mySwiper = undefined;
    jQuery('.item-card-img-list--slider .swiper-wrapper').removeAttr('style');
    jQuery('.item-card-img-list--slider .swiper-slide').removeAttr('style');
  }
}

function initSwiper2() {
  var screenWidth = $(window).width();

  if (screenWidth < 1280 && mySwiper2 == undefined) {
    mySwiper2 = new Swiper('.item-pg-img-wrap', {
      speed: 800,
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.s-pagination',
        type: 'bullets'
      }
    });
  } else if (screenWidth > 1280 && mySwiper2 != undefined) {
    $('.item-pg-img-wrap').each(function () {
      this.swiper.destroy();
    });
    mySwiper2 = undefined;
    jQuery('.item-pg-img-wrap .swiper-wrapper').removeAttr('style');
    jQuery('.item-pg-img-wrap .swiper-slide').removeAttr('style');
  }
} //Swiper plugin initialization


initSwiper();
initSwiper2(); //Swiper plugin initialization on window resize

$(window).on('resize', function () {
  initSwiper();
  initSwiper2();
});
$('.filters-tab').on('click', function () {
  $('[data-ftab]').hide();
  $('[data-ftab=' + $(this).data('f') + ']').show();
});
$('.filters-back').on('click', function () {
  $('[data-ftab]').hide();
  $('[data-ftab="main"]').show();
});
$(".anchor").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top - 100
  }, 1000);
});
$('.item-pg-acc-head:not(.--enable-open)').on("click", function (event) {
  $(this).toggleClass('active').next().slideToggle();
});
$('.cart-notice-close').on("click", function (event) {
  $('.cart-notice').hide();
});
$('body').on('input keydown keyup propertychange click paste cut copy mousedown mouseup change', '.input, .ta', function () {
  if ($(this).val().length > 0) {
    $(this).addClass('active');
  } else if ($(this).text().length > 0) {
    $(this).addClass('active');
  } else $(this).removeClass('active');
});
var menu_selector = '.item-pg-img-mini';

function onScroll() {
  console.log(1);
  var scroll_top = $(document).scrollTop();
  $(menu_selector + " a").each(function () {
    var hash = $(this).attr("href");
    var target = $(hash);

    if (target.length) {
      if (target.position().top - 150 <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(menu_selector + " .item-pg-img-mini-item").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    }
  });
}

onScroll();
$(document).on("scroll", onScroll);
$('[data-toggle="datepicker"]').datepicker();
$('.cart-item-size-inp:not(.--nt)').on('click', function () {
  $(this).toggleClass('active');
});
$(document).mouseup(function (e) {
  var container = $(".cart-item-size-inp");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $('.cart-item-size-inp').removeClass('active');
  }
});
$('.clients__item-head').on("click", function (event) {
  $(this).toggleClass('active').next().slideToggle();
});
$('input.--phone').mask("+7(999) 999-99-99");
$('.item-pg-size-shoose').on('click', function () {
  if (window.innerWidth > 450) {
    $(this).next().toggle();
  } else {
    $('#schose').fadeIn();
  }
});
$('.item-pg-size--s').on('click', function () {
  $(this).next().toggle();
});
$('.cart-item-size-inp-var--s').on('click', function () {
  $(this).closest('.size-vars').hide();
  $('.item-pg-size--s').html($(this).text());
});
$('.cart-item-size-inp-var').on('click', function () {
  $(this).closest('.size-vars').hide();
});
$(document).mouseup(function (e) {
  var container = $(".item-pg-size-shoose");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $('.size-vars').hide();
  }
}); // First we get the viewport height and we multiple it by 1% to get a value for a vh unit

var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
$(window).on("resize", function () {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
});
$('.shop-item-show').on('click', function () {
  var map = $(this).closest('.shop-item').find('.shop-item-iframe iframe')[0];
  $(map).attr('src', $(map).attr('data-src')).addClass('active');
}); // Function to check if element is in viewport

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
} // Target elements


var buttonsElement = document.querySelector('.item-pg-buttons');
var headerElement = document.querySelector('.header-product');

if (buttonsElement && headerElement) {
  // Create an IntersectionObserver for better performance
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting || window.innerWidth < 1200) {
        // Item buttons are in view - hide header
        headerElement.style.display = 'none';
      } else {
        // Item buttons are not in view - show header
        headerElement.style.display = '';
      }
    });
  }, {
    threshold: 0.1 // Trigger when at least 10% of element is visible

  }); // Start observing the buttons element

  observer.observe(buttonsElement); // Also handle scroll events for cases where IntersectionObserver might not catch everything

  window.addEventListener('scroll', function () {
    if (isInViewport(buttonsElement)) {
      headerElement.style.display = 'none';
    } else {
      headerElement.style.display = 'block';
    }
  });
} else {
  console.error('Could not find required elements on the page');
}

$('.header-city-buttons .btn').on('click', function () {
  $('.header-city-apply').hide();
  var city = $(this).data('city');
  document.cookie = 'selectedCity=' + encodeURIComponent(city) + '; path=/; max-age=31536000';
});

function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

$('.p-city-predefined li').on('click', function () {
  var city = $(this).text().trim(); // Записываем куку

  setCookie('selectedCity', city, 365); // Загружаем HTML и заменяем содержимое на название города

  $('.header-city-choosen, .menu-city-choose').text(city);
  $('.popup').fadeOut();
});
$('.added-to-cart__fill-add').on('click', function () {
  $(this).closest('.added-to-cart__fill-item').find('.added-to-cart__fill-sizes').addClass('active');
  $(this).hide();
});
var reviewPhotosInput = document.querySelector('#review-photos');

if (reviewPhotosInput) {
  var photosHint = reviewPhotosInput.parentElement.querySelector('span');
  var maxFiles = Number(reviewPhotosInput.dataset.maxFiles);
  reviewPhotosInput.addEventListener('change', function () {
    if (this.files.length <= maxFiles) {
      photosHint.textContent = "\u0432\u044B\u0431\u0440\u0430\u043D\u043E \u0444\u043E\u0442\u043E: ".concat(this.files.length, " \u0438\u0437 ").concat(maxFiles);
      return;
    }

    var allowedFiles = new DataTransfer();
    Array.from(this.files).slice(0, maxFiles).forEach(function (file) {
      return allowedFiles.items.add(file);
    });
    this.files = allowedFiles.files;
    photosHint.textContent = "\u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 ".concat(maxFiles, " \u0444\u043E\u0442\u043E. \u0412\u044B\u0431\u0440\u0430\u043D\u044B \u043F\u0435\u0440\u0432\u044B\u0435 ").concat(maxFiles);
  });
}

var reviewStars = document.querySelector('.reviews-form__stars');

if (reviewStars) {
  var stars = Array.from(reviewStars.querySelectorAll('svg'));
  var ratingInput = reviewStars.querySelector('input[name="rating"]');
  var ratingError = reviewStars.parentElement.querySelector('.reviews-form__rating-error');

  var highlightStars = function highlightStars(rating) {
    stars.forEach(function (star, index) {
      star.classList.toggle('is-active', index < rating);
    });
  };

  var setRating = function setRating(rating) {
    ratingInput.value = rating;
    highlightStars(rating);
    reviewStars.setAttribute('aria-invalid', 'false');

    if (ratingError) {
      ratingError.hidden = true;
    }

    stars.forEach(function (star, index) {
      star.setAttribute('aria-checked', index === rating - 1 ? 'true' : 'false');
    });
  };

  stars.forEach(function (star, index) {
    var rating = index + 1;
    star.setAttribute('role', 'radio');
    star.setAttribute('tabindex', '0');
    star.setAttribute('aria-label', "".concat(rating, " \u0438\u0437 ").concat(stars.length));
    star.setAttribute('aria-checked', 'false');
    star.addEventListener('click', function () {
      return setRating(rating);
    });
    star.addEventListener('mouseenter', function () {
      return highlightStars(rating);
    });
    star.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setRating(rating);
      }
    });
  });
  reviewStars.addEventListener('mouseleave', function () {
    highlightStars(Number(ratingInput.value));
  });
}

var reviewsFormBlock = document.querySelector('#reviews-form');
var reviewsForm = reviewsFormBlock === null || reviewsFormBlock === void 0 ? void 0 : reviewsFormBlock.querySelector('form');
var successReview = document.querySelector('#success-review');

if (reviewsForm && successReview) {
  reviewsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var ratingInput = reviewsForm.querySelector('input[name="rating"]');

    if (!(ratingInput !== null && ratingInput !== void 0 && ratingInput.value)) {
      var _reviewStars$querySel;

      var _reviewStars = reviewsForm.querySelector('.reviews-form__stars');

      var _ratingError = reviewsForm.querySelector('.reviews-form__rating-error');

      _reviewStars === null || _reviewStars === void 0 ? void 0 : _reviewStars.setAttribute('aria-invalid', 'true');

      if (_ratingError) {
        _ratingError.hidden = false;
      }

      _reviewStars === null || _reviewStars === void 0 ? void 0 : (_reviewStars$querySel = _reviewStars.querySelector('svg')) === null || _reviewStars$querySel === void 0 ? void 0 : _reviewStars$querySel.focus();
      return;
    }

    reviewsFormBlock.hidden = true;
    successReview.hidden = false;
  });
}
/******/ })()
;