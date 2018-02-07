import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service'; //to inject a service into this service


@Injectable() //add metadata to make it work -- added to the service GETTING the injection, NOT the one giving it.

export class AccountsService {
	accounts = [
		{
			name: 'Master Account',
			status: 'active'
		},
		{
			name: 'Testaccount',
			status: 'inactive'
		},
		{
			name: 'Hidden Account',
			status: 'unknown'
		}
	];

	statusUpdated = new EventEmitter<string>(); //new event that lives in this service

	constructor(private loggingService: LoggingService) { } //to inject a service into this service

	addAccount(name: string, status: string) {
		this.accounts.push({name: name, status: status});
		this.loggingService.logStatusChange(status);
	}

	updateStatus(id: number, status: string) {
		 this.accounts[id].status = status;
		 this.loggingService.logStatusChange(status);
	}
}

//Data Service