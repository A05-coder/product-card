class Drink {
  #temperature
  constructor(name, size, price) {
    this.name = name
    this.size = size
    this.price = price
  }

  getInfo() {
      return(`Напиток: ${this.name};\nРазмер: ${this.size} мл.;\nЦена: ${this.price} руб;`)
  }

  getTemperature() {
    return(`Температура напитка: ${this.#temperature}°C;`)
  }

  setTemperature(ourTemperature) {
    if(typeof ourTemperature === 'number') {
      if(ourTemperature >= 0 && ourTemperature <= 100) {
        this.#temperature = ourTemperature
      } else {
        console.log("Вы указали нереальную температуру")
      }
    } else {
      console.log('Введите температуру в числовом виде');
    }
}
  
  #prepare() {
    console.log(`Начинаем приготовление напитка: ${this.name}...`);
    this.setTemperature(85); 
    console.log("Напиток успешно приготовлен!");
  }

  serveDrink() {
    this.#prepare();
    console.log(`Напиток ${this.name} подан. ${this.getTemperature()}`);
  }
}

class Coffee extends Drink {
  constructor(name, size, price, beanType, milkType) {
    super(name, size, price);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  getInfo() {
    return `${super.getInfo()}\nВид зёрен: ${this.beanType};\nВид молока: ${this.milkType};`;
  }
}

class Tea extends Drink {
  constructor(name, size, price, teaType, hasSugar) {
    super(name, size, price);
    this.teaType = teaType;
    this.hasSugar = hasSugar;
  }

  getInfo() {
    return `${super.getInfo()}\nСорт чая: ${this.teaType};\nСахар: ${this.hasSugar ? 'Да' : 'Нет'};`;
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, fruitType, hasIce) {
    super(name, size, price);
    this.fruitType = fruitType;
    this.hasIce = hasIce;
  }

  getInfo() {
    return `${super.getInfo()}\nВкус: ${this.fruitType};\nЛёд: ${this.hasIce ? 'Да' : 'Нет'};`;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    return `Кафе: "${this.name}"\nАдрес: ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Поступил заказ на напиток: ${drink.name}`);
    drink.serveDrink();
    console.log(`Клиент забрал напиток: ${drink.name}`);
  }
}

const myCafe = new Cafe("Кофе и Код", "ул. Пушкина, д. 10");
console.log(myCafe.getCafeInfo());

const cappuccino = new Coffee("Капучино", 300, 250, "Арабика", "Овсяное");
const greenTea = new Tea("Зеленый чай", 400, 180, "Сенча", true);

myCafe.orderDrink(cappuccino);
myCafe.orderDrink(greenTea);
