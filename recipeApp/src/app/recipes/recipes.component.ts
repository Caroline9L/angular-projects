import { Component, OnInit, Input } from '@angular/core';

// import { Recipe } from './recipe.model';
// import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;
 
  constructor() { } //private recipeService: RecipeService

  ngOnInit() {
  //   this.recipeService.recipeSelected
  //     .subscribe(
  //       (recipe: Recipe) => { //emitter sends over this info
  //         this.selectedRecipe = recipe; //selected is the same recipe we got from the event
  //       }
  //     );//listens to recipeSelected for changes
  }

}
