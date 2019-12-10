import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/service/shopping.service';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredientName : string;
  ingredientAmount : number;

  constructor( private shoppingService : ShoppingService ) { }

  ngOnInit() {
  }

  addIngredient()
  {
    this.shoppingService.addIngredientInRepo(new Ingredient(this.ingredientName, this.ingredientAmount));
  }
}
