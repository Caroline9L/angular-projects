// import { Action } from '@ngrx/store';
import * as ShoppingListActions from './shopping-list.actions'; //the export type from actions.ts
import { Ingredient } from '../../shared/ingredient.model';
import { UpdateIngredient } from './shopping-list.actions';

// export interface AppState { //moved to app reducer
// 	shoppingList: State
// }

export interface State {
	ingredients: Ingredient[];
	editedIngredient: Ingredient;
	editedIngredientIndex: number;
}

// export const ADD_INGREDIENT = 'ADD_INGREDIENT'; //convention - uppercase, same name - this is action value. This moved to actions.ts

const initialState: State = {
	ingredients: [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10),
	],
	editedIngredient: null,
	editedIngredientIndex: -1
};

// export function shoppingListReducer(state = initialState, action: Action) { //inital state must be defined in code, since it has none to start with
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
	switch (action.type) {
		// case ADD_INGREDIENT:
		case ShoppingListActions.ADD_INGREDIENT:
			return {
				...state,
				ingredients: [...state.ingredients, action.payload]//actions are created by me in the action file. payload is what data is getting added in ths action
			};
		case ShoppingListActions.ADD_INGREDIENTS:
			return {
				...state,
				ingredients: [...state.ingredients, ...action.payload]
			};
		case ShoppingListActions.UPDATE_INGREDIENT:
			const ingredient = state.ingredients[state.editedIngredientIndex]; //we need to grab the current ingredient we aare changing -- we check the # of the action's data for it //action.payload.index = state.editedIngredientIndex
			const updatedIngredient = {
				...ingredient,//copy the properties of the old object...
				...action.payload.ingredient//and replace them with the new ones
			};
			const ingredients = [...state.ingredients];//add to array -- get old ingredients
			ingredients[state.editedIngredientIndex] = updatedIngredient; //replace the item at that loaction in the array with the new one
			return {
				...state,
				ingredients: ingredients,
				editedIngredient: null,
				editedIngredientIndex: -1
			};
		case ShoppingListActions.DELETE_INGREDIENT:
			const oldIngredients = [...state.ingredients]; //get current array
			oldIngredients.splice(state.editedIngredientIndex, 1); //remove one element from it action.payload = 
			return {
				...state,
				ingredients: oldIngredients,
				editedIngredient: null,
				editedIngredientIndex: -1
			};
		case ShoppingListActions.START_EDIT:
			const editedIngredient = {...state.ingredients[action.payload]};
			return {
				...state,
				editedIngredient: editedIngredient,
				editedIngredientIndex: action.payload
			};
		case ShoppingListActions.STOP_EDIT:
			return {
				...state,
				editedIngredient: null,
				editedIngredientIndex: -1
			};

		default:
			return state;
	}
	// return state; //absolute minimum to get this to work
}
