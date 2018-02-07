import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() fullRecipeSelected = new EventEmitter<void>(); //removing because service
  @Input() index: number;


  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onShowRecipe() {
  //   // this.fullRecipeSelected.emit();//removing because service
  //   this.recipeService.recipeSelected.emit(this.recipe); //new event from service to display selected recipe
  // }

}
