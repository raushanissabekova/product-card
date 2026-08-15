//import { sum, PI } from './math.js';

//console.log(sum(5, 10)); // Выведет: 15
console.log(PI);         // Выведет: 3.14159


//export function sum(a, b) {
//    return a + b;

// Экспорт константы
export const PI = 3.14159;


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.filter(num => num % 5 === 0);
console.log(newArray); // Выведет: [5, 10]


const furniture = ["Стул", "Стол", "Диван", "Кровать", "Шкаф", "Комод", "Тумбочка", "Кресло", "Полка", "Табурет"];
console.log(text.includes('Кресло')); // Выведет: true


const furniture = ["Стул", "Стол", "Диван", "Кровать", "Шкаф", "Комод", "Тумбочка", "Кресло", "Полка", "Табурет"];
furniture.reverse();
console.log(furniture); // Выведет: ["Табурет", "Полка", "Кресло", "Тумбочка", "Комод", "Шкаф", "Кровать", "Диван", "Стол", "Стул"]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reverse();
console.log(numbers); // Выведет: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

import { socialComments } from './comments.js';

// Проверяем работу в консоли
console.log(socialComments);

console.log(socialComments);

const newArray = socialComments.filter(comment => comment.email.endsWith('.com'));
console.log(newArray); // Выведет массив комментариев с email, оканчивающимся на ".com"


const newArray = socialComments.map(comment => {
  return {
    ...comment, // Копируем все старые свойства объекта (name, email, body и т.д.)
    postId: comment.id <= 5 ? 2 : 1 // Меняем postId в зависимости от id
  };
});

console.log(updatedComments); // Выведет массив комментариев с обновлёнными postId


const socialComments = socialComments.map(({ id, name }) => ({ id, name }));
console.log(socialComments); // Выведет массив объектов с только id и name


const updatedComments = socialComments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));
console.log(updatedComments); // Выведет массив комментариев с добавленным свойством isInvalid