import { commentList } from "./comments.js";

// Задание №2: Создал массив и отфильтровал его
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterNumbers = numbers.filter(number => number >= 5);
console.log(filterNumbers);

// Задание №3: Создал массив и проверил есть-ли в нем какая-то определенная сущность
const planets = [
  "Меркурий", 
  "Венера", 
  "Земля", 
  "Марс", 
  "Юпитер", 
  "Сатурн", 
  "Уран", 
  "Нептун"
];

const searchPlanet = "Земля";
const hasPlanet = planets.includes(searchPlanet);
console.log(hasPlanet);

// Задание №4: Создал функцию которая переворачивает массив
function reverseArray(array) {
  console.log(array.reverse())
};

reverseArray(filterNumbers);
reverseArray(planets);

// Задание №7: вывел в консоль массив тех ком. почта пользователей которых содержит ".com"
const wordCheckCom = commentList.filter(essence => essence.email.includes(".com"));
console.log(wordCheckCom);

// Задание №8: перебрал и изменил массив
const checkId = commentList.map((object) => {
  return {
    ...object,
    postId: object.id <= 5 ? 2 : 1,
  };
});
console.log(checkId);

// Задание №9: перебрал массив. объекты состоят только из id, name
const newShortArray = commentList.map((object) => ({id: object.id, name: object.name}));
console.log(newShortArray);

// Задание №10: перебрал массив. добавил объект isInvalid
const addingObject = commentList.map(object => {
  const bodyLength = object.body.length
  return {
    ...object,
    isInvalid: bodyLength > 180
  };
});
console.log(addingObject);

// Задание №11: использовал метод reduce
const emailsReduce = commentList.reduce((accumulator, currentUser) => {
   accumulator.push(currentUser.email);
   return accumulator;
}, [])
console.log(emailsReduce);

const emailMap = commentList.map(user => user.email);
console.log(emailMap);

// Задание №12: привел массив с задания №11 к строке двумя разными методами
let arrayString = emailMap.toString();
console.log(arrayString);

arrayString = emailMap.join("\n");
console.log(arrayString);
