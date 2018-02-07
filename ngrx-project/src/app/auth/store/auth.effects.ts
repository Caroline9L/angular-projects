import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import * as firebase from 'firebase';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as AuthActions from './auth.actions';


@Injectable()
export class AuthEffects {
	@Effect() //{dispatch: false} can be added if no observable is emitted/state is changed
	authSignup = this.actions$//watch for these actions
		.ofType(AuthActions.TRY_SIGN_UP)//but only these kinds
		.map((action: AuthActions.TrySignup) => {
			return action.payload; //first mapped observable
		})
		.switchMap((authData: { username: string, password: string }) => {//takes the result from map
			return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password))
		})
		.switchMap(() => {
			return fromPromise(firebase.auth().currentUser.getIdToken());
		})
		.mergeMap((token: string) => {//auto convert all that jazz into observable & merge it
			return [
				{
					type: AuthActions.SIGN_UP
				},
				{
					type: AuthActions.SET_TOKEN,
					payload: token
				},
				
			];
		});

	@Effect()
		authTrySignin = this.actions$
			.ofType(AuthActions.TRY_SIGN_IN)
			.map((action: AuthActions.TrySignin) => {
				return action.payload;
			})
			.switchMap((authData: { username: string, password: string }) => {//takes the result from map
				return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password))
			})
			.switchMap(() => {
				return fromPromise(firebase.auth().currentUser.getIdToken());
			})
			.mergeMap((token: string) => {
				this.router.navigate(['/']);
				return [
					{
						type: AuthActions.SIGN_IN
					},
					{
						type: AuthActions.SET_TOKEN,
						payload: token
					},
				];
			});

	@Effect({dispatch: false})
	authLogout = this.actions$
		.ofType(AuthActions.LOGOUT)
		.do (() => {
				this.router.navigate(['/'])
		});

	constructor(private actions$: Actions,
				private router: Router) {}
}
