import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingList } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers:[ShoppingList]
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shopponglist:ShoppingList) { }

  ngOnInit() {
  }
  
  Ingredient :ingredient;


public NameInput:string;
public AmountInput:number;
  
  
 // another option to take control on Var from Dom/html and use it here in Ts,
 //the Var in Html code must be with # before the Var name | Ex - #NameInput

  // @ViewChild ('nameInput') nameInputView:ElementRef;
  // @ViewChild ('amountInput') amountInputView:ElementRef;
 



  AddIngredient(){

      const AddNewIngredient = new ingredient(this.NameInput,this.AmountInput);
      this.shopponglist.AddIngredient(AddNewIngredient);

   
    this.NameInput=null;
    this.AmountInput=null;
    

    //the option with the Viewchild and enter the data to the emit
    // this.Ingredient.emit({
      
    //   name:this.nameInputView.nativeElement.value,
    //   amount:this.amountInputView.nativeElement.value
    // });
    

  }

}
