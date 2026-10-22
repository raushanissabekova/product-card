export class Form {
  constructor(id) {
    this.formId = id;
    this.formElement = document.getElementById(id);

    if (!this.formElement) {
      console.error(`Форма с id "${id}" не найдена в DOM!`);
    }
  }

  // I. Метод для получения всех значений формы в виде удобного объекта
  getValues() {
    if (!this.formElement) return {};

    // FormData автоматически собирает пары name: value со всех полей формы
    const formData = new FormData(this.formElement);
    
    // Преобразуем FormData в обычный объект { inputName: value }
    return Object.fromEntries(formData.entries());
  }

  // II. Метод для проверки валидности формы (возвращает true / false)
  // И использует reportValidity() для показа встроенных подсказок браузера
  isValid() {
    if (!this.formElement) return false;
    return this.formElement.reportValidity();
  }

  // III. Метод для сброса значений формы
  reset() {
    if (this.formElement) {
      this.formElement.reset();
    }
  }
}