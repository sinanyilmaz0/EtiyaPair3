import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js";
import { orders } from "../data/orders.js";
import ProductService from "./productService.js";
import UserService from "./userService.js";

export default class OrderService {

    constructor(loggers) {
    
        this.loggers = loggers
        this.userService = new UserService(loggers)
        this.productService = new ProductService(loggers)
        this.orderList = orders;
    }

    add(order) {
        for (const logger of this.loggers) {
            logger.log("OrderService.add method")
        }
        
        if(!this.userService.getById(order.userId) || !this.productService.getById(order.productss.find(product => product.id === product.id).id)){
            console.log("Böyle bir user veya product yok.")
        }else{
            this.orderList.push(order);
        }
    }

    getAll() {
        for (const logger of this.loggers) {
            logger.log("OrderService.getAll method")
        }
        return this.orderList;

    }

    getById(id) {
        for (const logger of this.loggers) {
            logger.log("OrderService.getById method")
        }
        let orderToFind = this.orderList.find(orders => orders.id === id);
        return orderToFind ?? null;
    }

    delete(id) {
        for (const logger of this.loggers) {
            logger.log("OrderService.delete method")
        }
        this.orderList = this.orderList.filter(order => order.id !== id);
    }

    update(order){
        for (const logger of this.loggers) {
            logger.log("OrderService.update method")
        }
   
        let orderIndex = orders.indexOf(this.orderList.find(orders => orders.id === order.id))
        this.orderList[orderIndex] = order
    }
}