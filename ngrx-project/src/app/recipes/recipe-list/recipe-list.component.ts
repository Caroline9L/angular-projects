import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
import * as fromRecipe from '../store/recipe.reducers';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes: Recipe[];
  recipeState: Observable<fromRecipe.State>;
  // subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>) {//private recipeService: RecipeService,
  }

  ngOnInit() {
    this.recipeState = this.store.select('recipes'); //selecting the '' item in rec.mod feature argument
    // this.subscription = this.recipeService.recipesChanged
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.recipes = recipes;
    //     }
    //   );
    // this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
