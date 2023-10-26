import Swiper, {Navigation, Pagination} from "swiper";

export const dotSlider = () => {
    const swiper = new Swiper('.dot-slider__items', {
        modules: [Navigation, Pagination],
        loop: false,
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.dot-slider__button_next',
            prevEl: '.dot-slider__button_prev',
        },
        pagination: {
            el: '.dot-slider__pagination',
            type: 'bullets',
            clickable:'true'
        },
    });
}