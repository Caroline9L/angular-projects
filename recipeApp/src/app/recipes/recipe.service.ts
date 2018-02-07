import { Injectable } from '@angular/core';//EventEmitter, 

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';

import { Subject } from 'rxjs/Subject';

@Injectable()

export class RecipeService {
	// recipeSelected = new EventEmitter<Recipe>();
	recipesChanged = new Subject<Recipe[]>(); //for returning new updated array on update

	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Schnitzel', 
			'A super-tasty schnitzel',
			'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]),
		new Recipe(
			'Big Fat Burger', 
			'I love cheese.',
			'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)

			])
	]; //assign recipe model (model.ts) to property/array

	constructor(private shoppingService: ShoppingService) { }

	setRecipes(recipes: Recipe[]) {//to set up fetched data
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipes() {
		return this.recipes.slice();//returns recipes so that they can be accessed from outside the componant -- slice makes it an exact copy of this array
	}

	getRecipe(id: number) {
		return this.recipes[id];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingService.addIngredients(ingredients);
	}//inject the shopping list service to add ingredients to list

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice()); //return new updated array
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1); 
		this.recipesChanged.next(this.recipes.slice());
	}
}