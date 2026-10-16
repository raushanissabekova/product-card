import './products.js';
import './comments.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './script.js';



// main.js (или файл логики задания №9)

import { Form } from './Form.js';
import { Modal } from './Modal.js'; // Используем ранее созданный класс модального окна

// 1. Создаем экземпляры классов, передавая ID элементов из HTML
const regModal = new Modal('regModal');    // id модального окна
const regForm = new Form('regForm');       // id формы

const openBtn = document.querySelector('#openRegBtn');

// 2. Открытие модального окна при клике на кнопку
if (openBtn) {
  openBtn.addEventListener('click', () => {
    regModal.open();
  });
}

// 3. Обработка отправки формы
if (regForm.formElement) {
  regForm.formElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // II. Проверяем валидность формы
    if (!regForm.isValid()) {
      // Если форма невалидна, reportValidity() сам подсветит нужное поле и покажет ошибку.
      return;
    }

    // I. Получаем данные формы в виде объекта { fieldName: value }
    const formDataValues = regForm.getValues();
    console.log('Собраны данные формы:', formDataValues);

    // Здесь выполните вашу логику (например, добавление отзыва/карточки в DOM)

    // III. Сбрасываем поля формы
    regForm.reset();

    // Закрываем модальное окно через класс Modal
    regModal.close();
  });
}