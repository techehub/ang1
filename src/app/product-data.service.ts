import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  products= [

    {id:"111", name:"aaaaaaa", price:76565},
    {id:"222", name:"aaaaaaa", price:76565},
    {id:"333", name:"aaaaaaa", price:76565}
  ]
  constructor() { }

  getProducts(){
    return this.products;
  }
}
