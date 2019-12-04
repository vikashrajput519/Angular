import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
    selector: 'recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit{

    @Input()
    recipe : Recipe;
    
    @Output()
    recipeSelected = new EventEmitter<void>();

    ngOnInit()
    {

    }

    onSelectListItem()
    {
        this.recipeSelected.emit();
    }
}
