import { FileLogger, MssqlLogger } from "./crossCuttingConcerns/logging/logger.js";
import OrderService from "./services/orderService.js";
import ProductService from "./services/productService.js";

let logger = new FileLogger();
let logger1 = new MssqlLogger();



let orderLoggers = [logger, logger1];
let order = new OrderService(orderLoggers);


order.add({id: 4, userId : 1, productss:[{
    id: 5,
    name: "Halı",
    unitPrice : 500,
    stock : 3,
}]});
//product.update({id: 3, name: "Mause", unitPrice: 250, stock : 10});


console.log(order.getAll())


//let productLoggers = [logger, logger1];
//let product = new ProductService(productLoggers);


//product.add({id: 8, name: "Yastık", unitPrice: 250, stock : 10});
//product.update({id: 3, name: "Mause", unitPrice: 250, stock : 10});


//console.log(product.getAll())


