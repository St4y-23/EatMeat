$(window).on('load', function () {
  // $('.preloader').delay(500).fadeToggle(500);


  if (window.matchMedia("(min-width: 851px)").matches) {

    // var link = Array.prototype.slice.call(document.querySelectorAll(".header__link")).reverse();

    // var tl = gsap.timeline({ defaults: { duration: 1 } });
    // tl.from(".intro__bg", { delay: 1, x: '-100%' })
    //   .from(".header__bg", { x: '-100%', opacity: 0 }, "-=.5")


    console.log('large')
  } else {


    console.log('small')
  }

});


$(function () {

  $("html, body").animate({
    scrollTop: elementOffset - 70
  }, 700);








});