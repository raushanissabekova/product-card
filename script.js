console.log('JS успешно подключен!');

// Проверка подключения
console.log('JS успешно подключен!');

// ==========================================
// Задание 2: Перекрашивание первой карточки
// ==========================================
// (Если нужно покрасить при загрузке, расскомментируй строку ниже)
// const firstCard = document.querySelector('.card');
// if (firstCard) firstCard.style.backgroundColor = '#e0f7fa';

// ==========================================
// Задание 3: Перекрашивание всех карточек
// ==========================================
// (Задает фон всем карточкам с классом .card)
const allCards = document.querySelectorAll('.card');
allCards.forEach(function (card) {
  card.addEventListener('mouseenter', function () {
    card.style.backgroundColor = '#81c784';
  });
  card.addEventListener('mouseleave', function () {
    card.style.backgroundColor = '#f0f4c3'; // Исходный цвет
  });
});

// ==========================================
// Задание 4: Переписать задачу с открытием Google
// ==========================================
// Закомментировано, чтобы страница не улетала в Google при загрузке:
// window.location.href = 'https://www.google.com';

// ==========================================
// Задание 5: alert и console.log
// ==========================================
// alert('Привет! Это всплывающее окно.');
console.log('Данное сообщение видно только в консоли браузера');

// ==========================================
// Задание 6: При наведении на главный заголовок — вывод в консоль
// ==========================================
// Находим заголовок (попробуем по тегу h1 или твоему классу заголовка)
const mainTitle = document.querySelector('h1') || document.querySelector('.title');

if (mainTitle) {
  mainTitle.addEventListener('mouseenter', function () {
    // Выводим именно контент элемента
    console.log(mainTitle.textContent.trim());
  });
}

// ==========================================
// Задание 7: Смена цвета карточки при клике (toggle)
// При первом клике перекрашивается, при повторном — возвращается
// ==========================================
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