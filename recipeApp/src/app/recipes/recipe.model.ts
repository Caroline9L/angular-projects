import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string; // public - can be used elsewhere, property name, property type assigned
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) { //how we create new instance of the class
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}

// see shared/ingredient.model for the shortcut of this
