import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService : CartService,
    private formBuilder : FormBuilder,
    // private jsonSvc : DynamicFormService,

  ) { }

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  ngOnInit(): void {
  }

  clearCart(){
    this.items = this.cartService.clearCart();
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    const str = JSON.stringify(this.checkoutForm.value);

    window.alert(str);
    this.checkoutForm.reset();
  }
}
