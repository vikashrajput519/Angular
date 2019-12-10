import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  // For below line of code we can simply remove slice() while returing the array in getIngredientArray()
  //elementAddEmitter = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 10)
  ];

  constructor() {
  }

  getIngredientArray() {
    return this.ingredients;
  }

  addIngredientInRepo(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.elementAddEmitter.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // Or We can directly push the element without using for loop
    //   for( let ingredient of ingredients )
    //     {
    //       this.addIngredientInRepo(ingredient);
    //     }
    // }
    this.ingredients.push(...ingredients);
  }
}
