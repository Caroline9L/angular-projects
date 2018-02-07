import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingComponent } from './shopping.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
	declarations: [ //all components w recipe in folder & import
		ShoppingComponent,
		ShoppingEditComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [
		FormsModule
	]
})
export class ShoppingModule {

}