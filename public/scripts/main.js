(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var eventListeners = function eventListeners() {
	$('.navLinks a, .navigation a, .skip-link').smoothScroll({
		offset: -15
	});
	$('.mobileMenu, .navUpper a').on('click', function () {
		$('.navUpper').toggleClass('hidden');
	});
	$('.toggleOverflow').on('click', function () {
		if ($('.toggleOverflow').text() === 'Show more') {
			$('figure:nth-child(6) ~ figure').css('display', 'block');
			$('.toggleOverflow').text('Show less');
		} else if ($('.toggleOverflow').text() === 'Show less') {
			$('figure:nth-child(6) ~ figure').css('display', 'none');
			$('.toggleOverflow').text('Show more');
		};
	});
};

var init = function init() {
	eventListeners();
};

$(function () {
	// console.log('document ready');
	init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFXO0FBQ2pDLEdBQUUsd0NBQUYsRUFBNEMsWUFBNUMsQ0FBeUQ7QUFDeEQsVUFBUSxDQUFDO0FBRCtDLEVBQXpEO0FBR0EsR0FBRSwwQkFBRixFQUE4QixFQUE5QixDQUFpQyxPQUFqQyxFQUEwQyxZQUFNO0FBQy9DLElBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsUUFBM0I7QUFDQSxFQUZEO0FBR0EsR0FBRSxpQkFBRixFQUFxQixFQUFyQixDQUF3QixPQUF4QixFQUFpQyxZQUFNO0FBQ3RDLE1BQUksRUFBRSxpQkFBRixFQUFxQixJQUFyQixPQUFnQyxXQUFwQyxFQUFpRDtBQUNoRCxLQUFFLDhCQUFGLEVBQWtDLEdBQWxDLENBQXNDLFNBQXRDLEVBQWlELE9BQWpEO0FBQ0EsS0FBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixXQUExQjtBQUNBLEdBSEQsTUFHTyxJQUFJLEVBQUUsaUJBQUYsRUFBcUIsSUFBckIsT0FBZ0MsV0FBcEMsRUFBaUQ7QUFDdkQsS0FBRSw4QkFBRixFQUFrQyxHQUFsQyxDQUFzQyxTQUF0QyxFQUFpRCxNQUFqRDtBQUNBLEtBQUUsaUJBQUYsRUFBcUIsSUFBckIsQ0FBMEIsV0FBMUI7QUFDQTtBQUNELEVBUkQ7QUFTQSxDQWhCRDs7QUFrQkEsSUFBTSxPQUFPLFNBQVAsSUFBTyxHQUFXO0FBQ3ZCO0FBQ0EsQ0FGRDs7QUFJQSxFQUFFLFlBQU07QUFDUDtBQUNBO0FBQ0EsQ0FIRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG5cdCQoJy5uYXZMaW5rcyBhLCAubmF2aWdhdGlvbiBhLCAuc2tpcC1saW5rJykuc21vb3RoU2Nyb2xsKHtcblx0XHRvZmZzZXQ6IC0xNVxuXHR9KTtcblx0JCgnLm1vYmlsZU1lbnUsIC5uYXZVcHBlciBhJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdCQoJy5uYXZVcHBlcicpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcblx0fSk7XG5cdCQoJy50b2dnbGVPdmVyZmxvdycpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRpZiAoJCgnLnRvZ2dsZU92ZXJmbG93JykudGV4dCgpID09PSAnU2hvdyBtb3JlJykge1xuXHRcdFx0JCgnZmlndXJlOm50aC1jaGlsZCg2KSB+IGZpZ3VyZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0JCgnLnRvZ2dsZU92ZXJmbG93JykudGV4dCgnU2hvdyBsZXNzJylcblx0XHR9IGVsc2UgaWYgKCQoJy50b2dnbGVPdmVyZmxvdycpLnRleHQoKSA9PT0gJ1Nob3cgbGVzcycpIHtcblx0XHRcdCQoJ2ZpZ3VyZTpudGgtY2hpbGQoNikgfiBmaWd1cmUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0JCgnLnRvZ2dsZU92ZXJmbG93JykudGV4dCgnU2hvdyBtb3JlJyk7XG5cdFx0fTtcblx0fSk7XG59O1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24oKSB7XG5cdGV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbiQoKCkgPT4ge1xuXHQvLyBjb25zb2xlLmxvZygnZG9jdW1lbnQgcmVhZHknKTtcblx0aW5pdCgpO1xufSkiXX0=
