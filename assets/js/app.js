'use strict';
export let windowWidth = $(window).width();

export function handleSliderHero() {
	const heroSlider = document.getElementById('hero-slider')
	if (heroSlider) {
		new Swiper('#hero-slider .swiper', {
			speed: 1000,
			slidesPerView: 1,
			preloadImages: false,
			effect: 'slide',
			loop: true,
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: "#hero-slider .slider-button_next",
				prevEl: "#hero-slider .slider-button_prev",
			},
			pagination: {
				el: "#hero-slider .slider-pagination",
				clickable: 1
			}
		});
	}
}

window.addEventListener('load', function () {
	handleSliderHero()
});


