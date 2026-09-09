const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(sum); // Output: 15


const productDescriptionsArray = products.reduce((acc, product) => {
  acc.push({
    [product.title]: product.description
  });
  return acc;
}, []);

console.log(productDescriptionsArray);


import { products } from './products.js';

// 1. Функция запроса количества карточек с валидацией
function getCardCount() {
  const userInput = prompt('Сколько карточек отобразить? От 1 до 5');

  // Преобразуем введенную строку в число
  const count = Number(userInput);

  // Проверяем условия:
  // - count должен быть от 1 до 5
  // - введенное значение не должно быть NaN (если ввели буквы)
  // - пользователь не должен был нажать "Отмена" (userInput !== null)
  if (userInput !== null && !isNaN(count) && count >= 1 && count <= 5) {
    return count;
  } else {
    alert('Пожалуйста, введите корректное число от 1 до 5!');
    return 0; // Возвращаем 0, если ввод неверный
  }
}

// 2. Функция рендеринга карточек
function renderCards(cardsArray) {
  const container = document.querySelector('.products'); // Находим список UL в HTML

  if (!container) return;

  // Очищаем существующую верстку перед добавлением
  container.innerHTML = '';

  // Генерируем HTML для каждого элемента
  cardsArray.forEach((product) => {
    const cardHtml = `
      <li class="products__item product-card">
        <img src="${product.img}" alt="${product.title}" class="product-card__img">
        <span class="product-card__category">${product.category}</span>
        <h2 class="product-card__name">${product.title}</h2>
        <p class="product-card__description">${product.description}</p>
        
        <div class="card compound">
          <span class="compound__name">Состав:</span>
          <ul class="compound__list">
            ${product.compound.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="price-container">
          <b>Цена:</b>
          <span>${product.price} ₽</span>
        </div>
      </li>
    `;

    container.innerHTML += cardHtml;
  });
}

// 3. Запуск при старте страницы
const count = getCardCount();

if (count > 0) {
  // Берем ровно столько карточек из массива, сколько ввел пользователь
  const productsToRender = products.slice(0, count);
  renderCards(productsToRender);
}