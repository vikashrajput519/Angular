import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingService } from '../service/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingService : ShoppingService) {  }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredientArray();
    // this.shoppingService.elementAddEmitter.subscribe(
    //   (ingredients: Ingredient[] ) => {
    //       this.ingredients = ingredients;
    //   }
  
    //)
  }

}
