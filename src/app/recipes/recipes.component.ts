import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Recipeservice } from './recipe.service';
import { ShoppingList } from '../shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[Recipeservice,ShoppingList],
  
})
export class RecipesComponent implements OnInit {

  SelectedRecipe:Recipe;
  
  constructor(private recipeservice:Recipeservice) { }

  ngOnInit() {
    this.recipeservice.Recipeselected.subscribe((recipe:Recipe)=>{this.SelectedRecipe = recipe;})
  }


}
