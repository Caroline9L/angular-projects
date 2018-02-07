import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {
  // addIngredient: Ingredient;
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  //   this.ingredients = this.shoppingService.getIngredients();
  //   this.shoppingService.ingredientsChanged
  //      .subscribe(
  //        (ingredients: Ingredient[]) => {
  //          this.ingredients = ingredients
  //        }
  //      );
  // }
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientsChanged
       .subscribe(
         (ingredients: Ingredient[]) => {
           this.ingredients = ingredients
         }
       );
  }

  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
