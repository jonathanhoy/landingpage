(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var eventListeners = function eventListeners() {
	$('.navLinks a, .navigation a, .skip-link').smoothScroll({
		offset: -15
	});
	$('.mobileMenu, .navUpper a').on('click', function () {
		$('.navUpper').toggleClass('hidden');
	});
	$('.toggleAboutOverflow').on('click', function () {
		if ($('.toggleAboutOverflow').text() === 'Read more') {
			$('p:nth-child(2) ~ p').css('display', 'block');
			$('.toggleAboutOverflow').text('Read less');
		} else if ($('.toggleAboutOverflow').text() === 'Read less') {
			$('p:nth-child(2) ~ p').css('display', 'none');
			$('.toggleAboutOverflow').text('Read more');
		};
	});
	$('.toggleGalleryOverflow').on('click', function () {
		if ($('.toggleGalleryOverflow').text() === 'Show more') {
			$('figure:nth-child(6) ~ figure').css('display', 'block');
			$('.toggleGalleryOverflow').text('Show less');
		} else if ($('.toggleGalleryOverflow').text() === 'Show less') {
			$('figure:nth-child(6) ~ figure').css('display', 'none');
			$('.toggleGalleryOverflow').text('Show more');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFXO0FBQ2pDLEdBQUUsd0NBQUYsRUFBNEMsWUFBNUMsQ0FBeUQ7QUFDeEQsVUFBUSxDQUFDO0FBRCtDLEVBQXpEO0FBR0EsR0FBRSwwQkFBRixFQUE4QixFQUE5QixDQUFpQyxPQUFqQyxFQUEwQyxZQUFNO0FBQy9DLElBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsUUFBM0I7QUFDQSxFQUZEO0FBR0EsR0FBRSxzQkFBRixFQUEwQixFQUExQixDQUE2QixPQUE3QixFQUFzQyxZQUFNO0FBQzNDLE1BQUksRUFBRSxzQkFBRixFQUEwQixJQUExQixPQUFxQyxXQUF6QyxFQUFzRDtBQUNyRCxLQUFFLG9CQUFGLEVBQXdCLEdBQXhCLENBQTRCLFNBQTVCLEVBQXVDLE9BQXZDO0FBQ0EsS0FBRSxzQkFBRixFQUEwQixJQUExQixDQUErQixXQUEvQjtBQUNBLEdBSEQsTUFHTyxJQUFJLEVBQUUsc0JBQUYsRUFBMEIsSUFBMUIsT0FBcUMsV0FBekMsRUFBc0Q7QUFDNUQsS0FBRSxvQkFBRixFQUF3QixHQUF4QixDQUE0QixTQUE1QixFQUF1QyxNQUF2QztBQUNBLEtBQUUsc0JBQUYsRUFBMEIsSUFBMUIsQ0FBK0IsV0FBL0I7QUFDQTtBQUNELEVBUkQ7QUFTQSxHQUFFLHdCQUFGLEVBQTRCLEVBQTVCLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDN0MsTUFBSSxFQUFFLHdCQUFGLEVBQTRCLElBQTVCLE9BQXVDLFdBQTNDLEVBQXdEO0FBQ3ZELEtBQUUsOEJBQUYsRUFBa0MsR0FBbEMsQ0FBc0MsU0FBdEMsRUFBaUQsT0FBakQ7QUFDQSxLQUFFLHdCQUFGLEVBQTRCLElBQTVCLENBQWlDLFdBQWpDO0FBQ0EsR0FIRCxNQUdPLElBQUksRUFBRSx3QkFBRixFQUE0QixJQUE1QixPQUF1QyxXQUEzQyxFQUF3RDtBQUM5RCxLQUFFLDhCQUFGLEVBQWtDLEdBQWxDLENBQXNDLFNBQXRDLEVBQWlELE1BQWpEO0FBQ0EsS0FBRSx3QkFBRixFQUE0QixJQUE1QixDQUFpQyxXQUFqQztBQUNBO0FBQ0QsRUFSRDtBQVNBLENBekJEOztBQTJCQSxJQUFNLE9BQU8sU0FBUCxJQUFPLEdBQVc7QUFDdkI7QUFDQSxDQUZEOztBQUlBLEVBQUUsWUFBTTtBQUNQO0FBQ0E7QUFDQSxDQUhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcblx0JCgnLm5hdkxpbmtzIGEsIC5uYXZpZ2F0aW9uIGEsIC5za2lwLWxpbmsnKS5zbW9vdGhTY3JvbGwoe1xuXHRcdG9mZnNldDogLTE1XG5cdH0pO1xuXHQkKCcubW9iaWxlTWVudSwgLm5hdlVwcGVyIGEnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0JCgnLm5hdlVwcGVyJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xuXHR9KTtcblx0JCgnLnRvZ2dsZUFib3V0T3ZlcmZsb3cnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0aWYgKCQoJy50b2dnbGVBYm91dE92ZXJmbG93JykudGV4dCgpID09PSAnUmVhZCBtb3JlJykge1xuXHRcdFx0JCgncDpudGgtY2hpbGQoMikgfiBwJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cdFx0XHQkKCcudG9nZ2xlQWJvdXRPdmVyZmxvdycpLnRleHQoJ1JlYWQgbGVzcycpXG5cdFx0fSBlbHNlIGlmICgkKCcudG9nZ2xlQWJvdXRPdmVyZmxvdycpLnRleHQoKSA9PT0gJ1JlYWQgbGVzcycpIHtcblx0XHRcdCQoJ3A6bnRoLWNoaWxkKDIpIH4gcCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHQkKCcudG9nZ2xlQWJvdXRPdmVyZmxvdycpLnRleHQoJ1JlYWQgbW9yZScpO1xuXHRcdH07XG5cdH0pO1xuXHQkKCcudG9nZ2xlR2FsbGVyeU92ZXJmbG93Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGlmICgkKCcudG9nZ2xlR2FsbGVyeU92ZXJmbG93JykudGV4dCgpID09PSAnU2hvdyBtb3JlJykge1xuXHRcdFx0JCgnZmlndXJlOm50aC1jaGlsZCg2KSB+IGZpZ3VyZScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0JCgnLnRvZ2dsZUdhbGxlcnlPdmVyZmxvdycpLnRleHQoJ1Nob3cgbGVzcycpXG5cdFx0fSBlbHNlIGlmICgkKCcudG9nZ2xlR2FsbGVyeU92ZXJmbG93JykudGV4dCgpID09PSAnU2hvdyBsZXNzJykge1xuXHRcdFx0JCgnZmlndXJlOm50aC1jaGlsZCg2KSB+IGZpZ3VyZScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHQkKCcudG9nZ2xlR2FsbGVyeU92ZXJmbG93JykudGV4dCgnU2hvdyBtb3JlJyk7XG5cdFx0fTtcblx0fSk7XG59O1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24oKSB7XG5cdGV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbiQoKCkgPT4ge1xuXHQvLyBjb25zb2xlLmxvZygnZG9jdW1lbnQgcmVhZHknKTtcblx0aW5pdCgpO1xufSkiXX0=
