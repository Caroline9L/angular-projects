// import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
	// ingredientsChanged = new EventEmitter<Ingredient[]>();
	ingredientsChanged = new Subject<Ingredient[]>();
	startedEditing = new Subject<number>();
	private ingredients: Ingredient[] = [
		new Ingredient('Bell peppers', 10),
		new Ingredient('Sausage', 2)
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	getIngredient(index: number) {
		return this.ingredients[index];
	}

	onIngredientAdded(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		// this.ingredientsChanged.emit(this.ingredients.slice());
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]) {
		// for (let ingredient of ingredents) {
		// 	this.addIngredient(ingredient);
		// }
		this.ingredients.push(...ingredients); //make ingredients into a list that we will push to the shopping list
		// this.ingredientsChanged.emit(this.ingredients.slice());//push the new array on change
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	updateIngredient(index: number, newIngredient: Ingredient) {
		this.ingredients[index] = newIngredient; //make this into a new ingredient
		this.ingredientsChanged.next(this.ingredients.slice()); //push new item into the array
	}

	deleteIngredient(index: number) {
		this.ingredients.splice(index, 1); //remove one item at that index
		this.ingredientsChanged.next(this.ingredients.slice()); //make a copy of updated array
	}

}