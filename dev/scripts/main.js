const eventListeners = function() {
	$('.navLinks a, .navigation a, .skip-link').smoothScroll({
		offset: -15
	});
	$('.mobileMenu, .navUpper a').on('click', () => {
		$('.navUpper').toggleClass('hidden');
	});
	$('.toggleAboutOverflow').on('click', () => {
		if ($('.toggleAboutOverflow').text() === 'Read more') {
			$('p:nth-child(2) ~ p').css('display', 'block');
			$('.toggleAboutOverflow').text('Read less')
		} else if ($('.toggleAboutOverflow').text() === 'Read less') {
			$('p:nth-child(2) ~ p').css('display', 'none');
			$('.toggleAboutOverflow').text('Read more');
		};
	});
	$('.toggleGalleryOverflow').on('click', () => {
		if ($('.toggleGalleryOverflow').text() === 'Show more') {
			$('figure:nth-child(6) ~ figure').css('display', 'block');
			$('.toggleGalleryOverflow').text('Show less')
		} else if ($('.toggleGalleryOverflow').text() === 'Show less') {
			$('figure:nth-child(6) ~ figure').css('display', 'none');
			$('.toggleGalleryOverflow').text('Show more');
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