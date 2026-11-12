console.log('Асинхронная задача начало');

setTimeout(() => {
  console.log('Асинхронная задача выполняется');
}, 1000);

console.log('Асинхронная задача завершена');

async function fetchData() {
  try {
    const response = await fetch('users.json');
    if (!response.ok) {
      throw new Error('Ошибка сети');
    }
    const data = await response.json();
    console.log('Данные получены:', data);

    localStorage.setItem('users', JSON.stringify(data));

  } catch (error) {
    console.error('Произошла ошибка при получении данных:', error);
  }
}

setTimeout(() => {
  const users = localStorage.getItem('users');
  if (users) {
    const parsedUsers = JSON.parse(users);    
    console.log('Пользователи из localStorage:', parsedUsers);
  }
}, 1000);