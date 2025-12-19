import { Chair } from "./Chair.js";
import { Table } from "./Table.js";

export class FurnitureFactory {
    static create(type) {
        if (type === "chair") return new Chair();
        if (type === "table") return new Table();
        throw new Error("Unknown furniture type");
    }
}
