$(window).on('load', function () {

  var tl = gsap.timeline({ defaults: { duration: .6 } });
      tl.to(".preloader__bg", { delay: 1, width: '100%' })
        .to(".preloader__bg", { x: '100%'})
        .to("#preloader", { x: '100%'}, "-=.7")
        

  var tl1 = gsap.timeline({ defaults: { duration: 1 } });
      tl1.from(".header__logo", { delay: 1.7, y: '70%', opacity: 0 })
         .from(".nav__link", { stagger: 0.1, y: '70%', opacity: 0 }, "-=.8")
         .from(".header__call", {  y: '70%', opacity: 0 }, "-=.8")
         .from(".ham__box", {  y: '30%', opacity: 0 }, "-=1.5")


  var tl2 = gsap.timeline({ defaults: { duration: 1 } });
      tl2.from(".intro__title", { delay: 1.7, y: '100%' })
         .from(".intro__text", { y: '200%'}, "-=.8")
         .from(".intro__btn-box", { y: '200%'}, "-=.9")
         .from(".intro__info", { y: '200%'}, "-=.8")
         .from(".about__wrap", { y: '50%', opacity: 0}, "-=.8")
         .from(".about__image-box", { y: '10%', opacity: 0}, "-=1.5")


});


$(function () {

  // Slider
  var swiper = new Swiper(".mySwiper", {
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "0": {
        slidesPerView: 1,
      },
      "426": {
        slidesPerView: 2,
      },
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: swiper,
    },
  });


  var swiper3 = new Swiper(".testimonials__slider", {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      "0": {
        slidesPerView: 1,
        spaceBetween: 15
      },
      "651": {
        slidesPerView: 2,
        spaceBetween: 15
      },
      "1024": {
        slidesPerView: 3,
        spaceBetween: 15
      },
      "1441": {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });


  // accordion
  $(".faq__accordion-tab").click(function () {
    $(".faq__accordion-tab").each(function () {
      $(this).parent().removeClass("active");
      $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
  });


  // Burger menu
  $('.ham').on('click', function () {
    $('.header__menu').toggleClass('active')
    $('body').toggleClass('active')
  });


  // Fixed menu
  let header = $("#header");
  let headerH = header.innerHeight();
  let scrollPos = $(window).scrollTop();
  checkScroll(scrollPos, headerH);

  $(window).on("scroll resize", function () {
    headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, headerH);
  });

  function checkScroll(scrollPos, headerH) {
    if (scrollPos > headerH) {
      header.addClass("active");
    } else {
      header.removeClass("active");
    }
  };

  // Scroll menu nav
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top;

    

    if (window.matchMedia("(min-width: 1025px)").matches) {

      $('.ham').toggleClass('active')
      $('.header__menu').toggleClass('active')
      
      console.log('large')
    } else {

      $('.ham').toggleClass('active')
      $('.header__menu').toggleClass('active')
      $('body').toggleClass('active')
  
      console.log('small')
    }


    $("html, body").animate({
      scrollTop: elementOffset - 75
    }, 700);
  });


  // ScrollReveal
  var slideUp = {
		delay: 100,
		useDelay: 'once',
		duration: 500,
		reset: false,
		interval: 100,
		distance: '20px',
		easing: 'cubic-bezier(.15,0,.32,1.01)',
		viewOffset: {
			bottom: 50
		}
	}


  var scrollBox = [
		document.querySelector('.about__image-box'),
	];
  


  var shadow = document.querySelectorAll('.shadow');
  var suptitle = document.querySelectorAll('.suptitle');
  var title = document.querySelectorAll('.title');
  var text = document.querySelectorAll('.text');
  var btn = document.querySelectorAll('.btn');

  var scrollAnim = document.querySelectorAll('.scrollAnim');
  

  ScrollReveal().reveal(shadow, slideUp);
  ScrollReveal().reveal(suptitle, slideUp);
  ScrollReveal().reveal(title, slideUp);
  ScrollReveal().reveal(text, slideUp);
  ScrollReveal().reveal(btn, slideUp);

  ScrollReveal().reveal(scrollAnim, slideUp);



});