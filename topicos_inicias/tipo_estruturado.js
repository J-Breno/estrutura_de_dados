class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    toString() {
        return `${this.name}, R$ ${this.price.toFixed(2)}, ${this.quantity}`;
    }

    total() {
        return this.price * this.quantity;
    }

    updatePrice(percentage) {
        this.price = this.price * (1 + percentage / 100)
    }
}





const p1 = new Product("Laptop", 1000.0, 5)
const p2 = new Product("HeadPhones", 200.0, 2)
console.log(p1.toString())
console.log(p2.toString())

const total1 = p1.total()
console.log(total1) 

// tipos primitivos no javascript são tipos valor
// tipos referencia são objetos, arrays e funções