// will run some bit of business before a redirect or other action
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ServersService } from '../servers.service';


interface Server {
	id: number;
	name: string;
	status: string;
}

@Injectable()

export class ServerResolver implements Resolve<Server> {// Server = {id: number, name: string, status: string}
	constructor(private serversService: ServersService) {} 
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
		return this.serversService.getServer(+route.params['id']);
	}
}