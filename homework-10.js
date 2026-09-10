import { products } from './products.js';

console.log(productDescriptionsArray);

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


// 1. Функция запроса количества карточек с валидацией
function getValidCount() {
  while (true) {
    const userInput = prompt('Введите количество (от 1 до 5):');

    // Если пользователь нажал "Отмена"
    if (userInput === null) {
      return null; 
    }

    const count = Number(userInput.trim());

    // Проверяем: строка не пустая, это число, и оно входит в диапазон 1..5
    if (userInput.trim() !== '' && !isNaN(count) && count >= 1 && count <= 5) {
      return count; // Успех: возвращаем число и выходим из функции (и цикла)
    }

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
const count = getValidCount();

if (count !== null) {
  // Берем ровно столько карточек из массива, сколько ввел пользователь
  const productsToRender = products.slice(0, count);
  renderCards(productsToRender);
}