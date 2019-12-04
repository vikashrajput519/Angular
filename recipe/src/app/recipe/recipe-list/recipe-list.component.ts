import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit{
    
    recipes: Recipe[] = [
        new Recipe('Mutton Tandoor','A deloicious Indian Mutton tandoor','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
        new Recipe('Prons Bhujiya', 'A delicious Prons item', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
        new Recipe('Prons Bhujiya', 'A delicious Prons item', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg')
    ];

    @Output()
    recipeWasSelected = new EventEmitter<Recipe>();

    ngOnInit()
    {

    }

    onRecipeSelected(recipeData : Recipe)
    {
        this.recipeWasSelected.emit(recipeData);
    }
}