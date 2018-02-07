import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private authService: AuthService) {	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log('Intercepted', req);
		// const copiedReq = req.clone({headers: req.headers.set('', '')}); //makes a copy of the request so that changes can be made if needed. {} will make updates to req
		const copiedReq = req.clone({ params: req.params.set('auth', this.authService.getToken()) }); 
		// return next.handle(req); //allows request to continue on
		return next.handle(copiedReq);
	}
}
