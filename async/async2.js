let allUsers = [user.json];

async function loadUsers() {
  const savedUsers = localStorage.getItem('usersData');
  if (savedUsers) {
    allUsers = JSON.parse(savedUsers);
    renderUsers(allUsers);
  } else {

    try {
        const response = await fetch('users.json');
        allUsers = await response.json();
        localStorage.setItem('usersData', JSON.stringify(allUsers));
        renderUsers(allUsers);
    } catch (error) {
        console.error('Ошибка:', error);
    }
  }
}

function saveToStorage() {
    localStorage.setItem('usersData', JSON.stringify(allUsers));
}

function renderUsers(usersArray) {
    const container = document.getElementById('usersContainer');
    container.innerHTML = '';

    if (usersArray.length === 0) {
        container.innerHTML = '<p>Список пуст</p>';
        return;
    }

    usersArray.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('user-card');
        
        card.innerHTML = `
            <h3>${user.firstname}</h3>
            <p>${user.email}</p>
            <button onclick="deleteUser(${user.id})">Исключить</button>
        `;
        container.appendChild(card);
    });
}

loadUsers();


document.getElementById('loadBtn').addEventListener('click', () => {
    loadUsers();
});

document.getElementById('clearBtn').addEventListener('click', () => {
    allUsers = []; 
    renderUsers(allUsers); 
});

function deleteUser(id) {
    allUsers = allUsers.filter(user => user.id !== id);
    renderUsers(allUsers);
}