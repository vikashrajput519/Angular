import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReceipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

const appRoutes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'receipe', component : ReceipeComponent },
  { path : 'receipeDetail', component : RecipeDetailComponent },
  { path : 'receipeList', component : RecipeListComponent },
  { path : 'receipeItems', component : RecipeItemComponent },
  { path : 'receipeItems', component : RecipeItemComponent },
  { path : 'shoppingList', component : ShoppingListComponent },
  { path : 'shoppingEdit', component : ShoppingEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReceipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
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
