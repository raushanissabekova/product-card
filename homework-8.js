const userProfile = {
  firstName: "Раушан",
  lastName: "Исабекова",
  email: "temrayy@gmail.com",
  age: 47,
  country: "Казахстан",
  city: "Астана",
  occupation: "Frontend Development",
  jobTitle: "Senior Frontend Developer",
  isEmployed: true
};

const car = {
  brand: "BMW",
  model: "X5",
  year: 2016,
  color: "Черный",
  transmission: "Автоматическая"
};

car.owner = userProfile;

console.log(car);

function checkAndSetMaxSpeed(carObject) {
  // Проверяем наличие свойства в объекте (используем camelCase или скобочную нотацию)
  if ('maxSpeed' in carObject) {
    return; // Если свойство уже есть — прекращаем выполнение
  }

  // Если свойства нет — добавляем его
  carObject.maxSpeed = "230 км/ч";
}

// 1-й вызов: свойства maxSpeed еще нет, функция его добавит
checkAndSetMaxSpeed(car);
console.log(car.maxSpeed); // Выведет: "230 км/ч"

// 2-й вызов: свойство уже существует, функция сработает вхолостую (return)
checkAndSetMaxSpeed(car);
console.log(car); // Объект останется без изменений

function printPropertyValue(obj, key) {
  console.log(obj[key]);
}

// Вызываем функцию с разными свойствами:
printPropertyValue(car, 'brand'); // Выведет: "BMW"
printPropertyValue(car, 'year');  // Выведет: 2016

// Создаем массив продуктов
const products = ["Молоко", "Хлеб", "Яблоки", "Сыр", "Кофе"];

// Вывод массива в консоль
console.log(products);

// Обращение к отдельным элементам по индексу (отсчет начинается с 0)
console.log(products[0]); // Выведет: "Молоко"
console.log(products[2]); // Выведет: "Яблоки"

// 1. Создаем массив книг (4 книги)
const books = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Красный",
    genre: "Антиутопия"
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Черный",
    genre: "Роман"
  },
  {
    title: "Автостопом по галактике",
    author: "Дуглас Адамс",
    year: 1979,
    coverColor: "Синий",
    genre: "Научная фантастика"
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "Коричневый",
    genre: "Психологический роман"
  }
];

// 2. Используем метод push() для добавления книги в конец массива
books.push({
  title: "Марсианин",
  author: "Энди Вейер",
  year: 2011,
  coverColor: "Оранжевый",
  genre: "Научная фантастика"
});

// Проверяем результат
console.log("Количество книг:", books.length); // Выведет: 5
console.log("Последняя книга:", books[books.length - 1]);

// 2. Создаем другой массив книг (вселенная «Гарри Поттер»)
const harryPotterBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "Красный",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "Зеленый",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Дж. К. Роулинг",
    year: 1999,
    coverColor: "Фиолетовый",
    genre: "Фэнтези"
  }
];

// 3. Объединяем два массива в один с помощью spread-оператора (...)
const allBooks = [...books, ...harryPotterBooks];

console.log(allBooks);
console.log("Всего книг в объединенном массиве:", allBooks.length); // 8

// const allBooks = books.concat(harryPotterBooks);

console.log(allBooks);

function markRareBooks(booksArray) {
  // map создаёт и возвращает НОВЫЙ массив с обновлёнными объектами
  return booksArray.map(book => {
    return {
      ...book,                  // Копируем все существующие свойства книги
      isRare: book.year > 2000  // Добавляем новое свойство (true если год > 2000, иначе false)
    };
  });
}

// Пример использования с массивом allBooks:
const updatedBooks = markRareBooks(allBooks);

console.log(updatedBooks);