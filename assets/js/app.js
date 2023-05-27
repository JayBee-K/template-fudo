'use strict';
export let windowWidth = $(window).width();

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
    console.log(1);
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

window.addEventListener('load', function () {
    handleSliderHero();
    handleSetMarginFeature();
    handleReturnTop();
    handleCalMaxHeightArticleCard();
    handleChangeTab();
});


