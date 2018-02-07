import { Component,
   OnInit, 
   OnDestroy,
   ViewChild 
  //  ElementRef, 
  //  Input 
  } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm; //access form 
  subscription: Subscription;
  editMode = false; //don't edit if you don't select it
  editedItemIndex: number; //the id of the item selected
  editedItem: Ingredient; //the properties of the selected item
    // @ViewChild('nameInput') nameInputRef: ElementRef; //Add ref to refer back to local ref in html
    // @ViewChild('amountInput') amountInputRef: ElementRef;
    // @Output() ingredientAdded = new EventEmitter<Ingredient>();//Ingredient = {name: string, amount: number} since that's what's in the model
    //**all above replaced by service**

    //@Input() ingredient: Ingredient;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing //when you hit edit/the item, this happens
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index; //get the id of the clicked item
          this.editMode = true; //make sure we are editing and not adding
          this.editedItem = this.shoppingService.getIngredient(index); //get the properties of ingredient
          this.slForm.setValue({ //pull the values that we need to edit into the form fields
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  // onAddIngredient(amountInput: HTMLInputElement) {
  //   // const ingName = this.nameInputRef.nativeElement.value;
  //   // const ingAmt = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmt);
  //   // this.ingredientAdded.emit(newIngredient);
  //   this.shoppingService.onIngredientAdded(newIngredient);
  // }

  onAddIngredient(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) { //if we are in edit mode
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient)//get the new ingredient and pass into the array
    } else {
      this.shoppingService.onIngredientAdded(newIngredient);//otherwise add the new item as usual
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
