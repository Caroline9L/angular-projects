import { Action } from '@ngrx/store';

export const TRY_SIGN_UP = 'TRY_SIGN_UP';
export const TRY_SIGN_IN = 'TRY_SIGN_IN';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action { //used for effects only
	readonly type = TRY_SIGN_UP;

	constructor(public payload: {username: string, password: string}) {}
}

export class TrySignin implements Action { //used for effects only
	readonly type = TRY_SIGN_IN;

	constructor(public payload: { username: string, password: string }) { }
}

export class Signup implements Action {
	readonly type = SIGN_UP;
}

export class Signin implements Action {
	readonly type = SIGN_IN;
}

export class Logout implements Action {
	readonly type = LOGOUT;
}

export class SetToken implements Action {
	readonly type = SET_TOKEN;

	constructor(public payload: string) {
	}
}

export type AuthActions = Signup | Signin | Logout | SetToken | TrySignup | TrySignin;
