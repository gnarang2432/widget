import { Component, OnInit,Input } from '@angular/core';
import {ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input ('name') person;
  constructor() { }

  ngOnInit() {
  }

}
