import { consoleTransport, fileAsyncTransport, logger } from "@/imports"

const config = {
    transport:(msg:any)=>{
        fileAsyncTransport(msg)
        consoleTransport(msg)
    },
    stringifyFunc:(msg:any)=>msg,
    levels:{
        debug:0,
        info:1,
        warn:2,
        error:3
    },
    transportOptions:{
        colors:{
            debug:"white",
            info:"blueBright",
            warn:"yellowBright",
            error:"redBright"
        },
        dateFormat:(date:Date)=>{return date.toISOString()},
        FS:FileSystem,
        fileName:"app_logs_{date-today}.log"
    }
}
const log = logger.createLogger(config)
if(__DEV__){
    log.setSeverity('debug')
}else{
    log.setSeverity("error")
}
const debugLog = (...msg:any) =>{
    log.debug(msg)
}
const infoLog = (...msg:any) =>{
    log.info(msg)
}
const warnLog = (...msg:any) =>{
    log.warn(msg)
}
const errorLog = (...msg:any) =>{
    log.error(msg)
}
const getCurrentSeverity = () =>{
    return log.getSeverity();
}
export {debugLog,infoLog,warnLog,errorLog,getCurrentSeverity}