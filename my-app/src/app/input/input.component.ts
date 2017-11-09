import {Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  name:String;
  price:Number;
  @Output () notify:EventEmitter<object> = new EventEmitter<object>();
  @Input('item') itemFound;



  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.itemFound){
      this.name = this.itemFound.item;
      this.price = this.itemFound.price;
    }

  }

  addWidget(name,price){

    let widgetObj :any= {
      item:name,
      price:price
    };
    if(this.itemFound){
      widgetObj.id = this.itemFound.id;
      this.itemFound = null;
    }
    this.name="";
    this.price=null;

    // this.name = name;
    // this.price = price;

    this.notify.emit(widgetObj);
  }

}
