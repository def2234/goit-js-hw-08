import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('input', throttle(onChangeForm, 500));
formEl.addEventListener('submit', onSubmitForm);

const objValue = { email: '', message: '' };

resetPage();

function onChangeForm(e) {
  objValue[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(objValue));
}

function resetPage() {
  const getValue = localStorage.getItem('feedback-form-state');

  if (getValue) {
    const parce = JSON.parse(getValue);

    inputEl.value = parce.email;
    textareaEl.value = parce.message;
  }
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(objValue);
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}
