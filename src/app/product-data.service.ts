import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  url:string ="/assets/data/products.json"

  constructor(private http:HttpClient ) { }

  getProducts() :Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url)
  }
}


