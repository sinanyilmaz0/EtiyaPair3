export class BaseLogger{
    log(data){
        console.log(new Date())
    }
}

export class MssqlLogger extends BaseLogger{
    log(data){
        console.log(`log mssql : ${data}`)
        super.log(data)
    }
}

export class FileLogger extends BaseLogger{
    log(data){
        console.log(`log file : ${data}`)
        super.log(data)
    }
}