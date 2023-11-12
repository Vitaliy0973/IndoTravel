const getHightTextWrapper = textWrapper => {
  let textWrapperHeight = 0;

  textWrapper.forEach(elem => {
    if (elem.scrollHeight > textWrapperHeight) {
      textWrapperHeight = elem.scrollHeight;
    }
  });
  return textWrapperHeight;
}

const accordionApp = (items, textWrapper, textWrapperHeight, index) => {
  for (let i = 0; i < items.length; i++) {
    if (i === index) {
      textWrapper[i].style.height = `${textWrapperHeight}px`;
      items[index].classList.add('travel__item_active');
    } else {
      textWrapper[i].style.height = '0px';
      items[i].classList.remove('travel__item_active');
    }
  }
}

export const accordion = () => {
  const items = document.querySelectorAll('.travel__item');
  const btns = document.querySelectorAll('.travel__item-title');
  const textWrapper = document.querySelectorAll('.travel__item-text-wrapper');
  const textWrapperHeight = getHightTextWrapper(textWrapper);

  textWrapper[0].style.height = `${textWrapperHeight}px`;

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      accordionApp(items, textWrapper, textWrapperHeight, index)
    });
  });
}
