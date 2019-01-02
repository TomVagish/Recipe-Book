import { ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";


export class ShoppingList{

   ingredientHaschange = new EventEmitter<ingredient[]>();
    

    private Ingredients:ingredient[] =[
        new ingredient("Apples",5),
        new ingredient("Peach",8),
        new ingredient("Watermelon",3),
      ];

    AddIngredient(Newingredient:ingredient)
    { 
         this.Ingredients.push(Newingredient);
         this.ingredientHaschange.emit(this.Ingredients.slice());
    }

    getIngredients()
    {
        return this.Ingredients.slice();
    }
    
  
}