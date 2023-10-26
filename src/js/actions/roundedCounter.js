export const roundedCounter = () => {
  const roundedCounters = document.querySelectorAll('.rounded-counter');

  roundedCounters.forEach(i => {
    const minus = i.querySelector('.rounded-counter__minus');
    const plus = i.querySelector('.rounded-counter__plus');
    const currentCount = i.querySelector('.rounded-counter__current');
    const field = i.querySelector('input');

    plus.addEventListener('click', (e) => {
      e.preventDefault();

      field.value = +field.value + 1;
      currentCount.innerText = +field.value;
    });

    minus.addEventListener('click', (e) => {
      e.preventDefault();

      if (field.value !== '1') {
        field.value = +field.value - 1;
        currentCount.innerText = +field.value;
      }
    });
  });
}