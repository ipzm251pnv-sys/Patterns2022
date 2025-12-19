import { ClassicChair } from "./ClassicChair.js";

export class ClassicFactory {
    createChair() {
        return new ClassicChair();
    }
}
