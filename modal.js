export class Modal {
  constructor(id) {
    this.modalId = id;
    this.modalElement = document.getElementById(this.modalId);
  }
}

open() 
    if (this.modalElement) {
      this.modalElement.classList.add('open');
    } else {
      console.error(`Модальное окно с id "${this.modalId}" не найдено!`);
    }


close() 
    if (this.modalElement) {
      this.modalElement.classList.remove('open');
    }
