import Swiper, { Navigation } from 'swiper';

export const navSlider = () => {
    const swiper = new Swiper('.nav__items', {
        modules: [Navigation],
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.nav__button_next',
            prevEl: '.nav__button_prev',
        },
    });
}