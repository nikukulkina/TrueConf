import $ from 'jquery';

export const logIn = () => {
	const $popup = $('.js-popup');
	const $button = $('.js-logInBtn');
	const $close = $('.js-close');
	const $overlay = $('.overlay');

	function setPopupPosition() {
		const popupMargin = ($(window).innerHeight() - $popup.innerHeight()) / 2;
		$popup.css('marginTop', popupMargin < 30 ? '30px' : popupMargin + 'px');
	}
	$button.on('click', function () {
		$popup.addClass('active');
		$overlay.addClass('active');
		document.body.style.overflowY = 'hidden';
		setPopupPosition();
	});

	$(window).resize(setPopupPosition);

	$close.on('click', function () {
		$popup.removeClass('active');
		$overlay.removeClass('active');
		document.body.style.overflowY = 'auto';
	});

	$overlay.on('click', function (e) {
		if (e.target !== $popup) {
			$popup.removeClass('active');
			$overlay.removeClass('active');
			document.body.style.overflowY = 'auto';
		}
	});
};
