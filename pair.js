import { BaseLogger, FileLogger, MssqlLogger } from './crossCuttingConcerns/logging/logger.js';
import { users } from './data/users.js'
import UserService from './services/userService.js';

let userList = users;



let logger = new FileLogger();
let logger1 = new MssqlLogger();
let user=new UserService(logger);


let loggers = [logger, logger1];


console.log(UserService.getAll())
//user.add({id:7, firstName: 'lale', lastName: "Deniz", city: "ankara", age: 33, salary: 456454, type: "customer"});



//console.log(user.getAll());











//console.log(user.getById(5));
//user.delete(5);


//console.log(user.getAll());
