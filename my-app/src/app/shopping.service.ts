import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingService {

  shopping:Object[] = [
    {
      "item":"Mobile",
      "Price":"4000"
    },
    {
      "item":"Desktop",
      "Price":"4000"
    },
    {
      "item":"Watch",
      "Price":"4000"
    }
  ]

}
