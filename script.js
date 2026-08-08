// Проверка подключения
console.log('JS успешно подключен!');

// // Находим первую карточку с классом .card
const firstCard = document.querySelector('.card');

// Если карточка найдена, меняем её фоновый цвет
if (firstCard) {
  firstCard.style.backgroundColor = '#e0f7fa';
}

const allCards = document.querySelectorAll('.card');

// Перебираем полученную коллекцию карточек
allCards.forEach(function (card) {
  // Событие: мышь наведена на карточку
  card.addEventListener('mouseenter', function () {
    card.style.backgroundColor = '#81c784';
  });

  // Событие: мышь ушла с карточки
  card.addEventListener('mouseleave', function () {
    card.style.backgroundColor = '#f0f4c3'; // Исходный цвет
  });
});

const shouldRedirect = confirm('Вы действительно хотите перейти на сайт Google?');

if (shouldRedirect) {
  window.location.href = 'https://www.google.com';
}

// Всплывающее окно для пользователя
alert('Привет! Это всплывающее окно.');

// Сообщение для разработчика в консоли браузера
console.log('Данное сообщение видно только в консоли браузера');

// Находим заголовок (попробуем по тегу h1 или твоему классу заголовка)
const mainTitle = document.querySelector('h1') || document.querySelector('.title');

if (mainTitle) {
  mainTitle.addEventListener('mouseenter', function () {
    // Выводим именно контент элемента
    console.log(mainTitle.textContent.trim());
  });
}

// 1. Находим кнопку
const toggleBtn = document.querySelector('.btn-toggle');

// 2. Вешаем обработчик события 'click'
if (toggleBtn) {
  toggleBtn.addEventListener('click', function () {
    // Метод toggle добавляет класс 'active', если его нет,
    // или удаляет его, если он уже есть.
    toggleBtn.classList.toggle('active');
  });
}

if (allCards.length > 0) {
  // Вешаем клик на каждую карточку
  allCards.forEach(function (card) {
    card.addEventListener('click', function () {
      // Переключаем цвет: если был #f0f4c3 — меняем на #e0f7fa, и наоборот
      if (card.style.backgroundColor === 'rgb(240, 244, 195)' || card.style.backgroundColor === '#f0f4c3') {
        card.style.backgroundColor = '#81c784'; // Зеленоватый цвет при нажатии
      } else {
        card.style.backgroundColor = '#f0f4c3'; // Исходный цвет
      }
    });
  });
}

console.log(car.brand);
console.log(car.owner.firstName);

