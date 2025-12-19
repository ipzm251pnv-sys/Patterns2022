export class ProductPrototype {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    clone() {
        return new ProductPrototype(this.name, this.price);
    }
}
