import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../service/grid-data.service';

export interface Product {
  id: Number;
  name: string;
  price: Number;
  description: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [
    {id: 1, name: 'iPhone 9', price: 1000, description : 'iPhone 9 out of date'},
    {id: 2, name: 'iPhone 10', price: 1100, description : ''},
    {id: 3, name: 'iPhone X', price: 1200, description : 'iPhone x is the latest'},
  ];

  constructor(private service : GridDataService) { }

  ngOnInit(): void {
    this.service.setProducts(this.products);
  }

  share() {
    window.alert('The product has been shared!');
  }

  getNotification(event) {
    console.log(event);
    window.alert(event);
  }

}
