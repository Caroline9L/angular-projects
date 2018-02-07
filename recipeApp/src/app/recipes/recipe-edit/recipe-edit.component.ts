import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  // recipe: Recipe; 
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, 
              private recipeService: RecipeService, 
              private router: Router) { } 

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // this.recipe = this.recipeService.getRecipe(this.id);
          this.editMode = params['id'] != null;
          this.initForm();//call form when you reload the page/when there is a change
        }
      );
  }

  onSubmit() {
    // console.log(this.recipeForm);
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients'],
    // ); //this matches the recipe model, so we can shortcut
    if (this.editMode) {
      // this.recipeService.updateRecipe(this.id, newRecipe);
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);

    } else {
      // this.recipeService.addRecipe(newRecipe);
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(//convert the information into <> and push it to below
      new FormGroup({ //make another form group for adding; no initial values
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel() {
    // this.recipeForm.reset();//clears the form but is not the lesson's intent
    this.router.navigate(['../'], {relativeTo: this.route}); //go back to recipe page 2 levels up
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }


  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) { //if we're in edit mode
      const recipe = this.recipeService.getRecipe(this.id); //get the recipe by id from the service
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) { //check if the recipe has ingredients
        for (let ingredient of recipe.ingredients) {//loop thru the ingredients array
          recipeIngredients.push(//push ingredient onto recipe form group, because we need to control name AND amount
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          ); 
        }
      }
    }

    this.recipeForm = new FormGroup({ //create the form and populate if necessary
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients //as listed above
    });
  
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}

