import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit{
    
    // recipes : Recipe[] = [
    //     new Recipe('Prons Bhujiya', 'A deloicious Prons item', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
    //     new Recipe('Prons Bhujiya', 'A deloicious Prons item', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
    //     new Recipe('Prons Bhujiya', 'A deloicious Prons item', 'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg')
    // ];
    recipes : Recipe[] = [
        {name : 'Prons Bhujiya', description:'A deloicious Prons item', imagePath:'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'},
        {name:'Prons Bhujiya', description:'A deloicious Prons item', imagePath:'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'},
        {name:'Prons Bhujiya', description:'A deloicious Prons item', imagePath:'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'}
    ];
    ngOnInit()
    {

    }
    
}