require('bootstrap-grid');
require('./styles.scss');

$(document).ready(function() {
	// Calc Height of Background Img
	// var breakPoint = window.matchMedia("(max-width: 1200px)").matches;

	// function calcHeight(e) {
	// 	if (e.matches) {
	// 		var heightOne = $('.desktop-img').height();
	// 		var heightTwo = parseInt(heightOne);
	// 		$('.banner .right').height(heightTwo);
	// 	} else {
	// 		var heightOne = $('.desktop-img').height();
	// 		var heightTwo = parseInt(heightOne);
	// 		$('.banner .right').height(heightTwo);
	// 	}
	// }
	// calcHeight();
	// breakPoint.addListener(calcHeight);
	var heightOne = $('.desktop-img').height();
	var heightTwo = parseInt(heightOne);
	$('.banner .right').height(heightTwo);
	// Calc Height of Background Img


	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
		$('.accordion-section-title span').css({'transform': 'rotate(90deg)'});
	}

	function close_accordion_section_min() {
		$('.accordion-min .accordion-section-title-min').removeClass('active');
		$('.accordion-min .accordion-section-content-min').slideUp(300).removeClass('open');
		$('.accordion-section-title-min span').text('+');
	}

	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
		if($(e.target).is('.active')) {
			close_accordion_section();
			$(this)["0"].lastChild.style.transform = "rotate(90deg)";
			// console.log($(this)["0"].lastChild);
		}else {
			close_accordion_section();
			$(this)["0"].lastChild.style.transform = "rotate(0deg)";
			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});

	$('.accordion-section-title-min').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
		if($(e.target).is('.active')) {
			close_accordion_section_min();
			$(this)["0"].firstChild.innerHTML = '+';  
			console.log(($(this)["0"].lastChild));
		}else {
			close_accordion_section_min();
			$(this)["0"].firstChild.innerHTML = '-'; 
			$(this).addClass('active');
			$('.accordion-min ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});

