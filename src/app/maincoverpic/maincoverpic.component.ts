import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-maincoverpic',
  templateUrl: './maincoverpic.component.html',
  styleUrls: ['./maincoverpic.component.css'],

  
})
export class MaincoverpicComponent implements OnInit {

  ChangPic = true;
  i = 0;
  Array = ['https://png.pngtree.com/back_origin_pic/03/87/32/7ea1f79443810129fbebf110ddadb63b.jpg',
  'https://cdn-img.russellhobbs.com/manager/russellhobbs_com/recipes/baking/large_Chocolate-Caramel-Cake-1920x500.jpg',
  'https://www.berthelet.com/wp-content/uploads/2017/10/TiramisuRecette.jpg'
];


  
  
  constructor() { 


    
    setInterval (() => {

      if(this.i==this.Array.length-1){
        this.i=0;
      }else{
        this.i++;
      }
     
    }, 2000)
   
  }

  ngOnInit() {
  }

}
