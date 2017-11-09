import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TwoWayComponent } from './two-way/two-way.component';
import {FormsModule} from "@angular/forms";
import { DescComponent } from './two-way/desc/desc.component';
import {ShoppingService} from "./shopping.service";
import {WidgetListServiceService} from "./widget-list-service.service";
import {HttpModule} from "@angular/http";
import { ChildbarComponent } from './childbar/childbar.component';
import {RouterModule} from '@angular/router';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';

const  approutes = [
  {path:"home",component:ChildbarComponent},
  {path:"about",component:ListDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TwoWayComponent,
    DescComponent,
    ChildbarComponent,
    ListDetailComponent,
    InputComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [WidgetListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
