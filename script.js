$(document).ready(function(){

// $(".mobile_menu_button").click(function() {
// 	$(".main_menu").slideToggle();
//    });

 $('.all_testimonials').slick({
    setting-name: "all_testimonials"
  });

 $('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

});