import { ModernChair } from "./ModernChair.js";

export class ModernFactory {
    createChair() {
        return new ModernChair();
    }
}
