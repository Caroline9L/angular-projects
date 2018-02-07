export class LoggingService {
	logStatusChange(status: string) {
		console.log('A server status changed, new status: ' + status); //status is the item above in ()
	}
}