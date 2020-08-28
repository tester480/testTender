$(document).ready(function(){
   mobmenu();
   header();
   sliderHome();
   sliderFeedback();
   anchor();
   activeNavlink();
   popupFeedback();
   popupPortfolio();
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
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: 500,
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

      if($(window).width() > 1440) {
         $('html, body').animate({scrollTop: top - 83}, 600);
      } 
      else if($(window).width() <= 1440 && $(window).width() >= 992) {
         $('html, body').animate({scrollTop: top - 78}, 600);
      } 
      else if($(window).width() < 992 && $(window).width() >= 525) {
         $('html, body').animate({scrollTop: top - 73}, 600);
      }
      else {
         $('html, body').animate({scrollTop: top - 67}, 600);
      }
   });
}

function activeNavlink() {
   $(window).scroll(function () {
      var $sections = $('section');
      $sections.each(function(i,el){
         var top  = $(el).offset().top-100;
         var bottom = top +$(el).height();
         var scroll = $(window).scrollTop();
         var id = $(el).attr('id');
         if( scroll > top && scroll < bottom){
               $('nav a.nav__link_active').removeClass('nav__link_active');
            $('nav a[href="#'+id+'"]').addClass('nav__link_active');
         }
      })
   });
}

function popupFeedback() {
   $(".btn-popup").on('click', function () {
      var $parent = $("body");
      if ($parent.hasClass('popup-show')) {
         $parent.removeClass('popup-show');
      } else {
         $parent.addClass('popup-show');
      }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".btn-popup, .popup__content").length) {
         if ($("body").hasClass("popup-show")) {
            $("body").removeClass("popup-show");
         }
      }
   });
}

function popupPortfolio() {
   $('.portfolio__body').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
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