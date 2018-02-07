//guard feature -- little like authentication
import { Injectable } from '@angular/core';
import { CanActivate,
		ActivatedRouteSnapshot,
		RouterStateSnapshot, 
		Router,
		CanActivateChild 
	} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';


@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private authService: AuthService, 
				private router: Router) {}
	canActivate(route: ActivatedRouteSnapshot, 
				state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {//can return synch or asynch
		return this.authService.isAuthenticated() //from the auth service
			.then(
				(authenticated: boolean) => { //will return t or f
					if (authenticated) { //if true
						return true; //allow to continue
					} else {
						this.router.navigate(['/']);	//reject and redirect
					}
				}
			);
		}

	canActivateChild(route: ActivatedRouteSnapshot, //for child elements only
					state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate(route, state); //can just call the old method since it's exactly the same
	}
}
