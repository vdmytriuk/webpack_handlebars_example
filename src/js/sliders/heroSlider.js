import Swiper, {Navigation, Pagination} from 'swiper';

export const heroSlider = () => {
    const swiper = new Swiper('.hero-slider__items', {
        modules: [Navigation, Pagination],
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.hero-slider__button_next',
            prevEl: '.hero-slider__button_prev',
        },
        pagination: {
            el: '.hero-slider__pagination',
            type: 'bullets',
            clickable:'true'
        },
    });
}