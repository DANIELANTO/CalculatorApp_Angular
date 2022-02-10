import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  bill: number = 0;
  tip: number = 0;
  quantity: number = 0;
  
  constructor(){}
  
  setTip(tip:number){
    this.tip = tip;
  }
  
  reset(){
    this.bill = 0;
    this.tip = 0;
    this.quantity = 0;
  }

}
