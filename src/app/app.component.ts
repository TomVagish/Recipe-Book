import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'TheProject';


  navigate:boolean = true;

  constructor()
  {
   
  }

  ngOnInit(){

  
   
  }

  
  OnfeatureSelect(nav:string)
  {
    if(nav=='Recipe'){
      this.navigate= true;
    }else{
      this.navigate=false;
    }

  }


 
}
