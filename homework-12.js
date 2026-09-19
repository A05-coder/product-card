// №3 
class Gadget {
  constructor(product, brand, model, prise) {
    this.product = product
    this.brand = brand
    this.model = model
    this.prise = prise
  }

  gadgetInfo() {
    console.log(`${this.product} ${this.model} от компании ${this.brand}, стоит ${this.prise} рублей.`)
  }
}

class Smartphone extends Gadget {
  constructor(product, brand, model, prise, battery) {
    super(product, brand, model, prise); 
    this.battery = battery;
  }

  smartphoneInfo() {
    console.log(`${this.product} ${this.model} от компании ${this.brand}, обладает батареей ${this.battery} mAh, и стоит ${this.prise} рублей.`)
  }
}

const headphones = new Gadget('Планшет', 'HUAWEI', 'MatePad Pro Max', 120000);
headphones.gadgetInfo();

const phone = new Smartphone('Телефон', 'Apple', 'iPhone 15', 90000, '5000');
phone.smartphoneInfo();

