import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { BasicProjectComponent } from './basicproject/basicproject.component';
import { HeaderComponent } from '../app/project/header/header.component';
import { ReceipeComponent } from '../app/project/recipe/recipe.component';
import { RecipeDetailComponent } from '../app/project/recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from '../app/project/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from '../app/project/recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/shopping-list/shopping-edit/shopping-edit.component';
import { Debugging } from './debugging/debugging.component';

const appRoutes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'basic', component : BasicComponent },
  { path : 'basicProject', component : BasicProjectComponent },
  { path : 'receipe', component : ReceipeComponent },
  { path : 'receipeDetail', component : RecipeDetailComponent },
  { path : 'receipeList', component : RecipeListComponent },
  { path : 'receipeItems', component : RecipeItemComponent },
  { path : 'receipeItems', component : RecipeItemComponent },
  { path : 'shoppingList', component : ShoppingListComponent },
  { path : 'shoppingEdit', component : ShoppingEditComponent },
  { path : 'debug', component : Debugging },
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HomeComponent,
    BasicProjectComponent,
    HeaderComponent,
    ReceipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    Debugging
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
