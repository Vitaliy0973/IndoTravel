export const burgerApp = () => {
  const burger = document.querySelector('.header__menu-button');
  const headerMenu = document.querySelector('.header__menu');

  const burgerWorking = ({ target }) => {
    if ((!target.closest('.header__menu') ||
      target.closest('.header__item')) &&
      headerMenu.matches('.header__menu_active')) {
      headerMenu.classList.remove('header__menu_active');
      return;
    }

    if (target === burger) {
      headerMenu.classList.add('header__menu_active');
    }
  }

  document.body.addEventListener('click', burgerWorking);
}
