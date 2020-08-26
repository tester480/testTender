$(document).ready(function(){
   mobmenu();
   header();
   sliderHome();
   sliderFeedback();
   popup();
   anchor();
   upbtn();
});

function mobmenu() {
   $(".header__burger").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-menu')) {
            $parent.removeClass('mob-menu');
         } else {
            $parent.addClass('mob-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".header__burger").length) {
         if ($(".header").hasClass("mob-menu")) {
            $(".header").removeClass("mob-menu");
         }
      }
   });
}

function header() {
   $(window).scroll(function() {
      if ($(window).scrollTop() > 85) {
         $('.header').addClass('opacity');
      }
      else {
         $('.header').removeClass('opacity');
      }
   });
}

function sliderHome() {
   $('.home__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      dotsClass: 'dots',
      prevArrow: '<div class="prev arrow"></div>',
      nextArrow: '<div class="next arrow"></div>'
   });
}

function sliderFeedback() {
   $('.feedback__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      dotsClass: 'dots',
      prevArrow: '<div class="prev arrow"></div>',
      nextArrow: '<div class="next arrow"></div>',
      responsive: [
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3
           }
         },
         {
           breakpoint: 660,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 375,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
   });
}

function anchor() {
   $(".nav").on("click","a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('html, body').animate({scrollTop: top - 83}, 600);
   });
}

function popup() {
   $(".btn-popup").on('click', function () {
      var $parent = $(".main");
      if ($parent.hasClass('popup-show')) {
         $parent.removeClass('popup-show');
      } else {
         $parent.addClass('popup-show');
      }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".btn-popup, .popup__content").length) {
         if ($(".main").hasClass("popup-show")) {
            $(".main").removeClass("popup-show");
         }
      }
   });
}

function upbtn() { 
   $(window).scroll(function() {     
      if ($(window).scrollTop() > 600) {
         $('.up-btn').addClass('show');
      }
      else {
         $('.up-btn').removeClass('show');
      }
   });
   $('.up-btn').on("click", function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('html, body, .wrapper').animate({scrollTop: top - 83}, 600);
   });
}