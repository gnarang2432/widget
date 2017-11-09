import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  name:string;
  constructor() { }

  ngOnInit() {
  }
  changeName(event){
    console.log("Output from child "+event);
    this.name = event;
  }

}
