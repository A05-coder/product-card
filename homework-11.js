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

  if (emailValue === '') {
    alert(ERROR_EMPTY_FIELD);

    return;
  }

  if (!emailRegex.test(emailValue)) {
    alert(ERROR_INVALID_EMAIL);

    return;
  }

  const result = {
    email: emailValue
  };

  console.log(result);

  subscribeForm.reset();
});

let user = null;

const modal = document.getElementById('registration-modal');
const openModalButton = document.querySelector('.open-modal-button');
const closeModalButton = document.querySelector('.close-modal-button');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.registration-form');
const passwordInput = document.getElementById('reg-password');
const passwordConfirmInput = document.getElementById('reg-password-confirm');

function openModal() {
  modal.classList.add('modal-showed');
}

function closeModal() {
  modal.classList.remove('modal-showed');

  form.reset(); 
}

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    alert(ERROR_REGISTRATION_INVALID_FORM);

    return;
  }

  if (passwordInput.value !== passwordConfirmInput.value) {
    alert(ERROR_REGISTRATION_PASSWORD_MISMATCH);

    return;
  }

  const formData = new FormData(form);
  const userData = {};
  
  formData.forEach((value, key) => {
    if (key !== 'passwordConfirm') {
      userData[key] = value;
    }
  });

  userData.createdOn = new Date();
  user = userData;

  console.log(SUCCESS_USER_REGISTERED, user);
  alert(SUCCESS_REGISTRATION_COMPLETE);

  closeModal();
});