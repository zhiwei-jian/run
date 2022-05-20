import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) { }

  shippingCosts = this.cartService.getShippingPrices();

  ngOnInit(): void {
  }

}
