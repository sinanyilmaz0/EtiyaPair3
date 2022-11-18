import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js";
import { users } from "../data/users.js"

export default class UserService {


    constructor(loggers) {
        this.loggers = loggers
        this.userList = users;
    }

    add(user) {
        for (const logger of this.loggers) {
            logger.log("UserService.add method")
        }
        this.userList.push(user);
    }

    getAll() {
        for (const logger of this.loggers) {
            logger.log("UserService.getAll method")
        }
        return this.userList;

    }

    getById(id) {
        let userToFind = this.userList.find(user => user.id === id);
        return userToFind ?? null;
    }

    delete(id) {
        this.userList = this.userList.filter(user => user.id !== id);
    }
}