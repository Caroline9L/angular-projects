import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service'; 
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService] //list the services you are adding to the file here by name, AccountsService is removed so ti does not override the main instance
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>(); //no longer getting called since we are using the service

  //to call a service:
  constructor(private loggingService: LoggingService, //not actually necessary since it'll live in the accountsservice
    private accountsService: AccountsService) { //(a,b) a is a custom variable, any name, b is a type and = the name of the service class
    this.accountsService.statusUpdated.subscribe( //listens to event emitted from account.ts that was called from the service
          (status: string) => alert('New Status: ' + status) //string will be the status we are listening to in acc.comp.ts
        ); 
     }


 
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus //this will be passed to logStatusChange as an argument
    // });  //no longer getting called since we are using the service
    // console.log('A server status changed, new status: ' + accountStatus); //logging service will replace this
    
    // const service = new LoggingService(); //call the service class and attach to variable
    // service.logStatusChange(accountStatus); //call the function from the service, the status is attached to the status above

    // should not be called manually
    this.accountsService.addAccount(accountName, accountStatus); //addAccount is a function from the service, accountName is the variable named in this function
    // this.loggingService.logStatusChange(accountStatus); //calling the app properly.  Angular made the 'loggingService'variable from the class name, calls the method, and passes in the argument

  }

}
