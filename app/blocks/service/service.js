export const serviceWrap = () => {
	const serviceWraps = document.querySelectorAll('.service__service-wrap');
	const deviceWidth = document.body.clientWidth;
	if (deviceWidth < 361) {
		serviceWraps[serviceWraps.length - 1].style.minHeight = '127px';
	}
};
