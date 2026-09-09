import { products } from './products.js'; 

// №3: создал шаблон карточки
// №5: создал две интересные функции
const productCardTemplate = document.querySelector('#productCard-template');
const productCardList = document.querySelector('#productCardList');
const IMAGE_BASE_PATH = './images/';

function getCardsCount() {
  while (true) {
    const input = prompt("Сколько карточек отобразить? От 1 до 5");
    if (input === null) {
      return 0; 
    }
    const count = Number(input);
    if (count >= 1 && count <= 5) {
      return count;
    } 
    alert("Ошибка! Пожалуйста, введите корректное число от 1 до 5.");
  }
}

function renderProducts(productsArray) {
  productsArray.forEach(card => {
    const cardClone = productCardTemplate.content.cloneNode(true);
    const img = cardClone.querySelector('.card__image');
    img.src = IMAGE_BASE_PATH + card.image;
    img.alt = card.imageAlt;
    cardClone.querySelector('.card__category').textContent = card.category;
    cardClone.querySelector('.card__name').textContent = card.name;
    cardClone.querySelector('.card__main-text').textContent = card.description;
    cardClone.querySelector('.compaund_first-component').textContent = card.ingredients[0];
    cardClone.querySelector('.compaund_second-component').textContent = card.ingredients[1];
    cardClone.querySelector('.compaund_third-component').textContent = card.ingredients[2];
    cardClone.querySelector('.card__price_sum').textContent = `${card.price.toLocaleString()} \u20BD`; 
    productCardList.appendChild(cardClone);
  });
}

const countToDisplay = getCardsCount();

if (countToDisplay > 0) {
  const productsToRender = products.slice(0, countToDisplay); 
  renderProducts(productsToRender); 
}

// №4: получил массив объектов с помощью reduce()
const arrayOfNames = products.reduce((accumulator, productCard) => {
  accumulator[productCard.name] = productCard.description;
  return accumulator;
}, {})
console.log(arrayOfNames)