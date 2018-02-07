import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
// import { Subscribe } from 'rxjs/Subscription';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class DataService {
	// recipes = this.recipeService.recipes([]);

	constructor(private http: Http,
				private recipeService: RecipeService, 
				private authService: AuthService) { }


	storeRecipes() {
		const token = this.authService.getToken(); //get token to validate user

		return this.http.put('https://ng-recipe-book-a67b6.firebaseio.com/recipes.json?auth=' + token,
			this.recipeService.getRecipes());
	}

	getRecipes() { 
		const token = this.authService.getToken(); //get token to validate user
		
		this.http.get('https://ng-recipe-book-a67b6.firebaseio.com/recipes.json?auth=' + token)
			.map(
				(response: Response) => {
					const recipes: Recipe[] = response.json();
					for (let recipe of recipes) {
						if (!recipe['ingredients']) {
							// console.log(recipe);
							recipe['ingredients'] = [];
						}
					}
					return recipes;
				}
			)
			.subscribe(
				(recipes: Recipe[]) => {
					this.recipeService.setRecipes(recipes);
				}
		);
	}

}
