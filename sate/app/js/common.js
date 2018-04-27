


$('.direction-blocks').slick({
	arrows: false,
	dots: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToShow: 1
      }
    },
    {
     		breakpoint: 1200,
      	settings: {
        slidesToShow: 3,
        slidesToShow: 1
      }
     }
  ]
});

$(document).ready(function($) {
	var menuBtn = $('.top-nav_btn');
	var sidebarBtn = $('.left-sidebar_btn')
	var menu = $('.top-nav_menu');
	var sidebarMenu = $('.left-sidebar_menu')

	menuBtn.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('active');
	});

	sidebarBtn.on('click', function(event) {
		event.preventDefault();
		sidebarMenu.toggleClass('active');
	});
});
