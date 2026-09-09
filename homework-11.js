// Первый уровень

const subscribeForm = document.getElementById('subscribe-form');
const emailInput = document.getElementById('footer-email');

subscribeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    alert('Поле не должно быть пустым');
    return;
  }
  if (!emailRegex.test(emailValue)) {
    alert('Некорректный формат email');
    return;
  }
  const result = {
    email: emailValue
  };

  console.log(result);
  subscribeForm.reset();
});

// Второй уровень

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
    alert('Регистрация отклонена: Пожалуйста, заполните все поля корректно.');
    return;
  }
  if (passwordInput.value !== passwordConfirmInput.value) {
    alert('Регистрация отклонена: Пароли не совпадают.');
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

  console.log('Пользователь успешно зарегистрирован:', user);
  alert('Регистрация успешно завершена!');

  closeModal();
});