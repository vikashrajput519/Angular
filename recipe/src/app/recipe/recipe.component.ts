import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({

    selector: 'recipe-app',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']

})

export class ReceipeComponent implements OnInit {

    recipe : Recipe;

    ngOnInit() {
        
    }

    listItemReceived(recipe : Recipe)
    {
        this.recipe = recipe;
        console.log(recipe.name);
    }
}