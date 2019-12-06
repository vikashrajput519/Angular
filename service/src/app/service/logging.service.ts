
export class LoggingService {
    logStatusChange(logMsg: string) {
        console.log('A server status changed, new status: '+logMsg);
    }
}