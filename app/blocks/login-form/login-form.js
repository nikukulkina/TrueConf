import $ from 'jquery';

export const formValidation = () => {
	const $inputs = $('.login-form .form-input');

	$('.login-form').on('submit', function (e) {
		let $error = false;
		console.log($inputs);
		$inputs.each(function () {
			if (!$(this).val()) {
				$(this).addClass('err');
				$error = true;
			}
			else {
				$(this).removeClass('err');
			}
		});
		if ($error) {
			e.preventDefault();
		}
	});
};
