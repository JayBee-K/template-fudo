'use strict';
export let windowWidth = window.innerWidth;

export function handleSetSpacingBody() {
	let bodyElm = document.querySelector('body');
	let headerElm = document.getElementById('header');

	bodyElm.style.setProperty('padding-top', `${headerElm.offsetHeight}px`);
}

export function handleCallNavigationMobile() {
	let buttonElm = document.getElementById('header-button_hamburger');
	let bodyElm = document.querySelector('body');
	let headerNavigationElm = document.getElementById('header-navigation');
	let isShow = false;

	if (buttonElm && bodyElm && headerNavigationElm) {
		if (windowWidth < 991) {
			buttonElm.addEventListener('click', () => {
				if (isShow) {
					bodyElm.classList.remove("is-navigation");
					isShow = false;
					handleCallSearchMobile(true);
				} else {
					bodyElm.classList.add("is-navigation");
					isShow = true;
				}
			});

			document.addEventListener("click", (event) => {
				if (buttonElm && headerNavigationElm && event.target !== buttonElm && event.target !== headerNavigationElm) {
					bodyElm.classList.remove("is-navigation");
					isShow = false;
				}
			});
		} else {
			if (bodyElm.classList.contains('is-show')) {
				bodyElm.classList.remove("is-navigation");
				isShow = false;
			}
		}
	}
}

export function handleCallSearchMobile(close = false) {
	let buttonElm = document.getElementById('header-search_btn');
	let formElm = document.getElementById('header-search');
	let isShow = false;

	if (buttonElm && formElm) {
		if (windowWidth < 991) {
			buttonElm.addEventListener('click', () => {
				if (isShow) {
					formElm.classList.remove("is-show");
					isShow = false;
				} else {
					formElm.classList.add("is-show");
					isShow = true;
				}
			});

			document.addEventListener("click", (event) => {
				if (buttonElm && event.target !== formElm && !formElm.contains(event.target)) {
					formElm.classList.remove("is-show");
					isShow = false;
				}
			});
		} else {
			if (formElm.classList.contains('is-show')) {
				formElm.classList.remove("is-show");
				isShow = false;
			}
		}
	}

	if (close) {
		formElm.classList.remove("is-show");
		isShow = false;
	}
}

export function handleSliderHero() {
	const heroSlider = document.getElementById('hero-slider');
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

export function handleSetMarginFeature() {
	if (windowWidth > 991) {
		const featureBox = document.getElementById('feature-box');
		if (featureBox) {
			const featureWrapper = featureBox.querySelector('.feature-wrapper');
			if (featureWrapper) {
				const fiftyPercentGap = 25;
				let heightFeatureWrapper = featureWrapper.scrollHeight * -1 + fiftyPercentGap;
				featureBox.style.marginBottom = (heightFeatureWrapper / 2) + 'px';
			}
		}
	}
}

export function handleReturnTop() {
	const returnTop = document.getElementById('return-top');
	if (returnTop) {
		returnTop.addEventListener('click', function () {
			if (document.documentElement.scrollTop > 0) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}
		})
	}
}

export function handleCalMaxHeightArticleCard() {
	const articleCard = document.querySelectorAll('.article-card');
	if (articleCard.length > 0) {
		const cardList = Array.from(articleCard);
		const heights = cardList.map(card => card.offsetHeight);
		const maxHeight = Math.max(...heights);

		cardList.forEach(card => {
			const cardBodyLink = card.querySelector('.card-body_link');
			const cardTitle = card.querySelector('.card-title');
			card.style.height = `${maxHeight}px`;
			cardBodyLink.style.setProperty('--top', `${cardTitle.offsetHeight}px`);
		});
	}
}

export function handleChangeTab() {
	const tabEl = document.querySelectorAll('.change-tab_article')
	tabEl.forEach(tab => {
		tab.addEventListener('shown.bs.tab', event => {
			handleCalMaxHeightArticleCard();
		})
	})
}

