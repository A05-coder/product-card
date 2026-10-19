const deleteAllButton = document.getElementById("delete-all-button");
const getAllButton = document.getElementById("get-all-button");
const statusMessage = document.getElementById("status-message");
const cardsContainer = document.getElementById("cards-container");

function init() {
  if (localStorage.getItem("users") !== null) {
    renderCards();
  } else {
    loadData();
  }
}

async function loadData() {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch("database.json");

    if (!response.ok) {
      throw new Error("Ошибка сети");
    }

    const data = await response.json();

    localStorage.setItem("users", JSON.stringify(data.users));
    renderCards();

  } catch (error) {
    statusMessage.textContent = "Ошибка при загрузке данных";
  }
}

function renderCards() {
  statusMessage.textContent = "";
  cardsContainer.innerHTML = "";

  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.forEach(user => {
    
    const cardHTML = `
      <div class="card">
        <h3>${user.name} ${user.surname}</h3>
        <p>Email: ${user.email}</p>
        <p>Возраст: ${user.age}</p>
        <p>Город: ${user.city}</p>
        <p>Телефон: ${user.phone}</p>
        <p>Дата регистрации: ${user.registrationDate}</p>
        <button class="delete-single-button" data-id="${user.id}">Удалить</button>
      </div>
    `;

    cardsContainer.innerHTML += cardHTML;
  });
}

deleteAllButton.addEventListener("click", () => {
  localStorage.setItem("users", JSON.stringify([]));
  renderCards();
});

cardsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-single-button")) {
    
    const userId = Number(event.target.dataset.id);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const filteredUsers = users.filter(user => user.id !== userId);
    
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    renderCards();
  }
});

getAllButton.addEventListener("click", () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.length > 0) {
    alert("Все пользователи уже отображены на странице!");
  } else {
    statusMessage.textContent = "Данные загружаются";
    loadData();
  }
});

init();


