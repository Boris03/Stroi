


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

	var elem = document.querySelector('.calc-range');
	var init = new Powerange(elem, {min: 100000, max: 3000000, start: 100000, hideRange: true, step: 100000});

	var per, month, result, total, monthly;
	var money = +$('.calc-range').val();



	$('input[name="programms"]').on('change', function(event) {
		month = +$(this).attr('data-month');
		per = +$(this).attr('data-per');
		total = result + money;
		result = Math.round(per / 12 * month * money);
		monthly = parseInt(result / month);
		$('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('.calc-month span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('#month').text(month)

	});
	$('.calc-range').on('change', function(event) {
		$('.calc-summ_invest_num span').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		var radio = $('input[name="programms"]:checked');
		money = +$(this).val();
		month = +radio.attr('data-month');
		per = +radio.attr('data-per');
		result = Math.round(per / 12 * month * money);
		monthly = parseInt(result / month);
		total = result + money;

		$('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		$('.calc-month span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
		console.log(result);
		console.log(money);
		console.log(per);
		console.log(month);
});
});

