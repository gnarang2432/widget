import { Component,OnInit } from '@angular/core';
import {data} from './child-data';
import {ShoppingService} from "./shopping.service";
import {WidgetListServiceService} from "./widget-list-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*title = 'app';

  person = new data("ram",2);

  changeName(){
    //this.person = new data("vishrut",1000);
    this.person.name = "amit";
  }*/
  /*constructor(private shopping:ShoppingService){

  }*/
  items:Object [];
  itemFound : Object;
  constructor(private widget:WidgetListServiceService){}

  ngOnInit(){
    this.widget.loadData()
      .subscribe((data)=>{
        this.items = data;
      })
    //console.log(this.widget.getData());
  }
  updateWidget(item){
    this.itemFound = item.item;
  }
  addWidget(item){
    //console.log(item.name);
    //console.log(item.price);
   // let widget = {
   //    item:item,
   //    price:price
   //  }
    if(!item.id){
      this.widget.postData(item)
        .subscribe(data => {
          this.items.push(data);
          console.log(data);
        })
    }
    else{
      this.widget.updateData(item)
        .subscribe(data => {
         this.items[item.id]=item;
          console.log(data);
        })
      this.widget.loadData()
        .subscribe((data)=>{
          this.items = data;
        })
    }

  }

  link = {
    home:["/home"],
    about:["/about"]
  }

}
