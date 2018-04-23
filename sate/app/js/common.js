


$('.direction-blocks').slick({
	arrows: false,
	dots: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
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
		menu.slideToggle(300);
	});

		sidebarBtn.on('click', function(event) {
		event.preventDefault();
		sidebarMenu.slideToggle(300);
	});
});
