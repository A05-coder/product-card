//задание 3-е
function cityTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градуса по Цельсию`)
}
cityTemperature('Симферополе', 32)

//задание 4-ое
const SPEED_OF_LIGHT = 299792458

function speedTest(speed) {
  if (speed >= SPEED_OF_LIGHT)
    console.log("Сверхсветовая скорость")
  else if (speed === SPEED_OF_LIGHT)
    console.log("Скорость света")
  else 
    console.log("Субсветовая скорость")
}
speedTest(345)

//задание 5-ое
let apple = "Яблоко"
let prise = 5

function currentBudget (budget) {
  if (budget >= prise)
    console.log(`${apple} приобретено. Спасибо за покупку!`)
  else 
    console.log(`Вам не хватает ${prise - budget}$, пополните баланс.`)
}
currentBudget(3)

//задание 5-ое
function fullName(name, lastName) {
  console.log(`${name} ${lastName}`)
}
fullName("Хаким","Абу Мухаммад")

//задание 6-ое
let numberFloors = 13
let roomСolor = "Бежевый"
let numberPagesBook = 356
