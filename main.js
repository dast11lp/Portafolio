const tabSection = document.querySelector('.tabs');
const tabList = document.querySelectorAll('.tabs__list__tab');
const tabContent = document.querySelectorAll('.tabs__content');

tabSection.addEventListener('click', ({ target }) => {

    const tab = target.closest('.tabs__list__tab');
    if (!tab) return;

    if (target.classList.contains('tabs__list__tab--active')) {
        target.classList.remove('tabs__list__tab--active');
        document.querySelector(`.tabs__content--${target.dataset.tab}`).classList.remove('tabs__content--active');
    } else {
        tabList.forEach((el => {
            el.classList.remove('tabs__list__tab--active');
        }))

        target.classList.add('tabs__list__tab--active');

        tabContent.forEach((el) => {
            el.classList.remove('tabs__content--active');
        });
        document.querySelector(`.tabs__content--${target.dataset.tab}`).classList.add('tabs__content--active');
    }
});