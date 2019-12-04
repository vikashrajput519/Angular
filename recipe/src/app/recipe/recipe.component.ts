import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({

    selector: 'recipe-app',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']

})

export class ReceipeComponent implements OnInit {

    selectedRecipe : Recipe;
    ngOnInit() {
        
    }

}