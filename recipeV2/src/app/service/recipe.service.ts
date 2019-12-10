import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {

  private recipes: Recipe[] = [];

  onListItemClicked = new EventEmitter<Recipe>();

  constructor( private shoppingService : ShoppingService ) { 
    this.recipes.push(new Recipe('Mutton Tandoor', 'A deloicious Indian Mutton tandoor', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',[new Ingredient('Meat',1), new Ingredient('French fries',5)]));
    this.recipes.push(new Recipe('Prons salad', 'Helathy Prons salad', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', [new Ingredient('Meat',1), new Ingredient('Buns',5)]));
    this.recipes.push(new Recipe('Prons Bhujiya', 'A delicious Prons item', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg',[new Ingredient('Meat',1), new Ingredient('French fries',5)]));
    this.recipes.push(new Recipe('Fish Fry', 'Delicious Fish Fry', 'https://p1.pxfuel.com/preview/949/796/952/food-recipe-delicious-breakfast-lunch-dinner.jpg',[new Ingredient('Meat',1), new Ingredient('French fries',5)]));
  }

  ngOnInit() {
   
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addingredientsToShopingList( ingredients : Ingredient[] )
  {
    this.shoppingService.addIngredients(ingredients);
  }

}
