// 1. Абстрактный класс Напиток
class Drink {
  #temperature; // Приватное свойство

  constructor(name, price, size, temperature) {
    if (this.constructor === Drink) {
      throw new Error("Нельзя создавать объект абстрактного класса Drink!");
    }
    this.name = name;
    this.price = price;
    this.size = size;
    this.#temperature = temperature;
  }

  // Получить информацию о напитке
  getInfo() {
    return `Напиток: ${this.name}, Цена: ${this.price}, Размер: ${this.size}, Температура: ${this.#temperature}°C`;
  }

  // Получить напитки с подогревом
  getWarmedStatus() {
    return this.#temperature > 40 ? "Горячий" : "Прохладный";
  }

  // Установить прохладительные напитки
  setRefreshing() {
    this.#temperature = 10;
    console.log(`[Лог] ${this.name} охлажден до ${this.#temperature}°C.`);
  }

  // Приватный метод приготовления
  #cook() {
    console.log(`[Лог] Готовим ${this.name}... Меняем температуру.`);
    this.#temperature = 75; // меняем температуру при готовке
  }

  // Подать напиток (вызывает приготовление)
  serve() {
    this.#cook();
    console.log(`[Лог] ${this.name} успешно подан!\n`);
  }
}

// 2. Наследники (Кофе и Лимонад)
class Coffee extends Drink {
  constructor(name, price, size, beanType, milkType) {
    super(name, price, size, 80); // Горячий по умолчанию
    this.beanType = beanType;
    this.milkType = milkType;
  }
}

class Lemonade extends Drink {
  constructor(name, price, size, fruitFlavor) {
    super(name, price, size, 12); // Холодный по умолчанию
    this.fruitFlavor = fruitFlavor;
  }
}

// 3. Класс «Кафе»
class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  // Информация о кафе
  getInfo() {
    return `Кафе "${this.name}" находится по адресу: ${this.location}`;
  }

  // Заказать напиток
  orderDrink(drink) {
    console.log(`[Кафе] Заказ принят в "${this.name}"!`);
    drink.serve(); // Запуск процесса приготовления и подачи
  }
}

// ==========================================
// ПРОВЕРКА РАБОТЫ
// ==========================================

// Открываем кафе
const myCafe = new Cafe("Уют", "Левый берег");
console.log(myCafe.getInfo());

// Создаем напитки
const latte = new Coffee("Латте", 1000, 300, "Американо", "Капучино");
const mojito = new Lemonade("Мохито", 1200, 400, "Лайм");

// Смотрим информацию о напитках
console.log(latte.getInfo());
console.log(mojito.getInfo());

// Делаем заказ в кафе
myCafe.orderDrink(latte);
myCafe.orderDrink(mojito);