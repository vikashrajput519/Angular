import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
    selector: 'recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit{
  
    recipe : Recipe;

    constructor( private recipeService : RecipeService){
        this.recipeService.onListItemClicked.subscribe(
            (recipe : Recipe) => {
                this.recipe = recipe;
                console.log('Test - '+recipe.name+' '+recipe.imagePath)
            }
        )
    } 
    
    ngOnInit()
    {

    }

    onAddToSoppingList()
    {
        this.recipeService.addingredientsToShopingList(this.recipe.ingredients);
    }
}