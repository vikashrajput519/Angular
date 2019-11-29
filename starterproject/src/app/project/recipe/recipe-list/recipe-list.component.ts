import { Component, OnInit } from '@angular/core';
import { Recepe } from 'src/app/model/recipe.model';

@Component({
    selector: 'recipe-list-app',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit{

    recipes : Recepe [] = [
        new Recepe('Mutton Tandoor','A deloicious Indian Mutton tandoor','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
        new Recepe('Prons Bhujiya','A deloicious Prons item','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
        new Recepe('Prons Bhujiya','A deloicious Prons item','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
        new Recepe('Prons Bhujiya','A deloicious Prons item','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg')
    ];
    
    ngOnInit()
    {

    }
}