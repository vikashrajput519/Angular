import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
    selector: 'recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit{

//     Way to Define Recipe Array
//    recipes : Recipe[] =[
//     new Recipe('Prons Bhujiya', 'A delicious Prons item', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
//     new Recipe('Prons Bhujiya', 'A delicious Prons item', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg')
//    ];

    @Input()
    recipe : Recipe;

    constructor( private recipeService : RecipeService ) {}

    ngOnInit(){ }

    emitsListItem( recipe : Recipe )
    {
        this.recipeService.onListItemClicked.emit(recipe);
    }
}
