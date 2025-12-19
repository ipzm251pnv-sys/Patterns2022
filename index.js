import Logger from "./singleton/Logger.js";
import { FurnitureFactory } from "./factory/FurnitureFactory.js";
import { ModernFactory } from "./abstractFactory/ModernFactory.js";
import { Director } from "./builder/Director.js";
import { ProductPrototype } from "./prototype/ProductPrototype.js";

const logger = new Logger();
logger.log("Application started");

const chair = FurnitureFactory.create("chair");
logger.log(chair.getType());

const modernFactory = new ModernFactory();
logger.log(modernFactory.createChair().style());

const director = new Director();
console.log(director.createSimpleOrder());

const prototype = new ProductPrototype("Table", 5000);
const copy = prototype.clone();
console.log(copy);
