export const tabs = () => {
    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach(tab => {
        const controls = tab.querySelector('.tabs__controls').querySelectorAll('button');
        const items = tab.querySelector('.tabs__items').querySelectorAll('.tabs__item');

        controls[0].classList.add('active');
        items[0].classList.add('active');

        controls.forEach((i, index) => {
            i.addEventListener('click', () => {
                controls.forEach(i => i.classList.remove('active'));
                items.forEach(i => i.classList.remove('active'));

                controls[index].classList.add('active');
                items[index].classList.add('active');
            })
        })
    });
}