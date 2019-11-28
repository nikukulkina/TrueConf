import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import {serviceWrap}from '../blocks/service/service';
import {logIn}from '../blocks/popup/popup';
import {formValidation}from '../blocks/login-form/login-form';

$(() => {
	svg4everybody();

	$('.js-select').on('click', function () {
		const $dropdown = $(this).parent('.js-dropdown');
		$dropdown.find('.js-menu').slideToggle(300);
		$dropdown.find('.js-select').toggleClass('select__btn_active');
	});
	$(document).on('click', function (e) {
		if (!e.target.closest('.js-dropdown')) {
			const $dropdown = $('.js-dropdown');
			$dropdown.find('.js-menu').slideUp(300);
			$dropdown.find('.js-select').removeClass('select__btn_active');
		}
	});
	$('.js-button').on('click', function () {
		const $dropdown = $(this).closest('.js-dropdown');
		$dropdown.find('.js-flag').attr('value', $(this).attr('id'));
		$dropdown.find('.js-select').attr('src', $(this).find('img').attr('src'));
		$dropdown.find('.js-menu').slideUp(300);
		$dropdown.find('.js-select').removeClass('select__btn_active');
	});
	serviceWrap();
	logIn();
	formValidation();
});
