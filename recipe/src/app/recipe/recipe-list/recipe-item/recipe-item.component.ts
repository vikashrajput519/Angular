import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
    selector: 'recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit{

    @Input()
    recipe : {name : string,description : string,imagePath : string};
    // recipes : Recipe [] = [
    //     new Recipe('Mutton Tandoor','A deloicious Indian Mutton tandoor','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    //     new Recipe('Prons Bhujiya','A deloicious Prons item','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
    //     new Recipe('Prons Bhujiya','A deloicious Prons item','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
    //     new Recipe('Prons Bhujiya','A deloicious Prons item','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg')
    // ];

    ngOnInit()
    {

    }
}
