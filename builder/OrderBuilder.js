export class OrderBuilder {
    constructor() {
        this.order = {};
    }

    addProduct(product) {
        this.order.product = product;
        return this;
    }

    addPrice(price) {
        this.order.price = price;
        return this;
    }

    build() {
        return this.order;
    }
}
