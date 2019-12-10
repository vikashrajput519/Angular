import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

    // If we will use ony recipes : Recipe [] then push will not work on this since array is not yet initiated so use like below;
    recipes: Recipe[];

    enableRecipeFormSection = false;

    recipeName : string;
    description : string;
    imagePath : string;

    constructor(private recipeService : RecipeService) {
    }

    ngOnInit()
    {
        this.recipes = this.recipeService.getRecipes();
    }
    addNewRecipeButtonClick() {
        this.enableRecipeFormSection = true;
    }

    addRecipe() {
        this.enableRecipeFormSection = false;
        this.recipes.push(
            new Recipe(this.recipeName, this.description, this.imagePath)
        );
    }
    clear()
    {
        this.recipeName = '';
        this.description = '';
        this.imagePath = '';
    }
    hideSection()
    {
        this.enableRecipeFormSection = false;
    }
}