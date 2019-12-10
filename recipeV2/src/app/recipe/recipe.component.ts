import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({

    selector: 'recipe-app',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']

})

export class ReceipeComponent implements OnInit {

    ngOnInit() {
        
    }
}