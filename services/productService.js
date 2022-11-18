import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js";
import { products } from "../data/products.js"

export default class ProductService {


    constructor(loggers) {
        this.loggers = loggers
        this.productList = products;
    }

    add(product) {
        for (const logger of this.loggers) {
            logger.log("ProductService.add method")
        }
        this.productList.push(product);
    }

    getAll() {
        for (const logger of this.loggers) {
            logger.log("ProductService.getAll method")
        }
        return this.productList;

    }

    getById(id) {
        let productToFind = this.productList.find(product => product.id === id);
        return productToFind ?? null;
    }

    delete(id) {
        this.productList = this.productList.filter(product => product.id !== id);
    }
}