// Задание №3: Создал объект с данными пользователя
const userData = {
  name: "Хаким",
  lastName: "Караманов",
  age: "18",
  eMail: "hakimkaramanov@gmail.com",
  country: "Russia",
  city: "Simferopol",
  phoneNumber: "+7(978)291-51-51"
}

console.log(userData)

// Задание №4: Создал объект с данными автомобиля и добавил дополнительное свойство
const auto = {
  carMake: "Mersedes",
  carModel: "Benz",
  yearManufacture: 2026,
  carColor: "black",
  carTransmission: "manual transmission"
}

auto.carOwner = userData
console.log(auto)

// Задание №5: Создал функцию проверки наличия свойства максимальной скорости
function testMaxSpeed(auto) {
  if ("maxSpeed" in auto) {
    return;
  }
  else {
    auto.maxSpeed = 340;
  }
}

testMaxSpeed(auto)
console.log(auto)

// Задание №6: Создал функцию вывода одного аргумента из оъекта
function propertyOutputtingObject(object, output) {
  console.log(object[output])
}

propertyOutputtingObject(userData, "name")

// Задание №7: Создал массив которых хранит в себе продукты
const productsList = [
  "Apple",
  "Banana",
  "Milk",
  "Bread",
  "Chicken",
  "Eggs",
  "Cheese",
  "Tomato",
  "Coffee"
];

console.log(productsList);

// Задание №8: Создал массив со списком книг. После создания добавил еще один объект 
const booksList = [
  {
    title: "Евгений Онегин",
    author: "Александр Пушкин",
    year: 1833,
    coverColor: "Зелёный",
    genre: "Роман в стихах"
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "Чёрный",
    genre: "Психологический роман"
  },
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    coverColor: "Зелёный",
    genre: "Роман-эпопея"
  },
  {
    title: "Анна Снегина",
    author: "Сергей Есенин",
    year: 1925,
    coverColor: "Синий",
    genre: "Поэма"
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Чёрный",
    genre: "Фантастический роман"
  }
];

booksList.push({
  title: "Мёртвые души",
  author: "Николай Гоголь",
  year: 1842,
  coverColor: "Чёрный",
  genre: "Поэма в прозе"
});

console.log(booksList)

// Задание №9: Создал массив из обьектов с книгами. Объединил массивы
const booksSherlockHolmes = [
  {
    title: "Этюд в багровых тонах",
    author: "Артур Конан Дойл",
    year: 1887,
    coverColor: "Чёрный",
    genre: "Детектив"
  },
  {
    title: "Приключения Шерлока Холмса",
    author: "Артур Конан Дойл",
    year: 1892,
    coverColor: "Чёрный",
    genre: "Детектив"
  },
  {
    title: "Собака Баскервилей",
    author: "Артур Конан Дойл",
    year: 1902,
    coverColor: "Чёрный",
    genre: "Детектив"
  }
];

const allBooks = [...booksList, ...booksSherlockHolmes]
console.log(allBooks)

// Задание №10: Создал функцию проверки редкости книги
function checksRareBooks(booksArray) {
  booksArray.forEach(book => {
    
    if (book.year < 1900) {
      book.isRare = true;
    } 
    else {
      book.isRare = false;
    }
  });
}

checksRareBooks(allBooks)