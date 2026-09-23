import { Modal } from './Modal.js';
import { Form } from './form.js';

const ERROR_EMPTY_FIELD = "Поле не должно быть пустым";
const ERROR_INVALID_EMAIL = "Некорректный формат email";
const ERROR_REGISTRATION_INVALID_FORM = "Регистрация отклонена: Пожалуйста, заполните все поля корректно.";
const ERROR_REGISTRATION_PASSWORD_MISMATCH = "Регистрация отклонена: Пароли не совпадают.";
const SUCCESS_USER_REGISTERED = "Пользователь успешно зарегистрирован:";
const SUCCESS_REGISTRATION_COMPLETE = "Регистрация успешно завершена!";

const subscribeForm = document.getElementById('subscribe-form');
const emailInput = document.getElementById('footer-email');

subscribeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '') { return alert(ERROR_EMPTY_FIELD); }
  if (!emailRegex.test(emailValue)) { return alert(ERROR_INVALID_EMAIL); }

  console.log({ email: emailValue });
  subscribeForm.reset();
});

let user = null;

const regModal = new Modal('registration-modal');
const regForm = new Form('registration-form');

const openModalButton = document.querySelector('.open-modal-button');
const overlay = document.querySelector('.overlay');

openModalButton.addEventListener('click', () => {
  regModal.open();
});

overlay.addEventListener('click', () => {
  regModal.close();
  regForm.reset();
});

regForm.form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!regForm.isValid()) {
    alert(ERROR_REGISTRATION_INVALID_FORM);
    return;
  }

  const values = regForm.getValues();

  const userData = { ...values };
  delete userData.passwordConfirm;
  userData.createdOn = new Date();
  
  user = userData;

  console.log(SUCCESS_USER_REGISTERED, user);
  alert(SUCCESS_REGISTRATION_COMPLETE);

  regForm.reset();
  regModal.close();
});
