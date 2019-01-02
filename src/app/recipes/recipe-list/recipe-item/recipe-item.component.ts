import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Recipeservice } from '../../recipe.service';





@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
 


})

export class RecipeItemComponent implements OnInit {


  @Input() recipe: Recipe;

  recipes: Recipe[];

  constructor(private RecipeService:Recipeservice){}

 

  ngOnInit() {
    this.recipes = this.RecipeService.getRecipe();
    this.RecipeService.Recipeselected.emit(this.recipes[0]);
  }

  onSelected()
  {
    this.RecipeService.Recipeselected.emit(this.recipe);
    window.scrollTo({
      top: 950,
      behavior: 'smooth',
    });
  }


}