export function handleSliderProductDetail() {
	const detailAvatar = document.getElementById('detail-avatar');
	const detailThumb = document.getElementById('detail-thumb');
	if (detailAvatar && detailThumb) {
		let sliderDetailThumb = new Swiper('#detail-thumb .swiper', {
			spaceBetween: 8,
			slidesPerView: 4,
			loopAdditionalSlides: 0,
			breakpoints: {
				992: {
					direction: "vertical",
				}
			}
		});

		console.log(sliderDetailThumb);
		let sliderDetailAvatar = new Swiper('#detail-avatar .swiper', {
			speed: 1000,
			slidesPerView: 1,
			thumbs: {
				swiper: sliderDetailThumb,
			},
		});
	}
}

export function handleSliderReview() {
	const reviewSlider = document.getElementById('review-slider');
	if (reviewSlider) {
		new Swiper('#review-slider .swiper', {
			speed: 1000,
			preloadImages: false,
			effect: 'slide',
			loop: true,
			navigation: {
				nextEl: "#review-slider .slider-button_next",
				prevEl: "#review-slider .slider-button_prev",
			},
			spaceBetween: 24,
			breakpoints: {
				1199: {
					slidesPerView: 3,
				}
			}
		});
	}
}

export function togglePasswordVisibility(event) {
	const button = event.currentTarget;
	const input = button.previousElementSibling;
	const icon = button.querySelector("i");
	if (input.type === "password") {
		input.type = "text";
		icon.classList.remove("fa-eye");
		icon.classList.add("fa-eye-slash");
	} else {
		input.type = "password";
		icon.classList.remove("fa-eye-slash");
		icon.classList.add("fa-eye");
	}
}

export function handleViewPassword() {
	const buttons = document.querySelectorAll('.button-viewPass');
	if (buttons.length > 0) {
		buttons.forEach(function (button) {
			button.addEventListener('click', togglePasswordVisibility)
		})
	}
}

export function handleLoading(status = true) {
	const loading = document.getElementById('modal-user_loading');
	if(loading) {
		(status) ? loading.classList.add('is-loading') : loading.classList.remove('is-loading');
	}
}

export function handleFormUser() {
	const formSteps = document.querySelectorAll('.form-step');
	const nextButtons = document.querySelectorAll('.buttonNextStep');
	const prevButtons = document.querySelectorAll('.buttonPrevStep');

	nextButtons.forEach((button, index) => {
		button.addEventListener('click', function () {
			const currentStep = formSteps[index];
			const nextStep = formSteps[index + 1];

			handleLoading();

			// Kiểm tra giá trị của input trong bước hiện tại
			const input = currentStep.querySelector('input');
			const warning = currentStep.querySelector('.form-input_warning');

			if (input.value.trim() === '') {
				warning.classList.add('is-warning');
				handleLoading(false);
				return;
			}

			setTimeout(function () {
				handleLoading(false);

				// Chuyển đến bước tiếp theo
				currentStep.classList.add('d-none');
				nextStep.classList.remove('d-none');
			}, 1000);
		});
	});

	prevButtons.forEach((button, index) => {
		button.addEventListener('click', function () {
			const currentStep = formSteps[index + 1];
			const prevStep = formSteps[index];

			currentStep.classList.add('d-none');
			prevStep.classList.remove('d-none');
		});
	});

	formSteps.forEach((step) => {
		const input = step.querySelector('input');

		if (input) {
			input.addEventListener('keyup', function() {
				const warning = step.querySelector('.form-input_warning');

				if (input.value.trim() !== '') {
					warning.classList.remove('is-warning');
				}
			});
		}
	});
}

window.addEventListener('load', function () {
	handleSetSpacingBody();
	handleCallSearchMobile();
	handleCallNavigationMobile();

	handleSliderHero();
	handleSetMarginFeature();
	handleReturnTop();
	handleCalMaxHeightArticleCard();
	handleChangeTab();
	handleSliderReview();
	handleSliderProductDetail();

	handleViewPassword();
	handleFormUser();

	window.addEventListener("resize", () => {
		windowWidth = window.innerWidth;
		handleSetSpacingBody();
		handleCallNavigationMobile();
		handleCallSearchMobile();
	});
});


