import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingList } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[ShoppingList]
})
export class ShoppingListComponent implements OnInit {

  Ingredients:ingredient[];

  constructor(private shopponglistservice:ShoppingList) { }


  ngOnInit() {
    this.Ingredients = this.shopponglistservice.getIngredients();
    this.shopponglistservice.ingredientHaschange.subscribe((ingredetsss:ingredient[])=>{this.Ingredients=ingredetsss;});
    
  }
//e


}
