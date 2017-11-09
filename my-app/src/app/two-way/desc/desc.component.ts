import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {
  @Input('childName') name;
  @Output () notify:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  changeName(name){
    this.name = name;
    this.notify.emit(this.name);
  }

}
