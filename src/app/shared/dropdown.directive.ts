import {Directive, HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropDown]',
  exportAs:'appDropDown'
  })
  
export class DropdownDirective{
    constructor(){}
    
   @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){
       this.isOpen = !this.isOpen;
    }
  
  

  
    
}