import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map'

const BASE_URL = 'http://localhost:3000/items';
const header = {headers:new Headers({'Content-type':'application/json'})}
@Injectable()
export class WidgetListServiceService {

  constructor(private http:Http) {}
  loadData(){
    return this.http.get(BASE_URL)
      .map(res => res.json())
  }

  postData(data){
    return this.http.post(BASE_URL,data,header)
      .map(res => res.json())
  }

  updateData(newData){
    let id = newData.id;
    return this.http.put(BASE_URL+"/"+id,newData,header)
      .map(res => res.json())
  }


}
