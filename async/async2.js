let allUsers = [];
let originalUsers = [];

async function loadUsers() {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await fetch('users.json');
        originalUsers = await response.json();

        const savedUsers = localStorage.getItem('usersData');
        if (savedUsers) {
            const parsedUsers = JSON.parse(savedUsers);
            allUsers = parsedUsers;
        } else {
            allUsers = [...originalUsers];
            saveToStorage();
        }
        
        renderUsers(allUsers);
    } catch (error) {
        console.error('Ошибка:', error);
    }
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
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('usersData', JSON.stringify(allUsers));
}

loadUsers();