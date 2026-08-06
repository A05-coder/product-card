// КНОПКА №1: переключение цвета только первой карточки
const productCard = document.querySelector('.card')
const cardColorChangeButton = document.querySelector('#card-color-change-button')

cardColorChangeButton.addEventListener('click', () => {
  productCard.classList.toggle('card_color-backgreen');
});

// КНОПКА №2: переключение цвета всех карточек
const productsCardList = document.querySelectorAll('.card')
const cardsColorChangeButton = document.querySelector('#cards-color-change-button')

cardsColorChangeButton.addEventListener('click', () => {
  productsCardList.forEach(card => {
    card.classList.toggle('card_color-backblue');
  })
});

// КНОПКА №3: открытие страницы google.com в новой вкладке
const openGoogleButton = document.querySelector('#open-google-button')

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const openAnswer = confirm("Вы точно хотите открыть Google?");
  if (openAnswer === true) {
    window.open('https://www.google.com');
  }
}

// КНОПКА №4: вывод сообщения в консоль log 
const consoleOutputButton = document.querySelector('#console-output-button')

consoleOutputButton.addEventListener('click', () => consoleOutput('Сообщение выведено в консоль log!'));

function consoleOutput(massage) {
  alert('это сделано с помощью alert')
  console.log(massage);
}

// КНОПКА №5: переключение цвета данной кнопки
const btn = document.querySelector('#change-button-color-button');

btn.addEventListener('click', () => {
  btn.classList.toggle('button-color')
});

// вывод текста заголовка в консоль при наведении мыши
const mainTitle = document.querySelector('.title');

mainTitle.addEventListener('mouseenter', (event) => {
  console.log(event.target.textContent);
});