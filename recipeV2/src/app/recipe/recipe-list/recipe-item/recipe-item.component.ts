import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

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
    
    @Output()
    listItemSelected = new EventEmitter<void>();

    ngOnInit()
    {
    }

    emitsListItemClick()
    {
        this.listItemSelected.emit();
    }
}
