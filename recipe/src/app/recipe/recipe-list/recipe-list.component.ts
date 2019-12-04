import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

    // If we will use ony recipes : Recipe [] then push will not work on this since array is not yet initiated so use like below;
    recipes: Recipe[] = [];

    enableRecipeFormSection = false;

    recipeName : string;
    description : string;
    imagePath : string;

    @Output()
    listItemSeletedWasEmitted = new EventEmitter<Recipe>();

    ngOnInit() {
        this.recipes.push(new Recipe('Mutton Tandoor','A deloicious Indian Mutton tandoor','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'));
        this.recipes.push(new Recipe('Prons Bhujiya', 'A delicious Prons item', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'));
        this.recipes.push(new Recipe('Prons Bhujiya', 'A delicious Prons item', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'));
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

    listSelectedItemEmited(recipe : Recipe)
    {
        this.listItemSeletedWasEmitted.emit(recipe);
    }
}