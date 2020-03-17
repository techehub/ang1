import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any =[]
  constructor(private service:ProductDataService) { }

  ngOnInit(): void {
    this.products=this.service.getProducts()

  }

}
