import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT'; //unique id for the action
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';


export class AddIngredient implements Action {
	readonly type = ADD_INGREDIENT; //readonly is required. The class associates the id with the type
	// payload: Ingredient; //add data content to class

	constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
	readonly type = ADD_INGREDIENTS; 

	constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
	readonly type = UPDATE_INGREDIENT;

	constructor(public payload: {ingredient: Ingredient}) { }//payload is found in SLservice -- (index: number, newIngredient: Ingredient) from the function. in {} because it's a js object
}

export class DeleteIngredient implements Action {
	readonly type = DELETE_INGREDIENT;
	// constructor(public payload: number) { } //what the index is in the old function -- a number
}

export class StartEdit implements Action {
	readonly type = START_EDIT;

	constructor(public payload: number) { } //what the index is in the old function -- a number
}

export class StopEdit implements Action {
	readonly type = STOP_EDIT;
}



export type ShoppingListActions = 
			AddIngredient |
			AddIngredients |
			UpdateIngredient |
			DeleteIngredient |
			StartEdit |
			StopEdit; //bundle all together, make it type so it can be applied to action in reducers