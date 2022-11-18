import { FileLogger, MssqlLogger } from "./crossCuttingConcerns/logging/logger.js";
import ProductService from "./services/productService.js";

let logger = new FileLogger();
let logger1 = new MssqlLogger();


let productLoggers = [logger, logger1];
let product = new ProductService(productLoggers);


product.add({id: 8, name: "Yastık", unitPrice: 250, stock : 10});
product.update({id: 3, name: "Mause", unitPrice: 250, stock : 10});


console.log(product.getAll())


