const eventListeners = function() {
	$('.navLinks a, .navigation a, .skip-link').smoothScroll({
		offset: -15
	});
	$('.mobileMenu, .navUpper a').on('click', () => {
		$('.navUpper').toggleClass('hidden');
	});
	$('.toggleOverflow').on('click', () => {
		if ($('.toggleOverflow').text() === 'Show more') {
			$('figure:nth-child(6) ~ figure').css('display', 'block');
			$('.toggleOverflow').text('Show less')
		} else if ($('.toggleOverflow').text() === 'Show less') {
			$('figure:nth-child(6) ~ figure').css('display', 'none');
			$('.toggleOverflow').text('Show more');
		};
	});
};

const init = function() {
	eventListeners();
}

$(() => {
	// console.log('document ready');
	init();
})