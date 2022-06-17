
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

$(document).ready(function () {
  'use strict';

  // Preloader
  $(window).ready(function () {
    $("#preloader").delay(500).fadeOut("fade");
  });

  // Sticky Menu
  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass('fixed-top');
    } else if ($(this).scrollTop() == 0) {
      $('.navbar').removeClass('fixed-top');
    }
  });

  // Hamburger Menu Trigger
  const trigger = document.getElementById('js-nav-trigger');
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    trigger.classList.toggle('is-active');
  }, false);

    // Add smooth scrolling to all links
    $(".navbar-nav .nav-link").click (function () {
      $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top - 89
      }, 100);
    });

  // testimonialsSwiper
  const swiper = new Swiper('.testimonialsSwiper', {
    spaceBetween: 100,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: ".fi-rr-arrow-right",
      prevEl: ".fi-rr-arrow-left",
    },
  });

  // Scroll back to top
  var progressPath = document.querySelector('.scroll-up path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 25;
  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.scroll-up').addClass('active-progress');
    } else {
      jQuery('.scroll-up').removeClass('active-progress');
    }
  });
  jQuery('.scroll-up').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });


  
  // kursor
  new kursor({
    type: 1,
    color: "#eb4a4a"
  });

  
  // mixitup
  var containerEl = document.querySelector('.auction-filter');
  var mixer = mixitup(containerEl);

  n(window).on("load", function () {
      var e = n(".preloader");
      e.find(".spinner").fadeOut(function () {
        e.fadeOut();
      }),
        n(".lines").addClass("finish"),
        setTimeout(function () {
          n(".lines").addClass("ready");
        }, 2e3),
        n(".typed-subtitle").length &&
          1 < n(".h-subtitle p").length &&
          n(".typed-subtitle").each(function () {
            n(this).typed({
              stringsElement: n(this).prev(".typing-subtitle"),
              loop: !0,
            });
          }),
        setTimeout(function () {
          n(".h-subtitles").addClass("ready"),
            n(".typed-bread").length &&
              n(".typed-bread").typed({
                stringsElement: n(".typing-bread"),
                showCursor: !1,
              });
        }, 1e3);
      var a = location.hash,
        t = n(a);
      if (
        (0 == a.indexOf("#section-") &&
          t.length &&
          n("body, html").animate({ scrollTop: n(a).offset().top - 68 }, 400),
        n(".jarallax").length && n(".jarallax").jarallax(),
        n(".started-carousel").length)
      ) {
        var i = new Swiper(".started-carousel .swiper-container", {
          init: !1,
          loop: !1,
          spaceBetween: 0,
          effect: "fade",
          slidesPerView: 1,
          simulateTouch: !1,
          autoplay: {
            delay: 6e3,
            disableOnInteraction: !1,
            waitForTransition: !1,
          },
          navigation: {
            nextEl: ".started .swiper-button-next",
            prevEl: ".started .swiper-button-prev",
          },
        });
        i.on("slideChange", function () {
          var t = i.realIndex,
            s = i.slides.length;
          n(".started-carousel .swiper-slide").removeClass("first"),
            n(".started-carousel .swiper-slide").each(function (e, a) {
              e <= t - 1
                ? n(a).addClass("swiper-clip-active")
                : n(a).removeClass("swiper-clip-active");
            }),
            n(".started-carousel .swiper-slide").each(function (e, a) {
              n(a).css({ "z-index": s - e });
            });
        }),
          i.init();
      }
      if (n(".reviews-carousel").length)
        new Swiper(".reviews-carousel .swiper-container", {
          loop: !0,
          spaceBetween: 70,
          slidesPerView: 2,
          autoplay: { delay: 6e3 },
          navigation: {
            nextEl: ".reviews-carousel .swiper-button-next",
            prevEl: ".reviews-carousel .swiper-button-prev",
          },
          breakpoints: {
            720: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 2, spaceBetween: 70 },
          },
        });
      setTimeout(function () {
        n(window).scrollTop(n(window).scrollTop() + 1);
      }, 100);
    });












});