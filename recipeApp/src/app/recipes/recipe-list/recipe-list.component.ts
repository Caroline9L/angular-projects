import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
  // providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  // @Output() onWasRecipeSelected = new EventEmitter<Recipe>(); //not needed because of service
  // recipes: Recipe[] = [
  //     new Recipe('Test Recipe', 'Just a test', 'https://www.crossroadstech.net/images/Blog_pictures/edison-bulb.png'),
  //     new Recipe('Another Test Recipe', 'I love cheese, especially halloumi queso. Boursin paneer cow edam rubber cheese airedale croque monsieur cream cheese. Bavarian bergkase cheese triangles lancashire brie stilton babybel cut the cheese croque monsieur. Swiss danish fontina caerphilly taleggio halloumi.', 'https://www.crossroadstech.net/images/Blog_pictures/edison-bulb.png')
  // ]; //assign recipe model (model.ts) to property/array
  //moved to recipe.service

  recipes: Recipe[];
  editMode = false;
  private subscription: Subscription;

  constructor(private recipeService: RecipeService, 
              private router: Router,
              private route: ActivatedRoute) { }//inject service from parent

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged //listen to the recipes for changes and update if necessary
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});

  }
  // onRecipeSelected(recipe: Recipe) {
  //   this.onWasRecipeSelected.emit(recipe);
  // } //not needed because of service

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
