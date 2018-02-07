import { Injectable} from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()

export class UserService {
	activeUsers = ['Max', 'Anna'];
	inactiveUsers = ['Chris', 'Manu'];

	constructor(private counterService: CounterService) { }

	setToActive(id: number) {
		this.activeUsers.push(this.inactiveUsers[id]);//ok
		this.inactiveUsers.splice(id, 1);//ok
		this.counterService.incrementInactiveToActive();
	}

	setToInactive(id: number) {
		this.inactiveUsers.push(this.activeUsers[id]);//ok
		this.activeUsers.splice(id, 1);//ok
		this.counterService.incrementActiveToInactive();
	}
}