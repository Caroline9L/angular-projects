import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [AccountsService] //not needed, moving up to appmod for global availablility
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = []; //empty array for new accounts to live in

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts; // accountsService is called in contructor above -- this accounts array gets the information stored in the accounts array called in the class/service AccountsService 
  }

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
  // this is rendered redundant by AccountsService class

}
