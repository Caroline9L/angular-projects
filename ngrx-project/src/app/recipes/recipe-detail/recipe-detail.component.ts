import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
// import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
// import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers'; 
// import * as fromApp from '../../store/app.reducers';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';
// import { RecipeActions, DeleteRecipe } from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // recipe: Recipe;
  recipeState: Observable<fromRecipe.State>;
  id: number;

  // constructor(private recipeService: RecipeService,
  //             private route: ActivatedRoute,
  //             private router: Router,
  //             private store: Store<fromShoppingList.AppState>) {//{shoppingList: {ingredients: Ingredient[]}}
  // }
  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromRecipe.FeatureState>) {//
  }


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // this.recipe = this.recipeService.getRecipe(this.id);
          this.recipeState = this.store.select('recipes');
        }
      );
  }

  onAddToShoppingList() {
    this.store.select('recipes')
      .take(1)
      .subscribe((recipeState: fromRecipe.State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(
          recipeState.recipes[this.id].ingredients) //select the recipe state from the overall state of the app, from there the array and the number of that recipe (which is encoded in the url), then access the ingredients
        );
      });
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    // this.store.dispatch(new ShoppingListActions.UpdateIngredients(this.recipe.ingredients));

  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
