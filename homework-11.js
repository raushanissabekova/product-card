// Внешняя переменная для хранения зарегистрированного пользователя
let user = null;

// Находим элементы формы подписки
const subscribeForm = document.querySelector('#subscribe-form');
const subscribeInput = document.querySelector('#subscribe-email');

if (subscribeForm && subscribeInput) {
  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = subscribeInput.value.trim();

    if (!email || !email.includes('@')) {
      alert('Введите корректный email!');
      return;
    }

    console.log({ email: email });
    subscribeInput.value = '';
  });
}

// Элементы модального окна
const modal = document.querySelector('#registration-modal');
const openBtn = document.querySelector('#open-modal-btn');
const closeBtn = document.querySelector('#close-modal-btn');
const regForm = document.querySelector('#register-form');

// Открытие и закрытие модального окна
if (openBtn && modal) {
  openBtn.addEventListener('click', () => {
    modal.classList.add('modal-showed');
  });
}

if (closeBtn && modal) {
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal-showed');
  });
}

// Валидация и отправка формы регистрации
if (regForm && modal) {
  regForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const password = document.querySelector('#reg-password')?.value;
    const confirmPassword = document.querySelector('#reg-confirm-password')?.value;

    // 1. Проверка и визуализация ошибок формы
if (!regForm.reportValidity()) {
  return; // Форма невалидна: браузер сам покажет подсказку на ошибочном поле
}

    // 2. Проверка совпадения паролей
    if (password !== confirmPassword) {
      alert('Регистрация отклонена: Пароли не совпадают!');
      return;
    }

    // 3. Создаем объект пользователя и записываем вглубь внешнюю переменную user
    user = {
      firstName: document.querySelector('#reg-first-name').value.trim(),
      lastName: document.querySelector('#reg-last-name').value.trim(),
      birthDate: document.querySelector('#reg-birth-date').value,
      login: document.querySelector('#reg-login').value.trim(),
      createdOn: new Date()
    };

    console.log('Зарегистрированный пользователь:', user);

    // Очищаем форму и закрываем модалку
    regForm.reset();
    modal.classList.remove('modal-showed');
  });
}