import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input('items') items:object[];
  @Output () notify:EventEmitter<object> = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }
  updateItem(item){
    let itemObj={
      item:item,
      flag:false
    }
    this.notify.emit(itemObj);
  }
}
