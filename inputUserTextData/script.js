const render = () => {
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const userText = document.createElement('p');
  const form = document.createElement('form');
  const input = document.createElement('input');

  container.className = 'container';
  wrapper.className = 'wrapper';
  userText.className = 'user__text';
  form.className = 'user__form';
  input.className = 'user__input';
  input.type = 'text';

  form.append(input);
  wrapper.append(userText, form);
  container.append(wrapper);
  document.body.append(container);

  return { userText, form, input }
};

const init = () => {
  const { userText, form, input } = render();
  let timeoutId;

  form.addEventListener('submit', e => {
    e.preventDefault();
  });

  input.addEventListener('input', e => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      userText.textContent = input.value;
    }, 300);
  })
};

init();

