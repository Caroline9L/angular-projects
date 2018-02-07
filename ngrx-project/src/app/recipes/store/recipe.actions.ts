import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPE = 'SET_RECIPE';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const STORE_RECIPES = 'STORE_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';


export class SetRecipe implements Action { //used for effects only
	readonly type = SET_RECIPE;

	constructor(public payload: Recipe[]) { }
}

export class AddRecipe implements Action { //used for effects only
	readonly type = ADD_RECIPE;

	constructor(public payload: Recipe) { }
}

export class UpdateRecipe implements Action { //used for effects only
	readonly type = UPDATE_RECIPE;

	constructor(public payload: {index: number, updatedRecipe: Recipe}) { }
}

export class DeleteRecipe implements Action { //used for effects only
	readonly type = DELETE_RECIPE;

	constructor(public payload: number) { }
}

export class StoreRecipes implements Action { //used for effects only
	readonly type = STORE_RECIPES;
}

export class FetchRecipes implements Action { //used for effects only
	readonly type = FETCH_RECIPES;
}

export type RecipeActions = 
			SetRecipe | 
			AddRecipe | 
			UpdateRecipe | 
			DeleteRecipe | 
			StoreRecipes | 
			FetchRecipes;
