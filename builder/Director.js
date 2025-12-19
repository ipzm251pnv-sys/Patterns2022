import { OrderBuilder } from "./OrderBuilder.js";

export class Director {
    createSimpleOrder() {
        return new OrderBuilder()
            .addProduct("Chair")
            .addPrice(2000)
            .build();
    }
}
