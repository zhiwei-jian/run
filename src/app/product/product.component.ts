import { Component, OnInit } from '@angular/core';

export interface Product {
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
    {name: 'iPhone 9', price: 1000, description : 'iPhone 9 out of date'},
    {name: 'iPhone 10', price: 1100, description : ''},
    {name: 'iPhone X', price: 1200, description : ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
